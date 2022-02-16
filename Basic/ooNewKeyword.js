//new keyword

function createUser(firstName,age) {
        this.firstName=firstName;
        this.age=age;
}
createUser.prototype.about=function () {
        console.log(this.firstName,this.age);
        
}
 const ans1= new createUser("raju",25);
// console.log(ans1);

// ans1.about();
// console.log(about)

//anotherexammpleeee

function user1() {
        console.log("something");
        this.fname="raj";
}
function user2() {
    // this.fname="ramesh";
  user1.call(this);
  
//   return 0;  
}

// user2.prototype=Object.create(user1.prototype);
const result= new user2();
console.log(result.fname)
// result()
