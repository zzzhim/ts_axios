/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-17 23:11:44
 * @LastEditTime: 2019-07-31 23:35:20
 * @LastEditors: Please set LastEditors
 */
export type Method =
    | 'get'
    | 'GET'
    | 'delete'
    | 'DELETE'
    | 'head'
    | 'HEAD'
    | 'options'
    | 'OPTIONS'
    | 'post'
    | 'POST'
    | 'put'
    | 'PUT'
    | 'patch'
    | 'PATCH'

export interface AxiosRequestConfig {
    url: string
    method?: Method
    data?: any
    params?: any
    headers?: any
    responseType?: XMLHttpRequestResponseType
    timeout?: number
}

export interface AxiosResponse {
    data: any
    status: number
    statusText: string
    headers: any
    config: AxiosRequestConfig
    request: any
}

export interface AxiosPromise extends Promise<AxiosResponse> {}

export interface AxiosError extends Error {
    isAxiosError: boolean
    config: AxiosRequestConfig
    code?: string | null
    request?: any
    response?: AxiosResponse
}
