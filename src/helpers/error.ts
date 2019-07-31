/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-31 23:35:48
 * @LastEditTime: 2019-07-31 23:43:31
 * @LastEditors: Please set LastEditors
 */

import { AxiosRequestConfig, AxiosResponse } from '../types'

export class AxiosError extends Error {
    isAxiosError: boolean
    config: AxiosRequestConfig
    code?: string | null
    request?: any
    response?: AxiosResponse

    constructor(
        message: string,
        config: AxiosRequestConfig,
        code?: string | null,
        request?: any,
        response?: AxiosResponse
    ) {
        super(message)

        this.config = config
        this.code = code
        this.request = request
        this.response = response
        this.isAxiosError = true

        // 修复继承error出现的问题
        Object.setPrototypeOf(this, AxiosError.prototype)
    }
}

// 使用工厂函数创建
export function createError(
    message: string,
    config: AxiosRequestConfig,
    code?: string | null,
    request?: any,
    response?: AxiosResponse
) {
    const error = new AxiosError(message, config, code, request, response)

    return error
}
