//static list vs live list

//for static list
const listItems = document.querySelectorAll(".todo-list li");
const li6=document.createElement("li");
li6.textContent="item 6";
const ul=document.querySelector(".todo-list");
ul.append(li6)
console.log(listItems);

// for live list
const ul = document.querySelector(".todo-list");
const listItems=ul.getElementsByTagName("li");

const li6=document.createElement("li");
li6.textContent="item 6";
ul.append(li6)
console.log(listItems);