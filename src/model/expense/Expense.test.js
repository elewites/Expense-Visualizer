"use strict";
exports.__esModule = true;
var Expense_1 = require("./Expense");
var ExpenseEnums_1 = require("./ExpenseEnums");
var expenseOne = new Expense_1.Expense(10, ExpenseEnums_1.Category.Clothing, ExpenseEnums_1.MonthDict.Feb, 20, 2022);
var amount = 10;
var category = ExpenseEnums_1.Category.Clothing;
var date = new Date(Date.parse("Feb 20, 2022"));
var expenseTwo = new Expense_1.Expense(10, ExpenseEnums_1.Category.Clothing, ExpenseEnums_1.MonthDict.Feb, 20, 2022);
var expenseThree = new Expense_1.Expense(10, ExpenseEnums_1.Category.Clothing, ExpenseEnums_1.MonthDict.Feb, 21, 2022);
var expenseFour = new Expense_1.Expense(10, ExpenseEnums_1.Category.Rent, ExpenseEnums_1.MonthDict.Feb, 21, 2022);
var expenseFive = new Expense_1.Expense(10, ExpenseEnums_1.Category.Clothing, ExpenseEnums_1.MonthDict.Jan, 21, 2022);
test("test constructor", function () {
    expect(expenseOne.getAmount()).toBe(amount);
    expect(expenseOne.getCategory()).toBe(category);
    expect(expenseOne.getDate().getDay()).toBe(date.getDay());
    expect(expenseOne.getDate().getMonth()).toBe(date.getMonth());
    expect(expenseOne.getDate().getFullYear()).toBe(date.getFullYear());
});
test("test isEqual when Expenses are equal", function () {
    expect(expenseOne.isEqual(expenseTwo)).toBe(true);
});
test("test isEqual when Expenses are DAY NOT equal", function () {
    expect(expenseOne.isEqual(expenseThree)).toBe(false);
});
test("test isEqual when Expenses are CATEGORY NOT equal", function () {
    expect(expenseOne.isEqual(expenseFour)).toBe(false);
});
test("test isEqual when Expenses are MONTH NOT equal", function () {
    expect(expenseOne.isEqual(expenseFive)).toBe(false);
});
// test("test constructor with error", () => {
// })
