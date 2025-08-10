const path = require('path');

module.exports = {
    entry: './src/index.js', // your main JS file
    mode: 'production', // or 'production'
    output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // cleans /dist folder before each build
  },
  
devServer: {
    static: './dist',
    port: 3000,      // optional, defaults to 8080
    open: true       // optional, opens browser automatically
}
 
};
