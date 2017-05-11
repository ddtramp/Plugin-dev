/**
 * see doc
 * https://github.com/sivan/javascript-style-guide/blob/master/es5/README.md#modules
 */

!function (global) {
    'use strict';

    var previousFancyInput = global.FancyInput;

    function FancyInput(options) {
        this.options = options || {};
    }

    FancyInput.noConflict = function noConflict() {
        global.FancyInput = previousFancyInput;
        return FancyInput;
    };

    global.FancyInput = FancyInput;
}(this);