// const rootNode=document.getRootNode();
// const htmlElement=rootNode.childNodes[0];
// // console.log(htmlElement.childNodes);//NodeList(3) [head, head, body]
// const head=htmlElement.childNodes[0];
// const text=htmlElement.childNodes[1];
// const body=htmlElement.childNodes[2];
// console.log(head.nextSibling.nextSibling);
// console.log(head.childNodes);

// const h1=document.querySelector("h1");
// const body=h1.parentNode.parentNode;
// body.style.color="#efefef";
// body.style.backgroundColor="#333";

// const body=document.body;
// body.style.backgroundColor="#333";
    
// const container= document.querySelector(".container");
// console.log(container.children);

// const title=document.querySelector("title");
// console.log(title.childNodes);

// multi element using event
const btn=document.querySelectorAll("button")
console.log(btn);


for (const button of btn) {
        button.addEventListener("click",function () {
            console.log(this.textContent)
        })
}