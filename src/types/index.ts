/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-17 23:11:44
 * @LastEditTime: 2019-07-29 23:41:44
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
    // headers?: any
    data?: any
    params?: any
}
