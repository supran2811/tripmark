
const bodyParser = require("body-parser");
const express = require("express");
const session = require("express-session");
const FileStore = require("connect-loki")(session);
const path = require("path");
const next = require("next");
const compression = require("compression");
const LRUCache = require("lru-cache");
const fs = require("fs");
const cors = require("cors");
const helmet = require("helmet");
const dotenv = require("dotenv");

dotenv.config();


const router = require("./routes");

const devProxy = {
  "/searchPlace": {
    target:
      "https://us-central1-triporg-1508486982436.cloudfunctions.net/searchPlace",
    pathRewrite: { "^/searchPlace": "/" },
    changeOrigin: true
  },
  "/autoCompleteSearch": {
    target:
      "https://us-central1-triporg-1508486982436.cloudfunctions.net/autoCompleteSearch",
    pathRewrite: { "^/autoCompleteSearch": "/" },
    changeOrigin: true
  },
  "/addBookmarkPlace": {
    target:
      "https://us-central1-triporg-1508486982436.cloudfunctions.net/addBookmarkPlace",
    pathRewrite: { "^/addBookmarkPlace": "/" },
    changeOrigin: true
  },
  "/removeBookmarkPlace": {
    target:
      "https://us-central1-triporg-1508486982436.cloudfunctions.net/removeBookmarkPlace",
    pathRewrite: { "^/removeBookmarkPlace": "/" },
    changeOrigin: true
  },
  "/getBookmarks": {
    target:
      "https://us-central1-triporg-1508486982436.cloudfunctions.net/getBookmarks",
    pathRewrite: { "^/getBookmarks": "/" },
    changeOrigin: true
  },
  "/getBookmarkPlaces": {
    target:
      "https://us-central1-triporg-1508486982436.cloudfunctions.net/getBookmarkPlaces",
    pathRewrite: { "^/getBookmarkPlaces": "/" },
    changeOrigin: true
  },
  "/getPlaceDetails": {
    target:
      "https://us-central1-triporg-1508486982436.cloudfunctions.net/getPlaceDetails",
    pathRewrite: { "^/getPlaceDetails": "/" },
    changeOrigin: true
  },
  "/getCityDetails": {
    target:
      "https://us-central1-triporg-1508486982436.cloudfunctions.net/getCityDetails",
    pathRewrite: { "^/getCityDetails": "/" },
    changeOrigin: true
  }
};

const customHost = process.env.HOST;
const host = customHost || null;
const prettyHost = customHost || "localhost";
const port = parseInt(process.env.PORT, 10) || 3000;

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const i18nextMiddleware = require("i18next-express-middleware");
const Backend = require("i18next-node-fs-backend");
const i18n = require("./i18n");

const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60 // 1hour
});

// const buildId = isProd
//   ? fs.readFileSync('./.next/BUILD_ID', 'utf8').toString()
//   : null;

/*
 * NB: make sure to modify this to take into account anything that should trigger
 * an immediate page change (e.g a locale stored in req.session)
 */
const getCacheKey = function getCacheKey(req) {
  return `${req.url}`;
};

const renderAndCache = function renderAndCache(
  req,
  res,
  pagePath,
  queryParams
) {
  const key = getCacheKey(req);

  if (ssrCache.has(key) && !isDev) {
    res.send(ssrCache.get(key));
    return;
  }

  app
    .renderToHTML(req, res, pagePath, queryParams)
    .then(html => {
      // Let's cache this page
      if (!dev) {
        ssrCache.set(key, html);
      }

      res.send(html);
    })
    .catch(err => {
      app.renderError(err, req, res, pagePath, queryParams);
    });
};

const routerHandler = router.getRequestHandler(
  app,
  ({ req, res, route, query }) => {
    renderAndCache(req, res, route.page, query);
  }
);

// init i18next with serverside settings
// using i18next-express-middleware
i18n
  .use(Backend)
  .use(i18nextMiddleware.LanguageDetector)
  .init(
    {
      fallbackLng: "en",
      preload: ["en"], // preload all langages
      ns: ["common", "authdata", "homedata", "placedata"], // need to preload all the namespaces
      backend: {
        loadPath: path.join(__dirname, "/locales/{{lng}}/{{ns}}.json"),
        addPath: path.join(__dirname, "/locales/{{lng}}/{{ns}}.missing.json")
      }
    },
    () => {
      // loaded translations we can bootstrap our routes
      app.prepare().then(() => {
        const server = express();
        server.use(bodyParser.json());
        server.use(compression({ threshold: 0 }));

        server.use(session({
          secret: "geheimnis",
          saveUninitialized: true,
          store: new FileStore({path: "/tmp/sessions"}),
          resave: false,
          rolling: true,
          httpOnly: true,
          cookie: { maxAge: 604800000 } // week
        }));

        // Set up the proxy.
        if (dev && devProxy) {
          const proxyMiddleware = require("http-proxy-middleware");
          Object.keys(devProxy).forEach(function(context) {
            server.use(proxyMiddleware(context, devProxy[context]));
          });
        }

        // enable middleware for i18next
        server.use(i18nextMiddleware.handle(i18n));

        // serve locales for client
        server.use(
          "/locales",
          express.static(path.join(__dirname, "/locales"))
        );

        // missing keys
        server.post(
          "/locales/add/:lng/:ns",
          i18nextMiddleware.missingKeyHandler(i18n)
        );

        server.post("/api/login", (req, res) => {
          console.log("Comning to send login request!!!",req.data , req.body , req.token);
          if (!req.body) return res.sendStatus(400);
    
          const token = req.body.token;
          const uid = req.body.uid;
          req.session.decodedToken = token;
          req.session.uid = uid;
          res.json({ status: true, token });
          // auth.verifyIdToken(token)
          //   .then((decodedToken) => {
          //     req.session.decodedToken = decodedToken;
          //     return decodedToken;
          //   })
          //   .then((decodedToken) => res.json({ status: true, decodedToken }))
          //   .catch((error) => res.json({ error }));
        });

        server.post("/api/logout", (req, res) => {
          console.log("Coming here for logout!!");
          req.session.decodedToken = "null";
          req.session.uid = null;
          res.json({ status: true });
        });

        server.use(routerHandler);

        // use next.js
        server.get("*", function(req, res) {
          handle(req, res);
        } );

        server.listen(port, err => {
          if (err) throw err;
          console.log("> Ready on http://localhost:3000");
        });
      });
    }
  );
