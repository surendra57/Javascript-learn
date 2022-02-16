// for loop in array


let fruits=["apple","mango","banana","grapes"];
// for (let index = 0; index < fruits.length; index++) {
//     const element = fruits[index];
//     console.log(fruits);
// }

// console.log(fruits.length);

// console.log(fruits[fruits.length-1]);
let f2=[];// new array 
for (let i = 0; i <fruits.length; i++) {
        // console.log(fruits[i]);
         f2.push((fruits[i].toUpperCase()));
}

console.log(f2)