import { Expense } from "../expense/Expense";
import { Category, MonthDict } from "../expense/ExpenseEnums";
import { ExpenseManager } from "./ExpenseManager";

test("test constructor", () => {
  const myManager: ExpenseManager = new ExpenseManager();
  expect(myManager.numberOfExpenses()).toBe(0);
});

test("add expense", () => {
  const myManager: ExpenseManager = new ExpenseManager();
  const expenseOne: Expense = new Expense(10, Category.Credit, MonthDict.Aug, 31, 2022);
  //before adding expenseOne
  expect(myManager.numberOfExpenses()).toBe(0);
  //after adding expenseOne
  myManager.addExpense(expenseOne);
  expect(myManager.numberOfExpenses()).toBe(1);
});

test("remove expense when expense is in expense manager", () => {
  const myManager: ExpenseManager = new ExpenseManager();
  const expenseOne: Expense = new Expense(10, Category.Credit, MonthDict.Aug, 31, 2022);
  const expenseTwo: Expense = new Expense(20, Category.Clothing, MonthDict.Aug, 31, 2022);
  console.log(expenseOne === expenseTwo);
  myManager.addExpense(expenseOne);
  //before removing expenseOne
  expect(myManager.numberOfExpenses()).toBe(1);
  myManager.removeExpense(expenseTwo);
  //after removing expenseOne
  expect(myManager.numberOfExpenses()).toBe(0);
})

