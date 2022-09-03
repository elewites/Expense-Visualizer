"use strict";
exports.__esModule = true;
var Expense_1 = require("./Expense");
var expenseEnums_1 = require("./expenseEnums");
var myExpense = new Expense_1.Expense(10, expenseEnums_1.Category.Clothing, expenseEnums_1.MonthDict.Feb, 20, 2022);
var amount = 10;
var category = expenseEnums_1.Category.Clothing;
var date = new Date(Date.parse("Feb 20, 2022"));
test("test constructor", function () {
    expect(myExpense.getAmount()).toBe(amount);
    expect(myExpense.getCategory()).toBe(category);
    expect(myExpense.getDate().getDay()).toBe(date.getDay());
    expect(myExpense.getDate().getMonth()).toBe(date.getMonth());
    expect(myExpense.getDate().getFullYear()).toBe(date.getFullYear());
});
// test("test constructor with error", () => { 
// })
