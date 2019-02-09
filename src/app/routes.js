const routes = require("next-routes")();

routes.add("login", "/login");
routes.add("home", "/mypage");
routes.add("city", "/city/:cityId");
routes.add("city/addfav", "/city/:cityId/addFav");
routes.add("city/place", "/city/:cityId/place/:placeId");

module.exports = routes;
