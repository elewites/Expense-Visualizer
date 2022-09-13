import { TrustedTypeConfig } from "trusted-types";
import { Expense } from "./Expense";
import { Category, MonthDict } from "./ExpenseEnums";



const myDescription = "This will be truncated to This Will";
const expenseOne: Expense = new Expense(10, Category.Clothing,
  MonthDict.Feb, 20, 2022, myDescription);
const expenseTwo: Expense = new Expense(10, Category.Clothing, MonthDict.Feb, 20, 2022, myDescription);

test("test constructor", () => {
  const amount: number = 10;
  const category: Category = Category.Clothing;
  const date: Date = new Date(Date.parse("Feb 20, 2022"));
  const expectedDescription: string[] = ["This", "will"];

  expect(expenseOne.getAmount()).toBe(amount);
  expect(expenseOne.getCategory()).toBe(category);
  expect(expenseOne.getDate().getDay()).toBe(date.getDay());
  expect(expenseOne.getDate().getMonth()).toBe(date.getMonth());
  expect(expenseOne.getDate().getFullYear()).toBe(date.getFullYear());
  const recievedDescription: string[] = expenseOne.getDescription();
  expect(recievedDescription[0] === expectedDescription[0]).toBe(true);
  expect(recievedDescription[1] === expectedDescription[1]).toBe(true);
});

test("test isEqual when Expenses are equal in everything except ID", () => {
  expect(expenseOne.isEqual(expenseTwo)).toBe(false);
});

test("test isEqual when Expenses are equal in ID", () => {
  expect(expenseOne.isEqual(expenseOne)).toBe(true);
});







