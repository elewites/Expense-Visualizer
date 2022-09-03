"use strict";
//represents an error for the Expense class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.ExpenseError = void 0;
var ExpenseError = /** @class */ (function (_super) {
    __extends(ExpenseError, _super);
    function ExpenseError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "ExpenseError";
        // 👇️ because we are extending a built-in class
        Object.setPrototypeOf(_this, ExpenseError.prototype);
        return _this;
    }
    return ExpenseError;
}(Error));
exports.ExpenseError = ExpenseError;
