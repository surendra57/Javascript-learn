// solution 2

const userMethods={
    about:function () {
        return `${this.firstName} ${this.lastName} is ${this.age} years old`
    },
    is18:function () {
        return this.age>=18;
    } 
}
function userDetails(firstName,lastName,age,email,gender,address) {
    let user={};
    user.firstName=firstName;
    user.lastName=lastName;
    user.age=age;
    user.email=email;
    user.gender=gender;
    user.address=address;
    user.about=userMethods.about;
    user.is18=userMethods.is18;
    
    return user;
}

const user1=userDetails("surendra","gahlot",'25','suredra@gmail.com','male','bhilwara');
const user2=userDetails("ram","gahlot",'26','suredra@gmail.com','male','bhilwara');
const user3=userDetails("rakesh","gahlot",'22','suredra@gmail.com','male','bhilwara');

const about=user1.about();
console.log(about)