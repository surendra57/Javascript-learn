//more useful about proto and prototypes


// const numbers=[1,2,3];
const numbers=new Array(1,2,3);

// console.log(Array.prototype);
// console.log(Object.getPrototypeOf(numbers));
// console.log(numbers);
const user={
    first:"surendra",
    about:function() {
        console.log(this);
    }
};
user.about();
const obj2=Object.assign({},user);// for clone just revise there
obj2.age=25;
console.log(obj2);

