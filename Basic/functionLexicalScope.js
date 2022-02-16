// lexical scope
// const myVar="valu3";
function myLexi(){
        const myVar="valu1";
        const myFunc=function(){
            const myVar="valu4";
            console.log("myfunc")
        }
        const myFunc2=()=>{
            // const myVar="valu2";
            console.log("myfunction2",myVar)
        }
    myFunc();
    console.log("inside myLexi")
    console.log(myVar);
    myFunc2();
}

myLexi();
