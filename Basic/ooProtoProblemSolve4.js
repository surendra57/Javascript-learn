// proto

const obj1={
    key1:"value1",
    key2:"value2"
}

const obj2=Object.create(obj1);

//one more option to making empty object
obj2.key3="value3";
console.log(obj2)