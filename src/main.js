console.log('我是备份')

//精确导出
// import {
//     num,
//     num2,
//     fn
// } from './aa.js'

//默认导出
import obj from './aa.js'

console.log(obj.num, obj.num2, obj.fn)
obj.fn()