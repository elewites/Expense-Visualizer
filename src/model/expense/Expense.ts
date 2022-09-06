;import { Category, MonthDict, MonthDays } from "./ExpenseEnums";
import { ExpenseError } from "./ExpenseError";

class Expense {
  private amount: number;
  private category: Category;
  private date: Date;
  private month: MonthDict;
  private day: number;
  private year: number;

  //EFFECTS: constructs an expense with amount, category and date 
  //REQUIRES: day/month combination must be valid, unexpected behavior otherwise 
  //          e.g. supply month: april, day: 31; constructor will output next valid date
  //          which would be may 1st 
  constructor(amount: number,
    category: Category,
    month: MonthDict,
    day: number,
    year: number) {

    this.amount = amount;
    this.category = category;
    this.month = month;
    this.day = day;
    this.year = year;
    this.date = this.formatDateString();

  }

  //EFFECTS: takes in a month, day, and year and returns a date object
  private formatDateString(): Date {
    const stringDate: string = `${this.month} ${this.day}, ${this.year}`;
    const date: Date = new Date(Date.parse(stringDate));
    return date;
  }

  /* unccommented: functionality not available yet
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
  */

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

  //EFFECTS: returns month as a MonthDict
  getMonth(): MonthDict {
    return this.month;
  }

  //EFFECTS: returns day
  getDay(): number {
    return this.day;
  }

  getYear(): number {
    return this.year;
  }

  /**
 * [someFunction description]
 * @param  {[Expense]} expense [Expense class to test equality agaisnt]
 * @return {[boolean]}      [boolean as result of equality check]
 */
  //EFFECTS: returns true if this and expense are equal, false otherwise
  isEqual(expense: Expense): boolean {
    const amount: boolean = this.amount === expense.getAmount();
    const category: boolean = this.category === expense.getCategory();
    const month: boolean = this.month === expense.getMonth();
    const day: boolean = this.day === expense.getDay();
    const year: boolean = this.year === expense.getYear();
    return amount && category && month && day && year;
  }

  getOne(): number {
    return 1;
  }
}

export { Expense };