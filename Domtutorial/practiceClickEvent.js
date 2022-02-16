

const allButtons=document.querySelectorAll(".my-button button");

allButtons.forEach(function (button) {
    button.addEventListener("click",(e)=>{
        // // console.log(e.currentTarget.textContent)
        e.target.style.backgroundColor="yellow";
        e.target.style.color="#333"
    });
});


