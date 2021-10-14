const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://radiant-cliffs-18017.herokuapp.com',
      changeOrigin: true,
    })
  );
};