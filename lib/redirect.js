import { Router } from "../routes";

export default (context, target) => {
  if (context && context.res) {
    // server
    // 303: "See other"
   
    context.res.writeHead(303, { Location: target });
    context.res.end();
  } else {
    console.log("coming here 2222!!",target);
    // In the browser, we just pretend like this never even happened ;)
    Router.replaceRoute(target);
  }
};