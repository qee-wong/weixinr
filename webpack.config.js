const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry:{
        app:'./src/index.js',
        //print:'./src/print.js'
    },
    devtool:'inline-source-map',
    devServer:{
        contentBase:'./dist',
        historyApiFallback: true
    },
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title:'牡丹江交警',
            template: 'src/assets/index.html'
        })
    ],
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    mode:"development",
    module:{
        rules:[
           {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env','@babel/preset-react'],
                        plugins: [
                             ["import", { libraryName: "antd-mobile", style: "css" }]
                        ]
                    }
                }
            },
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                use:[
                    'file-loader'
                ]
            }
        ]
    }
}