// underStand callbacks

function func1(callback,a,b,another) {
    // console.log("this is function func1")
    if (a===b) {
        callback(a,b);
    }else{
        console.log("called another function ");
        another(a,b);
    }
}

// function func2(name) {
//     console.log("this is function func2")
// }

func1((c,d)=>{
    console.log("this is callback function",c+d);

},5,6,(r,s)=>{
    console.log("another callback function ",r+s)
});

// function returning function
function fname(params) {
    console.log("hello")
    return ()=>{
        console.log("return function")
    };
    
}
const returnF=fname()
returnF()