const path = require('path');

const PATHS = {
    app: path.resolve(__dirname,'app'),
    build: path.resolve(__dirname,'build')
};

module.exports = {
  entry: {
     app: PATHS.app + "/index.js"
  },

  output: {
     path: PATHS.build,
     filename: 'bundle.js'
  },

  resolve: {
     alias: {
       'vue': 'vue/dist/vue.min.js'
     }
  }

};
