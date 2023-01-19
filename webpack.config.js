const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const node_env = process.env.NODE_ENV;

module.exports = {
  entry: "./client/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js",
  },
  mode: node_env,
  performance: {
    hints: false,
    maxEntrypointSize: 400000,
    maxAssetSize: 400000,
    assetFilter: function (assetFilename) {
      return !assetFilename.endsWith('.png');
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: "asset/resource",
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "build"),
      publicPath: "/",
    },
    // Required for Docker to work with dev server
    host: "0.0.0.0",
    compress: true,
    port: 8080,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./client/index.html",
    }),
  ],
};
