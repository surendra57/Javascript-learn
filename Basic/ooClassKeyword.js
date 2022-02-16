// class keyword use in same example code and more effective 
class UserDetails{
    constructor(firstName,lastName,age,email,gender,address){
        console.log("constructor called")
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.email=email;
        this.gender=gender;
        this.address=address;
    }
    // methods there
    about(){
        return `${this.firstName} ${this.lastName} is ${this.age} years old`;
    }
    is18(){
        return this.age>=18;
    }
    sing(){
        return "khuda gwah khuda gwah";
    }
}


const user1= new UserDetails("surendra","gahlot",'25','suredra@gmail.com','male','bhilwara');
// const user2=new UserDetails("ram","gahlot",'26','suredra@gmail.com','male','bhilwara');
// const user3=new UserDetails("rakesh","gahlot",'22','suredra@gmail.com','male','bhilwara');
console.log(user1);
const about=user1.sing();
console.log(about);