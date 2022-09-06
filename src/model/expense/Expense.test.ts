import { Expense } from "./Expense";
import { Category, MonthDict } from "./ExpenseEnums";

const expenseOne: Expense = new Expense(10, Category.Clothing, MonthDict.Feb, 20, 2022);
const amount: number = 10;
const category: Category = Category.Clothing;
const date: Date = new Date(Date.parse("Feb 20, 2022"));

const expenseTwo: Expense = new Expense(10, Category.Clothing, MonthDict.Feb, 20, 2022);
const expenseThree: Expense = new Expense(10, Category.Clothing, MonthDict.Feb, 21, 2022);
const expenseFour: Expense = new Expense(10, Category.Rent, MonthDict.Feb, 21, 2022);
const expenseFive: Expense = new Expense(10, Category.Clothing, MonthDict.Jan, 21, 2022);

test("test constructor", () => {
  expect(expenseOne.getAmount()).toBe(amount);
  expect(expenseOne.getCategory()).toBe(category);
  expect(expenseOne.getDate().getDay()).toBe(date.getDay());
  expect(expenseOne.getDate().getMonth()).toBe(date.getMonth());
  expect(expenseOne.getDate().getFullYear()).toBe(date.getFullYear());
});

test("test isEqual when Expenses are equal", () => {
  expect(expenseOne.isEqual(expenseTwo)).toBe(true);
});

test("test isEqual when Expenses are DAY NOT equal", () => {
  expect(expenseOne.isEqual(expenseThree)).toBe(false);
});

test("test isEqual when Expenses are CATEGORY NOT equal", () => {
  expect(expenseOne.isEqual(expenseFour)).toBe(false);
});

test("test isEqual when Expenses are MONTH NOT equal", () => {
  expect(expenseOne.isEqual(expenseFive)).toBe(false);
});



// test("test constructor with error", () => {

// })






