//Getters and setters
// its use for methods property ke jaise treat krna :getters

class Person{
    constructor(firstName,lastName,age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        
    }
    get fullName(){// getters
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(fullName){
        const[firstName,lastName]=fullName.split(" ")
        this.firstName=firstName;
        this.lastName=lastName;
    }
}

const user1=new Person('Harshit','Mehta','25year old');
// console.log(user1.fullName);
// user1.setName('ram','sharma');
// user1.firstName="john"
// console.log(user1.firstName)
user1.fullName="surendra aghlot"
console.log(user1.fullName)