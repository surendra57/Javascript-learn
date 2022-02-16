// computed properties

const value1= "Ram";
const value2= "Raghu";

 const key1 = "anar";
 const key2="banana";


 //outcome below one need
var obj ={
    Ram:"anar",
    Raghu:"banana"
}

var obj={
    [value1]:key1,
    [value2]:key2
}

 console.log(obj);
//  const obj={};

//  obj[value1]=key1;
//  obj[value2]=key2;

//  console.log(obj);