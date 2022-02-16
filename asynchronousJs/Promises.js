// Intro Promise

// its represent the future value
console.log("start")
const bucket=['coffee','chips','vegies','salt','rice'];

//Produce(create) the Promise
const friedRice=new Promise((resolve,reject)=>{
    if (bucket.includes('vegies') && bucket.includes('salt') && bucket.includes('rice')) {
        resolve({value:"fried rice"});// yha object ,array ,string bhi pass kr skte hai
    }else{
        reject("could not do it");//aur yha bhi same
    }
});

// now consume the Promise

friedRice.then(
    // when Promise will resolved 
    (myFriedRice)=>{
    console.log("lets eat",myFriedRice);
    }
//    null 
    // ,
    // //when Promise will rejected
    // (error)=>{
    // console.log(error);
    // }
).catch((error)=>{
    console.log(error)
})

setTimeout(()=>{
    console.log("setTimeOut")
},0);

for(let i=0;i<=10;i++){
    console.log(Math.random());
}
console.log("end");
// simple way ex.
// const array= [2,4,5,8];
// const newOne=new Promise((resolve,reject)=>{
//     if (array[1]===3) {
//         resolve("success");     
//     }else{
//          reject("failure");
//     }


// });

// newOne.then((random)=>{
//     console.log(random)
// },null).catch((error)=>{
//     console.log(error);
// })
