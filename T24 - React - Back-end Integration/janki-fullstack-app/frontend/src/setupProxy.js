// Import the createProxyMiddleware function from the http-proxy-middleware package
const { createProxyMiddleware } = require('http-proxy-middleware');

// Export a function to set up the proxy middleware
module.exports = function(app) {
  // Set up a proxy for API requests
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5000', // URL of the backend server
      changeOrigin: true, // Modify the origin of the host header to the target URL
    })
  );
};