'use strict'

// CMD是SeaJS 在推广过程中对模块定义的规范化产出
// CMD和AMD的区别有以下几点：
// 1.对于依赖的模块AMD是提前执行，CMD是延迟执行。
// 2.CMD推崇依赖就近，按需加载；AMD推崇依赖前置。

define(function(require,exports,module){ 
    console.log('module of main:');
    var main1 = require('main1');
    main1.say();
    var main2 = require('main2');
    main2.say();

    return { // or module.exports = {}
        say: function(){ 
            console.log('main--hello');
        }
    };

});