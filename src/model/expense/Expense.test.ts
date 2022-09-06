import { Expense } from "./Expense";
import { Category, MonthDict } from "./ExpenseEnums";

const myExpense: Expense = new Expense(10, Category.Clothing, MonthDict.Feb, 20, 2022);
const amount: number = 10;
const category: Category = Category.Clothing;
const date: Date = new Date(Date.parse("Feb 20, 2022"));

test("test constructor", () => {
  expect(myExpense.getAmount()).toBe(amount);
  expect(myExpense.getCategory()).toBe(category);
  expect(myExpense.getDate().getDay()).toBe(date.getDay());
  expect(myExpense.getDate().getMonth()).toBe(date.getMonth());
  expect(myExpense.getDate().getFullYear()).toBe(date.getFullYear());
});


// test("test constructor with error", () => { 

// })






