"use strict";
exports.__esModule = true;
exports.MonthDays = exports.MonthDict = exports.Category = void 0;
var Category;
(function (Category) {
    Category["Rent"] = "Rent";
    Category["Food"] = "Food";
    Category["Clothing"] = "Clothing";
    Category["Medical"] = "Medical";
    Category["Outings"] = "Outings";
    Category["School"] = "School";
    Category["Household"] = "Household";
    Category["Electronics"] = "Electronics";
    Category["Credit"] = "Credit";
})(Category || (Category = {}));
exports.Category = Category;
var jan = "Jan";
var feb = "Feb";
var mar = "Mar";
var apr = "Apr";
var may = "May";
var jun = "Jun";
var jul = "Jul";
var aug = "Aug";
var sep = "Sep";
var oct = "Oct";
var nov = "Nov";
var dec = "Dec";
var one = 31;
var zero = 30;
var MonthDict;
(function (MonthDict) {
    MonthDict["Jan"] = "Jan";
    MonthDict["Feb"] = "Feb";
    MonthDict["Mar"] = "Mar";
    MonthDict["Apr"] = "Apr";
    MonthDict["May"] = "May";
    MonthDict["Jun"] = "Jun";
    MonthDict["Jul"] = "Jul";
    MonthDict["Aug"] = "Aug";
    MonthDict["Sep"] = "Sep";
    MonthDict["Oct"] = "Oct";
    MonthDict["Nov"] = "Nov";
    MonthDict["Dec"] = "Dec";
})(MonthDict || (MonthDict = {}));
exports.MonthDict = MonthDict;
var MonthDays = {
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
exports.MonthDays = MonthDays;
