// setInterval
// console.log("start")
// const id=setInterval(()=>{
//     console.log(Math.random())
// },1000);
// // clearInterval(id)
// console.log("end")


const body= document.body;
const button=document.querySelector("button")

const intervalId=setInterval(()=>{
    const red=Math.floor(Math.random()*126)
    const green=Math.floor(Math.random()*126)
    const blue=Math.floor(Math.random()*126)
    const rgb=`rgb(${red},${green},${blue})`;
    body.style.background=rgb;
    
},1000);

button.addEventListener("click",(e)=>{
    clearInterval(intervalId);
    button.textContent=body.style.background;
    // body.style.background="white";
    // e.target.style.background="black";
    // e.target.style.color="white";
    // e.target.textContent="Stopped";
});