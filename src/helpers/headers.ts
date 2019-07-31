/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-30 23:41:05
 * @LastEditTime: 2019-07-31 22:51:11
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

    return headers
}

// 字符串转对象
export function parseHeaders(headers: string): any {
    let parsed = Object.create(null)

    if (!headers) {
        return parsed
    }
    headers.split('\r\n').forEach(line => {
        let [key, val] = line.split(':')

        key = key.trim().toLowerCase()

        if (!key) {
            return
        }

        if (val) {
            val = val.trim()
        }

        parsed[key] = val
    })

    return parsed
}
