// event Object


// const firstButton=document.querySelector("#one");

// firstButton.addEventListener("click",function(event){
//         console.log(this.textContent)
//         console.log(event);
// })

const allButton= document.querySelectorAll("button");

for (let button of allButton) {
    button.addEventListener("click",function(e) {
        console.log(this.textContent);
        // console.log(e.currentTarget)
        console.log(e.target)
    });
}