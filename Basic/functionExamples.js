
// Make a function  
// in:string
//out:first character of string


// function  firstChar(anyString) {
//     return anyString[0];
//     // return anyString[anyString.length-1];
// }

// console.log(firstChar("Surendra"));
// console.log(typeof (firstChar("Surendra")));


/* fucntion 
in: array,target(number)
out:index of target if target present in array*/

function findTarget(array,target) {
    for(let i=0;i<array.length;i++){
            if (array[i]===target) {
                return i;
            }
    }return -1;
}

 const array1=[1,5,8,9];
const find=findTarget(array1,81);
console.log(find);