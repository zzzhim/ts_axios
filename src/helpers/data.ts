/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-29 23:22:26
 * @LastEditTime: 2019-07-29 23:26:07
 * @LastEditors: Please set LastEditors
 */
import { isPlainObject } from './utils'

export function transformRequest(data: any): any {
  if (isPlainObject(data)) {
    return JSON.stringify(data)
  }

  return data
}
