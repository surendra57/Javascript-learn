// sets

// const number=[1,2,5];
// const obj={v:1};// it is not store in set()cause object is not itetable
// const string="john"

// const all=new Set(number);
// all.add(number)
// // sets.delete(2);
// all.has(1)
// // if(all.has(1)){
// //     console.log("true")
// // }else {
// //     console.log("false")
// // }

// console.log(all);
// for (const iterator of all) {
//     console.log(iterator)
// }

//Set() use for find unique values

const myArray=[1,2,4,5,4,4];
const uniqueElements=new Set(myArray);
console.log(uniqueElements);
let length=0;
for (const item of uniqueElements) {
    length++;
}
console.log(length);