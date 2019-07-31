/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-29 00:33:08
 * @LastEditTime: 2019-07-31 22:36:33
 * @LastEditors: Please set LastEditors
 */
import axios from '../../src/index'

// axios({
//     method: 'get',
//     url: '/base/get',
//     params: {
//         foo: ['bar', 'baz']
//     }
// })

// axios({
//     method: 'get',
//     url: '/base/get',
//     params: {
//         foo: {
//             bar: 'baz'
//         }
//     }
// })

// const date = new Date()

// axios({
//     method: 'get',
//     url: '/base/get',
//     params: {
//         date
//     }
// })

// axios({
//     method: 'get',
//     url: '/base/get',
//     params: {
//         foo: '@:$, '
//     }
// })

// axios({
//     method: 'get',
//     url: '/base/get',
//     params: {
//         foo: 'bar',
//         baz: null
//     }
// })

// axios({
//     method: 'get',
//     url: '/base/get#hash',
//     params: {
//         foo: 'bar'
//     }
// })

// axios({
//     method: 'get',
//     url: '/base/get?foo=bar',
//     params: {
//         bar: 'baz'
//     }
// })

// axios({
//     method: 'post',
//     url: '/base/post',
//     data: {
//         a: 1,
//         b: 2
//     }
// })

// axios({
//     method: 'post',
//     url: '/base/post',
//     headers: {
//         'content-type': 'application/json;charset=utf-8'
//     },
//     data: {
//         a: 1,
//         b: 2
//     }
// })

// const arr = new Int32Array([21, 31])

// axios({
//     method: 'post',
//     url: '/base/buffer',
//     data: arr
// })


// const paramsString = 'q=URLUtils.searchParams&topic=api'
// const searchParams = new URLSearchParams(paramsString)

// axios({
//     method: 'post',
//     url: '/base/post',
//     data: searchParams
// })

axios({
    method: 'post',
    url: '/base/post',
    data: {
        a: 1,
        b: 2
    }
}).then((res) => {
    console.log(res)
}).catch(err => {
    console.log(err)
})

axios({
    method: 'post',
    url: '/base/post',
    responseType: 'json',
    data: {
        a: 3,
        b: 4
    }
}).then((res) => {
    console.log(res)
}).catch(err => {
    console.log(err)
})
