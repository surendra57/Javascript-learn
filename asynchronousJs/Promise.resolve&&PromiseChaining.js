//Promise.resolve and Promise Chaining

const varr=Promise.resolve("surendra");
varr.then((value)=>{
    console.log(value);
})
// Promise.resolve({fname:"sur"}).then((value)=>{
//     console.log(value);
// })

//Promise chaining with help of then() method
function myOne() {
    return new Promise((resolve,reject)=>{
        resolve("foo");
    });
}

myOne()
    .then((value)=>{
        console.log(value);
        value +="baar"
        return value;
    })
    .then((value)=>{
        console.log(value)
        value += "baaz"
        return value;
    })
    .then((value)=>{
        console.log(value)
    })
