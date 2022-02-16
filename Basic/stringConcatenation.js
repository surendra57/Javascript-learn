//String Concatenation
// its defined addition of two and more strings.

let string1= "77";
let string2 ="10";
let fullName= +string1 + +string2;

console.log(fullName);
console.log(typeof fullName);

//template string

let age =24;
let fName = "surendra";

//my name is surendra and my age is 24

// let aboutMe= "my name is "+"name"+"my age is "+"age";
let aboutMe= `my name is ${fName} and my age is ${age}`
console.log(aboutMe);