"use strict";
exports.__esModule = true;
exports.Expense = void 0;
;
var Expense = /** @class */ (function () {
    //EFFECTS: constructs an expense with amount, category and date 
    //REQUIRES: day/month combination must be valid, unexpected behavior otherwise 
    //          e.g. supply month: april, day: 31; constructor will output next valid date
    //          which would be may 1st 
    function Expense(amount, category, month, day, year) {
        this.amount = amount;
        this.category = category;
        this.month = month;
        this.day = day;
        this.year = year;
        this.date = this.formatDateString();
    }
    //EFFECTS: takes in a month, day, and year and returns a date object
    Expense.prototype.formatDateString = function () {
        var stringDate = "".concat(this.month, " ").concat(this.day, ", ").concat(this.year);
        var date = new Date(Date.parse(stringDate));
        return date;
    };
    /* unccommented: functionality not available yet
    //EFFECTS: throws exception if month and day combination is invalid
    private checkMonthDay(month: MonthDict, day: number) {
      if (day < 1) {
        throw new ExpenseError("Day number cannot be less than 1");
      } else {
        const monthDay: number = MonthDays[month];
        if (day > monthDay) {
          throw new ExpenseError(`month ${month} and day ${day} combination not possible`);
        }
      }
    }
    */
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
    //EFFECTS: returns month as a MonthDict
    Expense.prototype.getMonth = function () {
        return this.month;
    };
    //EFFECTS: returns day
    Expense.prototype.getDay = function () {
        return this.day;
    };
    Expense.prototype.getYear = function () {
        return this.year;
    };
    /**
   * [someFunction description]
   * @param  {[Expense]} expense [Expense class to test equality agaisnt]
   * @return {[boolean]}      [boolean as result of equality check]
   */
    //EFFECTS: returns true if this and expense are equal, false otherwise
    Expense.prototype.isEqual = function (expense) {
        var amount = this.amount === expense.getAmount();
        var category = this.category === expense.getCategory();
        var month = this.month === expense.getMonth();
        var day = this.day === expense.getDay();
        var year = this.year === expense.getYear();
        return amount && category && month && day && year;
    };
    Expense.prototype.getOne = function () {
        return 1;
    };
    return Expense;
}());
exports.Expense = Expense;
