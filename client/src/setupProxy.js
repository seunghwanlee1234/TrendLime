const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api', {
            target: 'https://backend.elice-kdt-2nd-team10.kro.kr',
            changeOrigin: true,
        }),
    );
};
