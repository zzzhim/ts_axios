/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-31 23:48:52
 * @LastEditTime: 2019-08-13 22:29:04
 * @LastEditors: Please set LastEditors
 */
import { AxiosInstance, AxiosRequestConfig } from './types'
import Axios from './core/Axios'
import { extend } from './helpers/utils'
import defaults from './defaults'

function createInstance(config: AxiosRequestConfig): AxiosInstance {
    const context = new Axios(config)
    const instance = Axios.prototype.request.bind(context)

    extend(instance, context)

    return instance as AxiosInstance
}

const axios = createInstance(defaults)

export default axios
