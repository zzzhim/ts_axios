/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-30 23:41:05
 * @LastEditTime: 2019-07-30 23:49:31
 * @LastEditors: Please set LastEditors
 */
import { isPlainObject } from './utils'

function normalizeHeaderName(headers: any, normalizedName: string): void {
    if (!headers) {
        return
    }

    Object.keys(headers).forEach(name => {
        if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
            headers[normalizedName] = headers[name]

            delete headers[name]
        }
    })
}

export function processHeaders(headers: any, data: any): any {
    normalizeHeaderName(headers, 'Content-Type')

    if (isPlainObject(data)) {
        if (headers && !headers['Content-Type']) {
            headers['Content-Type'] = 'application/json;charset=utf-8'
        }
    }

    return
}
