const CompressionPlugin = require('compression-webpack-plugin');
module.exports = {
    devServer: {
        // 设置代理
        proxy: {
            "/v1": {
                target: `${process.env.BASE_URL}`, // 域名
                ws: true, // 是否启用websockets
                changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
                pathRewrite: {
                    "^/v1": "/"
                }
            }
        }
    },
    chainWebpack: config => {
        // 这里是对环境的配置，不同环境对应不同的BASE_URL，以便axios的请求地址不同
        config.plugin('define').tap(args => {
            args[0]['process.env'].BASE_URL = JSON.stringify(process.env.BASE_URL)
            return args
        })
        if (process.env.NODE_ENV === 'production') {

            // #region 启用GZip压缩
            // config
            //     .plugin('compression')
            //     .use(CompressionPlugin, {
            //         asset: '[path].gz[query]',
            //         algorithm: 'gzip',
            //         test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')$'),
            //         threshold: 10240,
            //         minRatio: 0.8,
            //         cache: true
            //     })
            //     .tap(args => {})

            // #endregion
        }
    }
}