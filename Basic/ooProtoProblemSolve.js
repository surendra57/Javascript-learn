//proto__ 

// const user1={
//     firstName:"john",
//     age:18,
//     email:"surendragahlot@gmail.com",
//     gender:"male",
//     address:"bhilwara",
//     about:function () {
//         return `my name is ${this.firstName} and my age is ${this.age}`
//     },
//     is18:function () {
//         return this.age>=18;
//     }
// }
// const result=user1.is18();
// console.log(result);

/* make a function and return a object */

function userDetails(firstName,lastName,age,email,gender,address) {
    let user={};
    user.firstName=firstName;
    user.lastName=lastName;
    user.age=age;
    user.email=email;
    user.gender=gender;
    user.address=address;
    user.about=function () {
                return `my name is ${this.firstName} and my age is ${this.age}`
            };
    user.is18=function () {
                return this.age>=18;
            } 
    return user;
}

const user1=userDetails("surendra","gahlot",'25','suredra@gmail.com','male','bhilwara');
console.log(user1);
const about=user1.about();
console.log(about)
