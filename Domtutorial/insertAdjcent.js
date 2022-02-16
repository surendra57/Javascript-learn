// insert adjcent elements


const todolist= document.querySelector(".todo-list");
// todolist.insertAdjacentHTML("beforeend","<li>end</li>")
// todolist.insertAdjacentHTML("afterend","<li>outside down</li>")
// todolist.insertAdjacentHTML("beforebegin","<li>up outside</li>")
// todolist.insertAdjacentHTML("afterbegin","<li>start</li>")


const formtodo=document.querySelector(".form-todo");
formtodo.insertAdjacentHTML("afterbegin","<br><input type=\"text\"  placeholder=\"create todo\"><br><input type=\"submit\" class=\"btn\" value=\"Add todo\">")

const input=document.createElement("h1");
// input.innerHTML=" <input type=\"text\"  placeholder=\"Add todo\"><br><input type=\"submit\" class=\"btn\" value=\"Add todo\">";
// formtodo.append(input)