// callback hell and pyramid of doom
const heading1=document.querySelector(".heading1")
const heading2=document.querySelector(".heading2")
const heading3=document.querySelector(".heading3")
const heading4=document.querySelector(".heading4")
const heading5=document.querySelector(".heading5")
const heading6=document.querySelector(".heading6")
const heading7=document.querySelector(".heading7")
// //callback hell
// setTimeout(() => {
//     heading1.textContent="one"
//     heading1.style.color="violet"
//     setTimeout(() => {
//         heading2.textContent="two"
//         heading2.style.color="red";
//         setTimeout(() => {
//             heading3.textContent="three"
//             heading3.style.color="purple";
//             setTimeout(() => {
//                 heading4.textContent="four"
//                 heading4.style.color="pink";
//                 setTimeout(() => {
//                     heading5.textContent="five"
//                     heading5.style.color="green";
//                     setTimeout(() => {
//                         heading6.textContent="six"
//                         heading6.style.color="blue";
//                         setTimeout(() => {
//                             heading7.textContent="seven"
//                             heading7.style.color="brown";
//                         }, 1000);
//                     }, 3000);
//                 }, 2000);
//             }, 1000);
//         }, 2000);
//     }, 2000);
// }, 1000);

// pyramid of doom
function changeText(element,text,color,time,onSuccess,onFailure) {
    // console.log(element)
    setTimeout(() => {
        if (element!=undefined) {
            element.textContent=text;
            element.style.color=color;
            if(onSuccess){
                onSuccess();
            }
        }else{
            if (onFailure) {
                onFailure();
            }
        }
    }, time);
}
changeText(heading1,"one","violet",1000,()=>{
    changeText(heading2,"two","red",1000,()=>{
        changeText(heading3,"three","green",1000,()=>{
            changeText(heading4,"four","orange",1000,()=>{
                changeText(heading5,"five","green",1000,()=>{
                    changeText(heading6,"six","brown",1000,()=>{
                        changeText(heading7,"seven","pink",1000,()=>{
                            
                        },()=>{console.log("heading does not exist")})
                    },()=>{console.log("heading does not exist")})
                },()=>{console.log("heading does not exist")})
            },()=>{console.log("heading does not exist")})
        },()=>{console.log("heading does not exist")})
    },()=>{console.log("heading2 does not exist")})
},()=>{console.log("heading does not exist")})



