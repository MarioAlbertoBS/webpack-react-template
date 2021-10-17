const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExctractPlugin = require("mini-css-extract-plugin");

module.exports = {
    // src/index.js as entry point of the app
    entry: path.join(__dirname, "src", "index.tsx"),
    // All the production code will be transpiled to the "dist" directory
    output: {
        path: path.resolve(__dirname, "dist"),
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    // Defining babel configuration
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: "awesome-typescript-loader"
                }
            },
            {
                test: /\.?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }            
            },
            {
                test:/\.css$/,
                use: [
                    MiniCssExctractPlugin.loader,
                    "css-loader",
                    "postcss-loader"
                ]
            }
        ]
    },
    // Html Plugin to transpile into static html and javascript
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
        }),
        new MiniCssExctractPlugin({
            filename: "styles.css",
        }),
    ],
}