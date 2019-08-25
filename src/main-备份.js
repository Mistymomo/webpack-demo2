//导入jQuery模块
const $ = require("jquery")

//导入moment模块
const moment = require("moment")

//导入css
require('./css/index.css')

console.log('我是main.js模块')

//导入less模块
require('./less/index.less')

//导入字体图标模块
require('./fonts/iconfont.css')

const fn = () => {
    console.log("哇哇")
}

$(function () {
    const num = 1266624386028
    $('li:nth-child(odd)').css('color', 'lime')
    $('li:nth-child(even)').css('color', 'red')
    $('li:last-child').text(moment(num).format('YYYY-MM-DD HH:mm:ss'))
})