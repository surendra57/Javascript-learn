//Rest Parameter

function myFunc(a,b,...c) {
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
    console.log(c);
}

// myFunc(3,4,5,6,7,8,9);

// add the numbers in parameter

function  addAll(...numbers) {
    // console.log(typeof  numbers);
    // const array1= Array.isArray(numbers);
    // console.log(array1);
    // let total=0;
    // for (let number in numbers) {
    //     total= total + numbers[number]; 
    //     }
    for (let number of numbers) {
        // total= total + number; 
        console.log(number);   
        }
       
        // return total;
        
}

// addAll(1,2,5);
addAll(48,55);
// console.log(resultSum);
// console.log(typeof resultSum);