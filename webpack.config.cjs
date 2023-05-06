const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
process.env.NODE_ENV = "development";

module.exports = {
    mode: "development",
    entry: "./web",
    output: {
        filename: "main.js",
        path: path.resolve("build"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve("index.html"),
        }),
    ],
    devServer: {
        static: {
            directory: path.resolve("build"),
        },
        port: 3000,
    },
    module: {
        // exclude node_modules
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude:
                    /node_modules\/(?!(react-native-elements|react-native-vector-icons)\/).*/,
                use: ["babel-loader"],
            },
            {
                test: /\.(ts|tsx)$/,
                loader: "ts-loader",
            },
            {
                test: /\.svg$/,
                loader: "svg-inline-loader",
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: "file-loader",
                    },
                ],
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                include: path.resolve(
                    __dirname,
                    "node_modules/react-native-vector-icons",
                ),
                use: [
                    {
                        loader: "url-loader",
                    },
                ],
            },
        ],
    },
    // pass all js files through Babel
    resolve: {
        extensions: [
            ".web.js",
            "*",
            ".js",
            ".jsx",
            ".ts",
            ".tsx",
            ".svg",
            ".ttf",
            ".woff",
        ],
        alias: {
            "react-native$": "react-native-web",
            // "react-native-svg$": "react-native-svg-web",
        },
    },
};
