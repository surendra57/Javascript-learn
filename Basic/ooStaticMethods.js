// static methods and Properties

class Person{
    constructor(firstName,lastName,age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        
    }
    static eat(){ //statice method directy called without creating object
        return ` surendra is eat something`;
    }
    static desk="ramesh";//static  property

    get fullName(){// getters
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(fullName){
        const[firstName,lastName]=fullName.split(" ")
        this.firstName=firstName;
        this.lastName=lastName;
    }
    food(){
        return `${this.firstName} is eat something`;
    }
    isCute(){
        return this.age<=2;
    }
}

const user1=new Person('Harshit','Mehta','25year old');
console.log(user1)
console.log(user1.firstName);
const a=Person.eat();
console.log(a);
console.log(Person.desk)