/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-29 22:43:56
 * @LastEditTime: 2019-07-29 23:41:48
 * @LastEditors: Please set LastEditors
 */

// 缓存
const toString = Object.prototype.toString

// 判断是否是Date
export function isDate(val: any): val is Date {
    return toString.call(val) === '[object Date]'
}

// 判断是否是一个Object
// export function isObject(val: any): val is Object {
//   return val !== null && typeof val === 'object'
// }

// 判断是否是一个普通对象
export function isPlainObject(val: any): val is Object {
    return toString.call(val) === '[object Object]'
}
