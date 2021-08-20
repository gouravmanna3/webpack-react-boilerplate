const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.export = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { presets: ["@babel/env"]}
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
      filename: "./index.html"
    }),
    
  ]
}