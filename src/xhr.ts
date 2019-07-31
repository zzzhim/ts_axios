/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-17 23:31:14
 * @LastEditTime: 2019-07-31 23:19:03
 * @LastEditors: Please set LastEditors
 */

import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from './types'
import { parseHeaders } from './helpers/headers'

export default function xhr(config: AxiosRequestConfig): AxiosPromise {
    return new Promise((resolve, reject) => {
        const { data = null, url, method = 'get', headers, responseType, timeout } = config

        const request = new XMLHttpRequest()

        if (responseType) {
            request.responseType = responseType
        }

        if (timeout) {
            request.timeout = timeout
        }

        request.open(method.toUpperCase(), url, true)

        Object.keys(headers).forEach(name => {
            if (data === null && name.toLowerCase() === 'content-type') {
                delete headers[name]
            } else {
                request.setRequestHeader(name, headers[name])
            }
        })

        request.send(data)

        request.onreadystatechange = function handleLoad() {
            if (request.readyState !== 4) {
                return
            }

            if (request.status === 0) {
                return
            }

            const responseHeaders = parseHeaders(request.getAllResponseHeaders())
            const responseData = responseType !== 'text' ? request.response : request.responseText

            const response: AxiosResponse = {
                data: responseData,
                status: request.status,
                statusText: request.statusText,
                headers: responseHeaders,
                config,
                request
            }

            handleResponse(response)
        }

        // 网络错误
        request.onerror = function handleError() {
            reject(new Error('Network Error'))
        }

        // 请求超时
        request.ontimeout = function handleTimeout() {
            reject(new Error(`Timeout of ${timeout} ms exceeded`))
        }

        function handleResponse(response: AxiosResponse): void {
            if (response.status >= 200 && response.status < 300) {
                resolve(response)
            } else {
                reject(new Error(`Request failed with status code ${response.status}`))
            }
        }
    })
}
