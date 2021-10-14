const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware(["/login", "/signup", "/basic", "/med"], { target: "https://radiant-cliffs-18017.herokuapp.com/" })
  );
};