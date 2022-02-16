// how to clone array
let array1= ["t1","t2"];
// let array2=["t1","t2"];

//slice() method
// let array2=array1.slice(0).concat(["t3","t4"]);
//concat() method 
// let array2=[].concat(array1,["t3","t4"]);

//spread operator
let oneMoreArray=["t3","t4"];
let array2=[...array1,...oneMoreArray];
// array1.push("t3");
console.log(array1 === array2);
console.log(array1);
console.log(array2);