/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-17 23:06:59
 * @LastEditTime: 2019-07-29 23:08:36
 * @LastEditors: Please set LastEditors
 */
import { AxiosRequestConfig } from './types'
import xhr from './xhr'
import { buildURL } from './helpers/url'

function axios(config: AxiosRequestConfig): void {
  processConfig(config)
  xhr(config)
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
}

// 对url进行转化
function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}

export default axios
