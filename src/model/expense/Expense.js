"use strict";
exports.__esModule = true;
exports.Expense = void 0;
var expenseEnums_1 = require("./expenseEnums");
var ExpenseError_1 = require("./ExpenseError");
var Expense = /** @class */ (function () {
    //EFFECTS: constructs an expense with amount, category and date 
    //REQUIRES: day/month combination must be valid, unexpected behavior otherwise 
    //          e.g. supply month: april, day: 31; constructor will output next valid date
    //          which would be may 1st 
    function Expense(amount, category, month, day, year) {
        this.checkMonthDay(month, day);
        this.amount = amount;
        this.category = category;
        this.date = this.formatDateString(month, day, year);
    }
    //EFFECTS: takes in a month, day, and year and returns a date object
    Expense.prototype.formatDateString = function (month, day, year) {
        var stringDate = "".concat(month, " ").concat(day, ", ").concat(year);
        var date = new Date(Date.parse(stringDate));
        return date;
    };
    //EFFECTS: throws exception if month and day combination is invalid
    Expense.prototype.checkMonthDay = function (month, day) {
        if (day < 1) {
            throw new ExpenseError_1.ExpenseError("Day number cannot be less than 1");
        }
        else {
            var monthDay = expenseEnums_1.MonthDays[month];
            if (day > monthDay) {
                throw new ExpenseError_1.ExpenseError("month ".concat(month, " and day ").concat(day, " combination not possible"));
            }
        }
    };
    //EFFECTS: returns amount
    Expense.prototype.getAmount = function () {
        return this.amount;
    };
    //EFFECTS: returns category
    Expense.prototype.getCategory = function () {
        return this.category;
    };
    //EFFECTS: returns date
    Expense.prototype.getDate = function () {
        return this.date;
    };
    return Expense;
}());
exports.Expense = Expense;
