//Synchronous Vs Asynchronous programming 

//Javascript is a synchronous and single threaded programming language.
//line by line code run hota hai 

// console.log("start");
// for (let i=0;i<1000;i++) {
//     console.log("inside");
// }
// console.log("end");


//setTimeout() and clearTimeout()


console.log("start");


const id=setTimeout(()=>{
    console.log("inside hello coder")
},1000);

for (let i=1 ;i<100;i++) {
    console.log("inside loop");
}

console.log("setTimeout id",id);
console.log("clear time out")
clearTimeout(id);
console.log("end");
