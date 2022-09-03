//represents an error for the Expense class

class ExpenseError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ExpenseError";


    // 👇️ because we are extending a built-in class
    Object.setPrototypeOf(this, ExpenseError.prototype);
  }


}

export { ExpenseError };