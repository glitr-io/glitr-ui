const path = require('path');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: "auto",
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "glitr_ui",
      library: { type: "var", name: "glitr_ui" },
      filename: "remoteEntry.js",
      exposes: {
        "./core": './src/index.ts'
      },
      shared: { react: { singleton: true }, "react-dom": { singleton: true } },
    }),
  ]
};