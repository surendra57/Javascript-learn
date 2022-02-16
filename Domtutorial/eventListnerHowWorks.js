
console.log("script start!!");
const allButtons=document.querySelectorAll(".my-button button");

allButtons.forEach(function (button) {
    button.addEventListener("click",(e)=>{
        console.log(e.currentTarget.textContent)
    });
});


console.log("script end!!!");