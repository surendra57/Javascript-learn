//  multi element using event 

const allButton= document.querySelectorAll("button");

// console.log(h1);
// for (const button of allButton) {
//     button.addEventListener("click",function () {
//         console.log(this.textContent);
//     })
// }

// for (let i = 0; i < allButton.length; i++) {
//         allButton[i].addEventListener("click",function () {
//             console.log(this.textContent);
//         })
    
// }

function nam(button) {
    button.addEventListener("click",function () {
                console.log(this.textContent);
            })
}
allButton.forEach(nam);