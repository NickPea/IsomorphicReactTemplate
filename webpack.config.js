const path = require("path");
const webpack = require("webpack");

const commonConfig = {
  mode: "development",

  devtool: "inline-source-map",

  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },

  devServer: {
    open: true,
    host: "localhost",
  },
}

const serverConfig = {
  ...commonConfig,
  target: "node",

  entry: {
    server: "./src/server/www-kernel/run",
  },

  plugins: [new webpack.ProgressPlugin()],

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",

        exclude: [/node_modules/],
      },
      {
        test: /.css$/,

        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",

            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },

};


const clientConfig = {
  ...commonConfig,
  target: "web",

  entry: {
    client: "./src/client/main",
  },

  plugins: [new webpack.ProgressPlugin()],

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",

        exclude: [/node_modules/],
      },
      {
        test: /.css$/,

        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",

            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
};

module.exports = [clientConfig, serverConfig]