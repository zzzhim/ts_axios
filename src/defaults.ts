/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-13 22:19:36
 * @LastEditTime: 2019-08-13 22:27:44
 * @LastEditors: Please set LastEditors
 */
import { AxiosRequestConfig } from './types'

const defaults: AxiosRequestConfig = {
    method: 'get',

    timeout: 0,

    headers: {
        common: {
            Accept: 'application/json, text/p;ain, */*'
        }
    }
}

const methodsNoData = ['delete', 'get', 'head', 'options']

methodsNoData.forEach(method => {
    defaults.headers[method] = {}
})

const methodsWithData = ['post', 'put', 'patch']

methodsWithData.forEach(method => {
    defaults.headers[method] = {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})

export default defaults
