//this inside arrow function


const obj1={
    fname:"surendra",
    age:25,
    about(a,b) { //short syntax
        
        console.log(`my name is ${this.fname} and my age is ${this.age}`);
        // console.log(a,b)
    }
}

obj1.about();