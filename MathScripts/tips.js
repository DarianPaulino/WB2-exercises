// sample inputs
var foodCost = 110;
var tax = 5.00;
var tipPercentage = 20;
// calculations

var Tip = tipPercentage / foodCost * 100;
var totalDue = foodCost + tax + Tip;

// output
console.log("Food cost is " + foodCost + " and tax is " + tax);
console.log("The tip on a $110 food bill is" + Tip);
console.log("Total Due is " + totalDue);