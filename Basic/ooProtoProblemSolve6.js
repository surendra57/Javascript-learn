// using new keyword and improving the code

function userDetails(firstName,lastName,age,email,gender,address) {
    //no need this now cause of new keyword //   let user=Object.create(userDetails.prototype);//empty object using [[prototype]] concept
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
    this.email=email;
    this.gender=gender;
    this.address=address;
    // user.about=userMethods.about;
    // user.is18=userMethods.is18;
    
    // return user;
}
/* using Protypes */
// console.log(userDetails.prototype);
userDetails.prototype.about=function () {
    return `${this.firstName} ${this.lastName} is ${this.age} years old`
};
userDetails.prototype.is18=function () {
    return this.age>=18;
};
userDetails.prototype.sing=function(){
    return this.email;
    // console.log("sure")
}

const user1=new userDetails("surendra","gahlot",'25','suredra@gmail.com','male','bhilwara');
const user2=userDetails("ram","gahlot",'26','suredra@gmail.com','male','bhilwara');
const user3=userDetails("rakesh","gahlot",'22','suredra@gmail.com','male','bhilwara');
console.log(user1);
const about=user1.about();
console.log(about)