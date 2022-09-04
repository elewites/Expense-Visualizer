import { Category, MonthDict, MonthDays } from "./expenseEnums";
import { ExpenseError } from "./ExpenseError";

class Expense {
  private amount: number;
  private category: Category;
  private date: Date;

  //EFFECTS: constructs an expense with amount, category and date 
  //REQUIRES: day/month combination must be valid, unexpected behavior otherwise 
  //          e.g. supply month: april, day: 31; constructor will output next valid date
  //          which would be may 1st 
  constructor(amount: number,
    category: Category,
    month: MonthDict,
    day: number,
    year: number) {

      this.checkMonthDay(month, day);
      this.amount = amount;
      this.category = category;
      this.date = this.formatDateString(month, day, year);
    
  }

  //EFFECTS: takes in a month, day, and year and returns a date object
  private formatDateString(month: MonthDict, day: number, year: number): Date {
    const stringDate: string = `${month} ${day}, ${year}`;
    const date: Date = new Date(Date.parse(stringDate));
    return date;
  }

  //EFFECTS: throws exception if month and day combination is invalid
  private checkMonthDay(month: MonthDict, day: number) {
    if (day < 1) {
      throw new ExpenseError("Day number cannot be less than 1");
    } else {
      const monthDay: number = MonthDays[month];
      if (day > monthDay) {
        throw new ExpenseError(`month ${month} and day ${day} combination not possible`);
      }
    }
  }

  //EFFECTS: returns amount
  getAmount(): number {
    return this.amount;
  }
  //EFFECTS: returns category
  getCategory(): Category {
    return this.category;
  }
  //EFFECTS: returns date
  getDate() {
    return this.date;
  }

}

export { Expense };