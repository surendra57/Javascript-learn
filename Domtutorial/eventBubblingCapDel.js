
const grandparent=document.querySelector(".grandparent")
// const parent=document.querySelector(".parent")
// const child=document.querySelector(".child")

// // capturing
// child.addEventListener("click",()=>{
//     console.log("you capturing on child")
// },true);
// // parent.addEventListener("click",()=>{
//     console.log("you capturing on parent")
// },true);
// grandparent.addEventListener("click",()=>{
//     console.log("you capturing on grandparent")
// },true);
// document.body.addEventListener("click",()=>{
//     console.log("you capturing on body")
// },true);


//event bubbling (not capturing)

// child.addEventListener("click",()=>{
//     console.log("you clicked on child")
// });
// parent.addEventListener("click",()=>{
//     console.log("you clicked on parent")
// });
// grandparent.addEventListener("click",()=>{
//     console.log("you clicked on grandparent")
// });
// document.body.addEventListener("click",()=>{
//     console.log("you clicked on body")
// });


// event delegation
grandparent.addEventListener("click",(e)=>{
    console.log(e.target)
});
