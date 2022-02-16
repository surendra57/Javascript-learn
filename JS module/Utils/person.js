export default class Person{
    constructor(firstName,lastName,age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }
    static infod(){
        console.log("sure")
    }
    info(){
        console.log(this.firstName,this.lastName,this.age);
    }
}

export class Person2{
    constructor(firstName,lastName,age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }
    static infod(){
        console.log("aazadi")
    }
    info(){
        console.log(this.firstName,this.lastName,this.age);
    }
}

