// Block scope Vs Function Scope

// let and const are block scope
// var is a function Scope.

// const firstName="john";
// {
//     const firstName="john";
//     console.log(firstName);
// }

// console.log(firstName);

/* real world ex.*/

const firstName="shyam";
function myVar(){
    if(true){
        let firstName="raghu";
        console.log(firstName);
    }
    console.log(firstName);
}

myVar();
