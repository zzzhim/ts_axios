/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-17 23:31:14
 * @LastEditTime: 2019-07-30 23:58:37
 * @LastEditors: Please set LastEditors
 */

import { AxiosRequestConfig } from './types'

export default function xhr(config: AxiosRequestConfig) {
    const { data = null, url, method = 'get', headers } = config

    const request = new XMLHttpRequest()

    request.open(method.toUpperCase(), url, true)

    Object.keys(headers).forEach(name => {
        if (data === null && name.toLowerCase() === 'content-type') {
            delete headers[name]
        } else {
            request.setRequestHeader(name, headers[name])
        }
    })

    request.send(data)
}
