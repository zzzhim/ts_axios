/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 22:17:04
 * @LastEditTime: 2019-08-15 22:28:19
 * @LastEditors: Please set LastEditors
 */
import { AxiosRequestConfig } from '../types'

const strats = Object.create(null)

// 默认合并策略
function defaultStart(val1: any, val2: any) {
    return typeof val2 !== 'undefined' ? val2 : val1
}

function fromVal2Strat(val1: any, val2: any): any {
    if (typeof val2 !== 'undefined') {
        return val2
    }
}

const stratKeysFromVal2 = ['url', 'params', 'data']

stratKeysFromVal2.forEach(key => {
    strats[key] = fromVal2Strat
})

export default function mergeConfig(
    config1: AxiosRequestConfig,
    config2?: AxiosRequestConfig
): AxiosRequestConfig {
    if (!config2) {
        config2 = {}
    }

    const config = Object.create(null)

    for (let key in config2) {
        mergeField(key)
    }

    for (let key in config1) {
        if (!config2[key]) {
            mergeField(key)
        }
    }

    // 合并
    function mergeField(key: string): void {
        const strat = strats[key] || defaultStart
        config[key] = strat(config1[key], config2![key])
    }

    return config
}
