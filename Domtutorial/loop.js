// const navitems=document.getElementsByTagName("a");
// console.log( navitems);//HTMLCollection
// // we cant use forEach method to iterate through HTMLCollection
// // use for ,for of loop


// for (const items of navitems) {
//     console.log(items)
//     items.style.backgroundColor="white";
//     items.style.color="green"
// }


const about=document.querySelectorAll(".nav-items a")
console.log( about);//NodeList
const b=Array.from(about);// change in array 
const a=Array.isArray(b)// check array or not
console.log(a)


for (const key of b) {
    key.style.backgroundColor="white";
    key.style.color="brown"
    key.style.fontWeight="800"
    
}

// about.forEach((h) => {
//     h.style.backgroundColor="white";
//     h.style.color="black";
//     h.style.fontWeight="800";
    

// });