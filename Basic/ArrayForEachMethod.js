// array methods 
const numbers=[2,4,5,6];

// function myMulti(number,index){
//     // console.log(`index is`,index);
//     // console.log(`${number}*2=${number*2}`);
//     console.log(`index is ${index} number is ${number*2}`)
// }

// for(let num in numbers){
//     myMulti(numbers[num],num);
// }

/* directs funvtion forEach Mein Pass*/
numbers.forEach(function(number,index){
   console.log(`index is ${index} number is ${number*2}`);
});

numbers.forEach(function(num,i,h){
    console.log(num*3,i);
    console.log(h);
});


const user=[
    {fname:'sure',age:25},
    {fname:'nayan',age:25},
    {fname:'hardik',age:25},
];

// const[{fname}]=user;
// console.log(fname);
// const n=user[0].fname;
// console.log(n)

user.forEach((ele)=>{
    console.log(ele.fname);
});


for (const iterator of user) {
    console.log(iterator.fname);
}

