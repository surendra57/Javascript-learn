// call  Apply , bind methods

// function hello() {
//     console.log("sue")
// }
// hello.call()


// const user1={
//     firstName:"surendra",
//         age:25,
//     about:function(guitar) {
//         console.log(this.firstName,this.age,guitar);
//     }
// }
//  const u=user1.about.bind(user1,["d"]);
// u();
// const user2={
//     firstName:"john",
//         age:9,

// }
// user1.about.call(user1);

// function hello(a,b) {
//     console.log(`my name is ${this.fname} and my age is ${this.age}`);
//     console.log(a,b)
// }

const obj1={
    fname:"surendra",
    age:25,
    about:function hello(a,b) {
        console.log(`my name is ${this.fname} and my age is ${this.age}`);
        console.log(a,b)
    }
}

const obj2={
    fname:"hardik",
    age:15
}

// const us=hello.apply(obj2,["b","s"]);
// us();

const result=obj1.about.bind(obj2,["sure","sure"])
result();
