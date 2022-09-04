import { Expense } from "../expense/Expense";

class ExpenseManager {
  expenses: Expense[];

  constructor() {
    this.expenses = [];
  }

  addExpense(expense: Expense): void {
    this.expenses.push(expense);
  }

  removeExpense(expense: Expense): void {
    const found: Expense | undefined = this.findExpense(expense);
    let index: number | null = null
    if (found) {
      index = this.expenses.indexOf(found)
    }
    if (index) {
      this.expenses.splice(index)
    }
  }

  findExpense(expense: Expense): Expense | undefined {
    const find: Expense | undefined = this.expenses.find(exp => exp === expense);
    return find;
  }
}

export { ExpenseManager };