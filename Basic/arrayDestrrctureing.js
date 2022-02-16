// array destructuring

const myArray =["a","b","c","d"];
// let a1=myArray[0];
// let a2=myArray[1];
// console.log(a1,a2);

/* instead of we can use destructuring */

let[a1,a2,...myNew]=myArray;//...myNew using spread operator
console.log(myNew);
// let newOne= myArray.slice(2);
// console.log(newOne)
console.log(a1,a2);