const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/v1/remittance/cache/refresh/countrychannel',
    createProxyMiddleware({
      target: 'http://localhost:11072',
      changeOrigin: true,
    })
  );
  app.use(
    '/api/greeting',
    createProxyMiddleware({
      target: 'http://localhost:3001',
      changeOrigin: true,
    })
  );
};

