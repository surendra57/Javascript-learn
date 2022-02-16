// function returning Promise

function RicePromise() {
    const bucket=['coffee','chips','vegies','salt','rice'];

    return new Promise((resolve,reject)=>{
        if (bucket.includes('vegies') && bucket.includes('salt') && bucket.includes('rice')) {
            resolve({value:"fried rice"});// yha object ,array ,string bhi pass kr skte hai
        }else{
            reject("could not do it");//aur yha bhi same
        }
    });
}

RicePromise().then(
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