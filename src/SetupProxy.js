const createProxyMiddleware = require('http-proxy-middleware')
module.exports = app => {
  app.use(
    createProxyMiddleware(
      ['/api', '/socket.io'],
      {
        target: 'http://101.79.9.33:80',
        changeOrigin: true,
        ws: true,
        router: {
          '/socket.io': 'ws://101.79.9.33:80'
        }
      }
    )
  )
}
