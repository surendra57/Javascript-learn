// callback Functions
// means function se ke under function call or invoke krna

// function myFunc2(name){
//     console.log("this is myFunc2");
//     console.log(`My name is ${name}`);
//         for (const iterator in name) {
//             console.log(name[iterator]);
//         }

// }

// function myFunc(callback){
//     console.log("this is myFunc");
//     // console.log(callback);
//     // callback([1,5,6]);
//     callback();
//     console.log("finished the call back function")

// }

// myFunc(myFunc2);

/* another ex. */

function myName(name){
    // console.log(name);
    document.getElementById("num").innerHTML=name;
}


function v1(){
    myName("surendra");
}

function v2(){
    myName("ajay");
}

v1();
v2();