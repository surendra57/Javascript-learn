// Parameter De-Structuring

const user={
    name:"john",
gender:"male",
age:25
}

const array=[1,5,5,79];

function all(a,b) { //using arrow function
    console.log(a,b)
}


all(user,array);
// const a=array[0];
// const[a,b,...c]=array;


// console.log(user.name);
// function userDetails(obj) {
//     console.log(obj.name);
//     console.log(obj.gender);
// }

/* now de structuring in Parameter */

const userDetails=({name,gender})=> {
    console.log(name,gender);
    
}
userDetails(user);
