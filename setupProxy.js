const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/login',
    '/signup',
    '/basic',
    '/med',
    createProxyMiddleware({
      target: 'https://radiant-cliffs-18017.herokuapp.com',
      changeOrigin: true,
    })
  );
};