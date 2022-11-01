// Description: This script tests various numeric
// conversion techniques
// Author: Jordan Q. Newprogrammer

var a = " 101.1 ";
var b = "55";
var c = "402 Stevens";
var d = "Number 5 ";

// parseInt() conversion
var a = parseInt("101.1");  // a is 101
var b = parseInt("55");     // b is 101
var c = parseInt("402 Stevens"); // c is 101
var d = parseInt("Number 5");    // d is Nan

// prints parseInt() conversion
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log("\n"); // New line

// parseFloat() conversion
var a = parseFloat("101.1"); // a is 101
var b = parseFloat("55"); // b is 101
var c = parseFloat("402 Stevens"); // c is 101
var d = parseFloat("Number 5"); // d is Nan

// prints parseFloat() conversion
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log("\n"); // New line

//  Number() conversion
var a = Number("101.1"); // a is 101
var b = Number("55"); // b is 101
var c = Number("402 Stevens"); // c is 101
var d = Number("Number 5"); // d is Nan

// prints Number() conversion
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log("\n"); // New line

var aUnary = +(a);
var bUnary = +(b);
var cUnary = +(c);
var dUnary = +(d);

console.log(aUnary);
console.log(bUnary);
console.log(cUnary);
console.log(dUnary);
console.log("\n");