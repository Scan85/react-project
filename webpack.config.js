var HtmlWebpackPLugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');
var path = require("path");
var isProd = process.argv.indexOf('-p') !== -1;
var cssDev = ["style-loader", "css-loader", "sass-loader"];
var cssProd = ExtractTextPlugin.extract({
    fallback: "style-loader",
    use: ["css-loader", "sass-loader"],
    publicPath: "/app"
});
var cssConfig = isProd ? cssProd : cssDev;

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "app"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss']
    },
    module: {
        rules: [{
            test: /\.scss/,
            use: cssConfig
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }, {
            test: /\.jsx?$/,
            include: [
                path.join(__dirname, 'src')
            ],
            exclude: /node_modules/,
            loader: "babel-loader",
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-runtime']
            }
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        hot: true,
        port: 8080,
        stats: "errors-only",
        open: true
    },
    plugins: [
        new HtmlWebpackPLugin({
            title: "React Test App",
            minify: {
                collapseWhitespaces: true
            },
            hash: true,
            filename: "./index.html",
            template: "./src/index.ejs"
        }),
        new ExtractTextPlugin({
            filename: "app.css",
            disable: !isProd,
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
}
