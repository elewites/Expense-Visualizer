"use strict";
exports.__esModule = true;
exports.Expense = void 0;
var uuid_1 = require("uuid");
/**
 * represents an expense with an amount, category, and date of purchase
 */
var Expense = /** @class */ (function () {
    /**
     * constructs an expense with given parameters and a unique id
     * @param amount
     * @param category
     * @param month
     * @param day
     * @param year
     * @param description will be truncated to first two words in string
     */
    function Expense(amount, category, month, day, year, description) {
        this.amount = amount;
        this.category = category;
        this.month = month;
        this.day = day;
        this.year = year;
        this.date = this.formatDateString();
        this.id = (0, uuid_1.v4)();
        this.description = this.formatDescription(description);
    }
    /**
     * builds a date object using this.month, this.day, and this.year
     * @returns Date object
     */
    Expense.prototype.formatDateString = function () {
        var stringDate = "".concat(this.month, " ").concat(this.day, ", ").concat(this.year);
        var date = new Date(Date.parse(stringDate));
        return date;
    };
    /**
     * truncates the description to a two phrase
     * e.g. "My favorite shoe" -> "My shoe"
     * @param description
     * @returns an array containing only the first two words in the given string
     */
    Expense.prototype.formatDescription = function (description) {
        var format = description.split(' ');
        return format.slice(0, 2);
    };
    /**
     * @returns amount of expense
     */
    Expense.prototype.getAmount = function () {
        return this.amount;
    };
    /**
     * @returns expense category
     */
    Expense.prototype.getCategory = function () {
        return this.category;
    };
    /**
     * @returns expense date
     */
    Expense.prototype.getDate = function () {
        return this.date;
    };
    /**
     * @returns expense month
     */
    Expense.prototype.getMonth = function () {
        return this.month;
    };
    /**
     * @returns expense day
     */
    Expense.prototype.getDay = function () {
        return this.day;
    };
    /**
     * @returns expense year
     */
    Expense.prototype.getYear = function () {
        return this.year;
    };
    /**
     *
     * @returns expense id
     */
    Expense.prototype.getId = function () {
        return this.id;
    };
    /**
     *
     * @returns description array
     */
    Expense.prototype.getDescription = function () {
        return this.description;
    };
    /**
   * determines if expenses are equal based on their id
   * @param  {[Expense]} expense to test equality agaisnt
   * @return {[boolean]} true if expenses are equal, false otherwise
   */
    Expense.prototype.isEqual = function (expense) {
        if (this.id === expense.id) {
            return true;
        }
        else {
            return false;
        }
    };
    return Expense;
}());
exports.Expense = Expense;
