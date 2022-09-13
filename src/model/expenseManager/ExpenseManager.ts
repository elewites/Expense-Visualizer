import { Expense } from "../expense/Expense";

/**
 * Represents a collection of expenses.
 * The expense manager is able add, remove, and filter search for expenses
 */
class ExpenseManager {
  expenses: Expense[];

  /**
   * Initializes expenses to an empty array
   */
  constructor() {
    this.expenses = [];
  }

  /**
   * Adds expense to expense manager only if it is not in the manager already 
   * @param expense 
   */
  addExpense(expense: Expense): void {
    if (!this.findExpense(expense)) {
      this.expenses.push(expense);
    }
  }

  /**
   * Removes given expense from the expense manager
   * @param expense 
   * @return array containing removed expense or empty array if nothing was removed
   */
  removeExpense(expense: Expense): Expense[] | [] {
    if (this.findExpense(expense)) {
      const index = this.expenses.indexOf(expense);
      const arr: Expense[] = this.expenses.splice(index, 1);
      return arr;
    }
    return [];
  }

  /**
   * Looks for expense in expense manager
   * @param expense 
   * @returns true if expense is in manager, false otherwise 
   */
  private findExpense(expense: Expense): boolean {
    const find: Expense | undefined = this.expenses.find(exp => exp.getId() === expense.getId());
    if (find !== undefined) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Returns number of expenses in manager
   * @returns number 
   */
  numberOfExpenses(): number {
    return this.expenses.length;
  }

  /**
   * @returns array of expenses
   */
  getExpenses(): Expense[] {
    return this.expenses;
  }

}

export { ExpenseManager };