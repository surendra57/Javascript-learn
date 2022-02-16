// get multiple elements using getElementByClassName() method
// get multiple elements using querySelector() method

const header=document.getElementsByClassName("form-group ");
console.log(header[5]);//HTMLCollection
// header[5].innerText="change something";
header[5].style.color="black";
// header[5].style.border="2px solid black";

// console.log(header[5]);
const about=document.querySelectorAll(".form-group label")
console.log(about);//NodeList
about[5].style.fontSize="2rem";
about[5].style.color="red";
about[5].style.fontWeight="1000";

