// sample inputs
var People = 38;
var VansCost = 250;
var tip = 12.00;
// calculations
var Vans = People / 15;
var individualcost = Vans * VansCost/ People;
var totalcost = VansCost * 15;

// output
console.log("number of vans is " + Vans.toFixed(0));
console.log("total cost " + totalcost.toFixed(2));
console.log("individuals payment is " + individualcost.toFixed(2));