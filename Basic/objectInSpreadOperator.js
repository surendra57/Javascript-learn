// Spread Operator in Objects

//revise in array
// const array1=[1,2,30];
// const array2=[1,5,6];

// let[a, ,...myOne]=array1;
// console.log(myOne)
// const myNew=[array1,...array2];
// console.log(myNew);

// in objects

const obj1={
    key1:"value1",
    key2:"value2",
    key3:"value3"
};

const obj2={
    key1:"shyam",// this value is overwrite in return
    key4:"value2",
    key5:"value3"
};

// const newObject={...obj1,...obj2,key15:"ram"};
const newObject={..."abc"};// any string
// const newObject={...["a","b"]};// any array 
// const newObject={...obj2,...obj1};
console.log(newObject);
