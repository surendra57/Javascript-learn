// Prototypes

// its provide by only functions


function hello() {
    console.log("helloworld")
    // this.eat="food";
}

// hello();

// hello.myOwn="hy boys";
// console.log(hello.myOwn)


// console.log(hello.prototype)
hello.prototype.fname="johm";
hello.prototype.age=25;
hello.prototype.about=function (params) {
    return "raghav";
};
// console.log(hello.prototype)
// console.log(hello.prototype.about())
const user1=new hello();
console.log(user1)

