// function inside function

function app(){
    const myFunc=function(){
        console.log("hello from myFunc");
    }
    
    const newOne=(a,b)=>a*b;

    const myNew=(a,b)=>{
        return a+b;
    }
    console.log("inside app");
    myFunc();
    console.log(newOne(4,5));
    console.log(myNew(4,5));

}

app();