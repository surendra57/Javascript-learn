// clone using Object.assign
const obj={
    key1:1,
    key2:25
}

const obj2=Object.assign({},obj);
obj2.key4="a"; 
console.log(obj2)
console.log(obj)