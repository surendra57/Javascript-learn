// more improve in new keyword

function UserDetails(firstName,lastName,age,email,gender,address) {
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
UserDetails.prototype.about=function () {
    return `${this.firstName} ${this.lastName} is ${this.age} years old`
};
UserDetails.prototype.is18=function () {
    return this.age>=18;
};
UserDetails.prototype.sing=function(){
    return this.email;
    // console.log("sure")
}

const user1=new UserDetails("surendra","gahlot",'25','suredra@gmail.com','male','bhilwara');
const user2=new UserDetails("ram","gahlot",'26','suredra@gmail.com','male','bhilwara');
const user3=new UserDetails("rakesh","gahlot",'22','suredra@gmail.com','male','bhilwara');
// console.log(user1);

for (const key in user1) {
    // console.log(key);
    if (user1.hasOwnProperty(key)) {//check funciton own property then console
        console.log(key)
    }
}