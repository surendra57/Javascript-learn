//document.createElement();
//append
//prepend
//remove

const newTodoItem=document.createElement("li");
// const newTodoItemText=document.createTextNode("teach students");
newTodoItem.textContent="teach students";
const todo=document.querySelector(".todo-list")
// newTodoItem.append(newTodoItemText)
// todo.append(newTodoItem);//create in ending
todo.prepend(newTodoItem);// create in starting
// console.log(newTodoItem);


//remove
// const todo1= document.querySelector(".todo-list li");
// todo1.remove();
// console.log(todo1)

//before
const newtodo= document.createElement("h1");
newtodo.textContent="teach student";
const todo1= document.querySelector(".todo-list");
// todo1.before(newtodo);
todo1.after(newtodo);



//after