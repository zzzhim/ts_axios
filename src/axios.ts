/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-31 23:48:52
 * @LastEditTime: 2019-08-04 23:35:56
 * @LastEditors: Please set LastEditors
 */
import { AxiosInstance } from './types'
import Axios from './core/Axios'
import { extend } from './helpers/utils'

function createInstance(): AxiosInstance {
    const context = new Axios()
    const instance = Axios.prototype.request.bind(context)

    extend(instance, context)

    return instance as AxiosInstance
}

const axios = createInstance()

export default axios
