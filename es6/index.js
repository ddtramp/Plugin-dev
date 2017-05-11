'use strict'
/**
 * http://es6.ruanyifeng.com/#docs/module
 * @type {string}
 */
export const HELLO = 'HELLO'

export let a = 'a'

export function method_1 (str) {
    console.log(str)
}

export default {
    hello () {
        console.log('hello world')
    }
}
