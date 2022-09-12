import { Category, MonthDict } from "./ExpenseEnums";
import { v4 as uuidv4 } from 'uuid';

/**
 * represents an expense with an amount, category, and date of purchase
 */
class Expense {
  private amount: number;
  private category: Category;
  private date: Date;
  private month: MonthDict;
  private day: number;
  private year: number;
  private id: string;
  private description: string[];

  /**
   * constructs an expense with given parameters and a unique id
   * @param amount 
   * @param category 
   * @param month 
   * @param day 
   * @param year 
   * @param description will be truncated to first two words in string
   */
  constructor(amount: number,
    category: Category,
    month: MonthDict,
    day: number,
    year: number,
    description: string) {

    this.amount = amount;
    this.category = category;
    this.month = month;
    this.day = day;
    this.year = year;
    this.date = this.formatDateString();
    this.id = uuidv4();
    this.description = this.formatDescription(description);
  }

  /**
   * builds a date object using this.month, this.day, and this.year
   * @returns Date object
   */
  private formatDateString(): Date {
    const stringDate: string = `${this.month} ${this.day}, ${this.year}`;
    const date: Date = new Date(Date.parse(stringDate));
    return date;
  }

  /**
   * truncates the description to a two phrase
   * e.g. "My favorite shoe" -> "My shoe"
   * @param description
   * @returns an array containing only the first two words in the given string 
   */
  private formatDescription(description: string): string[] {
    const format = description.split(' ');
    return format.slice(0, 2);
  }

  /**
   * @returns amount of expense
   */
  getAmount(): number {
    return this.amount;
  }

  /**
   * @returns expense category
   */
  getCategory(): Category {
    return this.category;
  }

  /**
   * @returns expense date
   */
  getDate() {
    return this.date;
  }

  /**
   * @returns expense month
   */
  getMonth(): MonthDict {
    return this.month;
  }

  /**
   * @returns expense day 
   */
  getDay(): number {
    return this.day;
  }

  /**
   * @returns expense year
   */
  getYear(): number {
    return this.year;
  }

  /**
   * 
   * @returns expense id
   */
  getId(): string {
    return this.id;
  }

  /**
   * 
   * @returns description array
   */
  getDescription(): string[] {
    return this.description;
  }

  /**
 * determines if expenses are equal based on their id 
 * @param  {[Expense]} expense to test equality agaisnt
 * @return {[boolean]} true if expenses are equal, false otherwise 
 */
  isEqual(expense: Expense): boolean {
    if (this.id === expense.id) {
      return true;
    } else {
      return false;
    }
  }

}

export { Expense };