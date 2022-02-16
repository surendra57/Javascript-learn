// intro of objects 
// its a reference type

// how to create objects 

const person = { name:"john",age:25};
console.log(person);

const human={
    name:"john",
    age:25,
    hobbies:["eat","musice"]
}

// how to access data from objects 

// console.log(person.name);
// console.log(person.age);
// console.log(human.hobbies);
// console.log(human);
// how to add key value pair to object

// human.gender="male";
// console.log(human);

//bracket notation
console.log(human["name"]);
//add key value pair using bracket notation
human["gender"]="male";
console.log(human);
