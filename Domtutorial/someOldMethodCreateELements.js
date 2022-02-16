// some old method to Support poor Internet Explorer

// appendChild()
// const ul =document.querySelector(".todo-list");
// const li =document.createElement("li");
// li.textContent="newest todo";
// // ul.appendChild(li)

//insertBefore()
const ul =document.querySelector(".todo-list");
const li =document.createElement("li");
li.textContent="newest todo";
const ulLi=document.querySelector(".todo-list li")
ul.insertBefore(li,ulLi);

