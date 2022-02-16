// class keyword another examples

class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    eat(){
        return `${this.name} is eat something`;
    }
    isCute(){
        return this.age<=2;
    }
}
const animal1=new Animal('Dog',5);
const animal2=new Animal('Cow',5);
const animal3=new Animal('Buffalo',5);

// console.log(animal1);
// console.log(animal2.isCute());

// class Dog

class Dog extends Animal{

}

const tommy= new Dog("tommy",2);
console.log(tommy)