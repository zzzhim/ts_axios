/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-05 22:40:33
 * @LastEditTime: 2019-08-05 23:25:25
 * @LastEditors: Please set LastEditors
 */
import { ResolvedFn, RejectedFn } from '../types'

interface Interceptor<T> {
    resolved: ResolvedFn<T>
    rejected?: RejectedFn
}

export default class InterceptorManager<T> {
    private interceptors: Array<Interceptor<T> | null>

    constructor() {
        this.interceptors = []
    }

    use(resolved: ResolvedFn<T>, rejected?: RejectedFn): number {
        this.interceptors.push({
            resolved,
            rejected
        })
        return this.interceptors.length - 1
    }

    forEach(fn: (interceptor: Interceptor<T>) => void): void {
        this.interceptors.forEach(interceptor => {
            if (interceptor !== null) {
                fn(interceptor)
            }
        })
    }

    eject(id: number): void {
        if (this.interceptors[id]) {
            this.interceptors[id] = null
        }
    }
}
