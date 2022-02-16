// this keyword


 const btn=document.querySelector(".btn-headline");
 console.log(btn)

 btn.addEventListener("click", () =>{
     console.log("you clicked me")
     console.log(this);
 })