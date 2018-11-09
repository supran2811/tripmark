import { Router } from "../routes";

export default (res, target) => {
  if (res) {
    // server
    // 303: "See other"
   
    res.writeHead(303, { Location: target });
    res.end();
  } else if(window) {
    // In the browser, we just pretend like this never even happened ;)
    // Router.replaceRoute(target);
    window.location.href = target;
  }
};