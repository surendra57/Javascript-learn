// how to iterate objects

const human={
    name:"john",
    age:25,
    hobbies:["eat","musie"]
}

// using for...in loop 


// for (const key in human) {
//     console.log(key);
//         // console.log(human[key]);
//         //  console.log(`${key}:${human[key]}`)
// }

// console.log(Object.keys(human))
// console.log(typeof  (Object.keys(human)));

// const val=Array.isArray(Object.keys(human));
// console.log(val);

//for..of loop

for(let key of Object.keys(human)){
    console.log(human[key]);
}
console.log(Object.keys(human));


