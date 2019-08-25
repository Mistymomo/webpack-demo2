//导入处理路径的模块
const path = require('path')

//导入插件模块
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    //配置入口文件
    entry: './src/main.js',

    //配置出口
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    //模式
    mode: 'production',

    //插件
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],

    //配置loader
    module: {
        // loader的规则
        rules: [
            // 1. 配置 css 的loader
            {
                // 匹配所有.css后缀的文件, 并进行解析
                test: /\.css$/,
                // 使用 css-loader 解析 .css文件, css-loader 只是可以让webpack可以识别css文件
                // 使用 style-loader 用于将解析过的 css 内容, 以动态创建style标签的方式添加到页面中
                // 加载顺序: 从右往左,不是从左往右
                use: ['style-loader', 'css-loader']
            },

            //配置less
            {
                // 匹配所有的less文件
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
            },

            //配置图片文件
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8 * 1024
                    }
                }]
            },

            //配置字体图标
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8 * 1024
                    }
                }]
            },

            //配置高级js babel-loader
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },

    //配置devServer自动起服务器插件
    devServer: {
        open: true, //自动打开浏览器
        port: 3000, // 端口号
        hot: true // 热更新
    }
}