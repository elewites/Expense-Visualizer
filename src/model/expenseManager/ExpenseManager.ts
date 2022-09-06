import { Expense } from "../expense/Expense";
import * as _ from 'underscore';

//represents a collection of Expenses
class ExpenseManager {
  expenses: Expense[];

  //EFFECTS: inializes expenses to an empty array
  constructor() {
    this.expenses = [];
  }

  //EFFECTS: adds expense to collection expenses
  //MODIFIES: expense 
  addExpense(expense: Expense): void {
    this.expenses.push(expense);
  }

  //EFFECTS: removes expense from collection expenses
  //MODIFIES: expenses
  removeExpense(expense: Expense): void {
    let index: number | null = null;
    index = this.expenses.indexOf(expense);
    console.log(index)
    if (index !== -1) {
      this.expenses.splice(index);
    }
  }

  //EFFECTS: returns expense 
  private findExpense(expense: Expense): Expense | undefined {
    const find: Expense | undefined = this.expenses.find(exp => exp === expense);
    return find;
  }

  //EFFECTS: returns # of expenses in expense collection
  numberOfExpenses(): number {
    return this.expenses.length;
  }

  //EFFECTS: returns this.expenses
  getExpenses(): Expense[] {
    return this.expenses;
  }

}

export { ExpenseManager };