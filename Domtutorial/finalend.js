const todoForm=document.querySelector(".form-todo");
const todoInput= document.querySelector(".form-todo input[type='text']");
const todoList=document.querySelector(".todo-list");
const headLineButton=document.querySelector(".btn-headline");
headLineButton.addEventListener("mouseover",(e)=>{
    console.log("click");
    e.target.innerHTML="Read It";
    e.target.style.backgroundColor="black";
    e.target.style.color="white";
});
headLineButton.addEventListener("mouseleave",(e)=>{
    console.log("not click");
    e.target.textContent="Learn More";
    e.target.style.backgroundColor="white";
    e.target.style.color="black";
});

todoForm.addEventListener("submit",(e)=>{
    e.preventDefault();//for page refresh na ho
    // console.log("form submitted")
    const newTodoText=todoInput.value;
    const newLi=document.createElement("li");
    newLi.innerHTML=`<span class="texr">${newTodoText}</span>
    <div class="todo-button">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button>
    </div>`;
    // console.log(newLi)
    todoList.append(newLi);
    todoInput.value="";
});

todoList.addEventListener("click",(e)=>{
    // console.log(e.currentTarget);
    // console.log(e.target);
    
    //check of user clicked on done button
    if (e.target.classList.contains("remove")) {
        // console.log("you want to remove something");
        const targetLi=e.target.parentNode.parentNode;
            console.log(targetLi)
        targetLi.remove();
    }
    if (e.target.classList.contains("done")) {
        // console.log("great!!");
        const liSpan=e.target.parentNode.previousElementSibling;
        // console.log(liSpan);
        liSpan.style.textDecoration="line-through";
    }
})