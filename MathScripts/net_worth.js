// sample inputs
var RealState = 10000;
var Checkin = 2000;
var Savings = 5000;
var Retirement = 15000;
var Auto = 10000;
var StudentLoan = 5000;
var OtherLoan = 2000;
// calculations

var totalDue = RealState + Checkin + Savings + Retirement + Auto - StudentLoan - OtherLoan;

// output

console.log("Your net worth is some-number " + totalDue);