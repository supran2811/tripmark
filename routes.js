const routes = require('next-routes')();

routes.add('login', '/login');
routes.add('home', '/mypage');
routes.add('city', '/city/:cityId');
routes.add('city/addfav', '/city/:cityId/addFav');
routes.add('place', '/place/:placeId');


module.exports = routes;