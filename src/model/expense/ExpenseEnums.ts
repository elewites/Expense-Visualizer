enum Category {
  Rent = "Rent",
  Food = "Food",
  Clothing = "Clothing",
  Medical = "Medical",
  Outings = "Outings",
  School = "School",
  Household = "Household",
  Electronics = "Electronics",
  Credit = "Credit"
}

const jan = "Jan";
const feb = "Feb";
const mar = "Mar";
const apr = "Apr";
const may = "May";
const jun = "Jun";
const jul = "Jul";
const aug = "Aug";
const sep = "Sep";
const oct = "Oct";
const nov = "Nov";
const dec = "Dec";
const one = 31;
const zero = 30;

enum MonthDict {
  Jan = "Jan",
  Feb = "Feb",
  Mar = "Mar",
  Apr = "Apr",
  May = "May",
  Jun = "Jun",
  Jul = "Jul",
  Aug = "Aug",
  Sep = "Sep",
  Oct = "Oct",
  Nov = "Nov",
  Dec = "Dec",
}

const MonthDays = {
  "Jan": one,
  "Feb": 28,
  "Mar": one,
  "Apr": zero,
  "May": one,
  "Jun": zero,
  "Jul": one,
  "Aug": one,
  "Sep": zero,
  "Oct": one,
  "Nov": zero,
  "Dec": one
};

export { Category, MonthDict, MonthDays };