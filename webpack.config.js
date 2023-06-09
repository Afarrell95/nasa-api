const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "bundle.js",
  },
  devtool: "sources-maps",
  module: {
    rules: [
      { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ },
      {
        test: /\.png/,
        use: [
          {
            loader: "url-loader",
            options: {
              mimetype: "img/png",
            },
          },
        ],
      },
      { test: /\.css$/, loader: ["style-loader", "css-loader"] },
      {
        test: /\.s(a|c)ss$/,
        loader: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devServer: {
    contentBase: "src",
    hot: true,
    open: true,
    port: 8000,
    watchContentBase: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      filename: "index.html",
      inject: "body",
    }),
    new Dotenv(),
  ],
};
