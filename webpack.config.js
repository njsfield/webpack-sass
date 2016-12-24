const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  entry: {
    main: "./webpack-build.js"
  },

  output: {
    filename: "app.js",
    path: path.join(__dirname, "/public/js")
  },

  module: {
    loaders: [
      // SASS
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
            'style', // backup loader when not building .css file
            'css!sass' // loaders to preprocess CSS
        )
      }
    ],
  },

  plugins: [
    new ExtractTextPlugin('../css/style.css'),
]


}
