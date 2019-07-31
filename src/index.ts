/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-17 23:06:59
 * @LastEditTime: 2019-07-31 23:00:54
 * @LastEditors: Please set LastEditors
 */
import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from './types'
import xhr from './xhr'
import { buildURL } from './helpers/url'
import { transformRequest, transformResponse } from './helpers/data'
import { processHeaders } from './helpers/headers'

function axios(config: AxiosRequestConfig): AxiosPromise {
    processConfig(config)

    return xhr(config).then(res => {
        return transformResponseData(res)
    })
}

function processConfig(config: AxiosRequestConfig): void {
    config.url = transformURL(config)
    config.headers = transformHeaders(config)
    config.data = transformRequestData(config)
}

// 对url进行转化
function transformURL(config: AxiosRequestConfig): string {
    const { url, params } = config

    return buildURL(url, params)
}

function transformRequestData(config: AxiosRequestConfig): any {
    return transformRequest(config.data)
}

function transformHeaders(config: AxiosRequestConfig): any {
    const { headers = {}, data } = config

    return processHeaders(headers, data)
}

function transformResponseData(res: AxiosResponse): AxiosResponse {
    res.data = transformResponse(res.data)

    return res
}

export default axios
