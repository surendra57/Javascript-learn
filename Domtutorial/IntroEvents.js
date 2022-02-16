// intro to events
//click

//first method

// const btn=document.querySelector(".btn-headline");
// console.log(btn);
// btn.onclick=function (params) {
//     console.log("you clicked me")
// }

//method ----addEventListener
const btn=document.querySelector(".btn-headline");
-+console.log(btn);

// btn.addEventListener("click",function() {
//     console.log("you clicked me");
// });

btn.addEventListener("click",()=>{    // use arrow function
    console.log("you clicked me")
})