/// <reference path="./typings/globals/jquery/index.d.ts" />
"use strict";
var A = (function () {
    function A(text) {
        this.Text = text;
        $('#test').text(this.Text);
    }
    return A;
}());
exports.A = A;
//# sourceMappingURL=main.js.map