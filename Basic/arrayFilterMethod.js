// filter method

const numbers= [1,2,5,8,9,6,4];

function isEven(num){
     return num%2===0;
    // console.log(num%2===0)
}

const result =numbers.filter(isEven);
console.log(result)