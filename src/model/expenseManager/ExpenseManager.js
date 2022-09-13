"use strict";
exports.__esModule = true;
exports.ExpenseManager = void 0;
/**
 * Represents a collection of expenses.
 * The expense manager is able add, remove, and filter search for expenses
 */
var ExpenseManager = /** @class */ (function () {
    /**
     * Initializes expenses to an empty array
     */
    function ExpenseManager() {
        this.expenses = [];
    }
    /**
     * Adds expense to expense manager only if it is not in the manager already
     * @param expense
     */
    ExpenseManager.prototype.addExpense = function (expense) {
        if (!this.findExpense(expense)) {
            this.expenses.push(expense);
        }
    };
    /**
     * Removes given expense from the expense manager
     * @param expense
     * @return array containing removed expense or empty array if nothing was removed
     */
    ExpenseManager.prototype.removeExpense = function (expense) {
        if (this.findExpense(expense)) {
            var index = this.expenses.indexOf(expense);
            var arr = this.expenses.splice(index, 1);
            return arr;
        }
        return [];
    };
    /**
     * Looks for expense in expense manager
     * @param expense
     * @returns true if expense is in manager, false otherwise
     */
    ExpenseManager.prototype.findExpense = function (expense) {
        var find = this.expenses.find(function (exp) { return exp.getId() === expense.getId(); });
        if (find !== undefined) {
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * Returns number of expenses in manager
     * @returns number
     */
    ExpenseManager.prototype.numberOfExpenses = function () {
        return this.expenses.length;
    };
    /**
     * @returns array of expenses
     */
    ExpenseManager.prototype.getExpenses = function () {
        return this.expenses;
    };
    return ExpenseManager;
}());
exports.ExpenseManager = ExpenseManager;
