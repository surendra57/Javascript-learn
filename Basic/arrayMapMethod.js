// map mehod
// const numbers=[5,4,6,9,8];

// const square=function(num){
//         // console.log(num*num);
//         return num*num;
// }

const user=[
    {fname:'sure',age:25},
    {fname:'nayan',age:25},
    {fname:'hardik',age:25},
];

const squaree=user.map(function(num){

    return num.fname;
    // console.log(num*num);
});
console.log(squaree)
