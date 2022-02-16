// super keyword using same example
class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    food(){
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
    constructor(name,age,speed,eat){
        super(name,age);
        this.speed=speed;
        this.eat=eat;
    }
    food(){// first yha check hoga food()available hai ya nhi if nhi hoga to animal class se call method call hoga
        return `${this.name} is eat ${this.eat}`;
    }
}

const tommy= new Dog("tommy",'2yearold','45km/hr','pedigree');
console.log(tommy.food())