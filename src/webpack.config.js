const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');

module.exports = {
  // ... other webpack config settings
  mode: 'production',
  plugins: [
    // ... other plugins
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      plugins: [
        imageminMozjpeg({
          quality: 75, // Adjust the quality as needed
          progressive: true
        })
        // Add other imagemin plugins as needed
      ]
    })
  ],
  module: {
    rules: [
      // ... other rules
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: 'asset/resource'
      }
    ]
  }
};
