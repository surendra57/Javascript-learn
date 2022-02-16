import  some from "./Utils/age.js";
import { firstname as fname } from "./Utils/fname.js";
import  Person ,{Person2} from "./Utils/person.js";//cause use default in export file.

console.log(fname,some);
const person=new Person("john","george",22);
person.info();
Person2.infod();
console.log(person);

async function getf() {
    console.log("sham da rang kyu laal")
    return "hello";
}

getf()
    .then((data)=>{
        console.log(data);
    })