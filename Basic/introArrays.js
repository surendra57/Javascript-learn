// Intro of arrays
// it is a reference type
// how to create arrays

// its ordered collection of elements
// means isme index ke order me element describe kiye jate hai


// let fruits= ["anar","kiwi","mango","banana"];
// let numbers=[1,2,3,4];
// let mixed = [1,2,"rram",null,undefined,NaN,0];
// console.log(mixed);
// console.log(numbers[3]);
// console.log(fruits[3]);

/* change the array */

let fruits= ["anar","kiwi","mango","banana"];
console.log(fruits);
fruits[2]="ananas"; 
console.log(fruits);
console.log(typeof fruits);// showing object

/* how to find this is array or not */
let obj= {};// object literal
console.log(Array.isArray(obj));//false
console.log(Array.isArray(fruits));//true its array
