'use strict';

/**
 * CommonJS
 *
 * use let greet = require('**\/index')
 * greet()
 *
 * module.exports = { }
 */
var s = 'Hello';

function greet(name) {
    console.log(s + ', ' + name + '!');
}

module.exports = greet;


