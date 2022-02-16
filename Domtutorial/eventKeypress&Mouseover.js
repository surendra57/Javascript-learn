//keypress event


// const body=document.body;
// body.addEventListener("keypress",(e)=>{
//     console.log(e.key);
// });


// mouseover event
/* other here using classList for add class */
const greenButton =document.querySelector(".btn-headline");

const addClass=greenButton.classList.add("bg-dark");

const mainButton= document.querySelector(".btn-headline");

mainButton.addEventListener("mouseover",(e)=>{
    console.log("mouser over occured",e.target.textContent)
    e.target.style.backgroundColor="black";
    e.target.style.Color="#20352A";
        
});

// mouse leave event
mainButton.addEventListener("mouseleave",(e)=>{
    console.log("mouser leave occured",e.target.textContent)
    e.target.style.backgroundColor="#eee";
    e.target.style.color= "20352A";
});


// const mainButton=document.querySelectorAll(".form-todo input");
// // console.log(mainButton)

// for (const button of mainButton) {
//     button.addEventListener("mouseover",(e)=>{
//         // console.log("mouse over event occcured ")
//         console.log(e.target)

//         e.target.style.backgroundColor="yellow";
//     });
    
// }