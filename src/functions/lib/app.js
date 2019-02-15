"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const bodyParser = require("body-parser");
const express = require("express");
const session = require("express-session");
const FileStore = require("connect-loki")(session);
const path = require("path");
const next = require("next");
const compression = require("compression");
const LRUCache = require("lru-cache");
const i18nextMiddleware = require("i18next-express-middleware");
const Backend = require("i18next-node-fs-backend");
const i18n = require("../../i18n");
const router = require("../../routes");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev, dir: "../../app" });
const handle = app.getRequestHandler();
const routerHandler = router.getRequestHandler(app, ({ req, res, route, query }) => {
    renderAndCache(req, res, route.page, query);
});
const server = express();
i18n
    .use(Backend)
    .use(i18nextMiddleware.LanguageDetector)
    .init({
    fallbackLng: "en",
    preload: ["en"],
    ns: ["common", "authdata", "homedata", "placedata"],
    backend: {
        loadPath: path.join(__dirname, "../../app/locales/{{lng}}/{{ns}}.json"),
        addPath: path.join(__dirname, "../../app/locales/{{lng}}/{{ns}}.missing.json")
    }
}, () => {
    // loaded translations we can bootstrap our routes
    app.prepare().then(() => {
        server.use(bodyParser.json());
        server.use(compression({ threshold: 0 }));
        // server.use(session({
        //   secret: "geheimnis",
        //   saveUninitialized: true,
        //   store: new FileStore({path: "/tmp/sessions"}),
        //   resave: false,
        //   rolling: true,
        //   httpOnly: true,
        //   cookie: { maxAge: 604800000 } // week
        // }));
        // enable middleware for i18next
        server.use(i18nextMiddleware.handle(i18n));
        // serve locales for client
        server.use("/locales", express.static(path.join(__dirname, "../../app/locales")));
        // missing keys
        server.post("/locales/add/:lng/:ns", i18nextMiddleware.missingKeyHandler(i18n));
        server.post("/api/login", (req, res) => {
            if (!req.body)
                return res.sendStatus(400);
            const user = req.body;
            req.session.user = user;
            res.json({ status: true, user });
        });
        server.post("/api/logout", (req, res) => {
            req.session.user = { token: "null" };
            res.json({ status: true });
        });
        server.use(routerHandler);
        // use next.js
        server.get("*", function (req, res) {
            handle(req, res);
        });
    });
});
const nextApp = functions.https.onRequest(server);
function renderAndCache(req, res, pagePath, queryParams) {
    app
        .renderToHTML(req, res, pagePath, queryParams)
        .then(html => {
        res.send(html);
    })
        .catch(err => {
        app.renderError(err, req, res, pagePath, queryParams);
    });
}
;
exports.default = nextApp;
//# sourceMappingURL=app.js.map