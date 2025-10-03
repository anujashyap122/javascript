let numbers = 5;
let strings = "Aniket";
let boolean = true;
let abcd = null;
console.table([numbers, strings, boolean, abcd]);
// Null means no value or empty value not even 0 or false

console.log(typeof numbers);
console.log(typeof strings);
console.log(typeof boolean);
console.log(typeof abcd); // object is a bug in js it should be null    
// Type of is a operator which is used to find datatype of variable...
console.log(typeof "anuvj"); // undefined means value is not assigned to variable...