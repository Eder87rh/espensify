const path = require('path');

module.exports = (env) => {
  console.log("TCL: env", env)
  const isProduction = env === 'production';

  return {
    //entry: './src/playground/hoc.js',
    entry: './src/app.js',
    //entry: './src/playground/redux-expensify.js',
    //entry: './src/playground/destructuring.js',
    output : {
        path: path.join(__dirname, 'public'),
        filename:'bundle.js'
    },
    module:{
        rules:[{
            loader:'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },{
            test:/\.s?css$/,
            use:[
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
    devServer:{
        contentBase: path.join(__dirname,'public'),
        historyApiFallback: true
    }
  }
}

