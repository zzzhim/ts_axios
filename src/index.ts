/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-17 23:06:59
 * @LastEditTime: 2019-07-17 23:35:01
 * @LastEditors: Please set LastEditors
 */
import { AxiosRequestConfig } from './types'
import xhr from './xhr'

function axios(config: AxiosRequestConfig): void {
  xhr(config)
}

export default axios
