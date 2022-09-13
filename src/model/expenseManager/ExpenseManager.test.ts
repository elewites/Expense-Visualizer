import { Expense } from "../expense/Expense";
import { Category, MonthDict } from "../expense/ExpenseEnums";
import { ExpenseManager } from "./ExpenseManager";

test("test constructor", () => {
  const myManager: ExpenseManager = new ExpenseManager();
  expect(myManager.numberOfExpenses()).toBe(0);
});

test("add expense", () => {
  const myManager: ExpenseManager = new ExpenseManager();
  const expenseOne: Expense = new Expense(10, Category.Credit,
    MonthDict.Aug, 31, 2022, "addidas shoe");
  //before adding expenseOne
  expect(myManager.numberOfExpenses()).toBe(0);
  //after adding expenseOne
  myManager.addExpense(expenseOne);
  expect(myManager.numberOfExpenses()).toBe(1);
});

test("add two expenses in a row", () => {
  const myManager: ExpenseManager = new ExpenseManager();
  const expenseOne: Expense = new Expense(10, Category.Credit,
    MonthDict.Aug, 31, 2022, "addidas shoe");
  const expenseTwo: Expense = new Expense(10, Category.Credit,
    MonthDict.Aug, 31, 2022, "addidas shoe");
  //before adding expenseOne
  expect(myManager.numberOfExpenses()).toBe(0);
  //after adding expenseOne
  myManager.addExpense(expenseOne);
  myManager.addExpense(expenseTwo);
  expect(myManager.numberOfExpenses()).toBe(2);
});

test("adding same expense twice", () => {
  const myManager: ExpenseManager = new ExpenseManager();
  const expenseOne: Expense = new Expense(10, Category.Credit,
    MonthDict.Aug, 31, 2022, "addidas shoe");
  //before adding expenseOne
  expect(myManager.numberOfExpenses()).toBe(0);
  //
  myManager.addExpense(expenseOne);
  myManager.addExpense(expenseOne);
  expect(myManager.numberOfExpenses()).toBe(1);
});

test("remove expense when expense is in expense manager", () => {
  const myManager: ExpenseManager = new ExpenseManager();
  const expenseOne: Expense = new Expense(10, Category.Credit,
    MonthDict.Aug, 31, 2022, "ugly shoe");
  const expenseTwo: Expense = new Expense(20, Category.Clothing,
    MonthDict.Aug, 31, 2022, "underwear");
  myManager.addExpense(expenseOne);
  //before removing expenseOne
  expect(myManager.numberOfExpenses()).toBe(1);
  const removedExpense: Expense = myManager.removeExpense(expenseOne)[0];
  expect(removedExpense.isEqual(expenseOne)).toBe(true);
  //after removing expenseOne
  expect(myManager.numberOfExpenses()).toBe(0);
});

test("remove same expense twice", () => {
  const myManager: ExpenseManager = new ExpenseManager();
  const expenseOne: Expense = new Expense(10, Category.Credit,
    MonthDict.Aug, 31, 2022, "ugly shoe");
  const expenseTwo: Expense = new Expense(20, Category.Clothing,
    MonthDict.Aug, 31, 2022, "underwear");
  myManager.addExpense(expenseOne);
  myManager.addExpense(expenseTwo);
  //before removing expenseOne
  expect(myManager.numberOfExpenses()).toBe(2);
  const removedExpense: Expense = myManager.removeExpense(expenseOne)[0];
  expect(removedExpense.isEqual(expenseOne)).toBe(true);
  //after removing expenseOne
  expect(myManager.numberOfExpenses()).toBe(1);
  //removing expenseOne again
  const removedExpenseOneAgain: Expense[] = myManager.removeExpense(expenseOne);
  expect(removedExpenseOneAgain.length).toBe(0);
  expect(myManager.numberOfExpenses()).toBe(1);
});
