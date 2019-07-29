/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-17 23:31:14
 * @LastEditTime: 2019-07-29 23:42:11
 * @LastEditors: Please set LastEditors
 */

import { AxiosRequestConfig } from './types'

export default function xhr(config: AxiosRequestConfig) {
    const { data = null, url, method = 'get' } = config

    const request = new XMLHttpRequest()

    request.open(method.toUpperCase(), url, true)

    request.send(data)
}
