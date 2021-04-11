const webpackConfig = require('./webpack.config');

module.exports = {
    mode: 'development',
    entry: webpackConfig.entry,
    output: {
        ...webpackConfig.output,
        publicPath: "http://localhost:9001/",
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        compress: true,
        port: 9001,
    },
    module: webpackConfig.module,
    resolve: webpackConfig.resolve,
    plugins: [
        ...webpackConfig.plugins,
        // new DashboardPlugin({
        //     dashboardURL: "http://localhost:3000/api/update",
        //     metadata: {
        //         source: {
        //             url: "http://github.com",
        //         },
        //         remote: "http://localhost:9000/remoteEntry.js",
        //     },
        // }),
    ],
}