// mehthods
//     function inside object
 
function info(){
    console.log(this.age);
}
const user1={
    firstName:"surendra",
        age:25,
    about:info
}

const user2={
    firstName:"raghav",
    age:26,
    about:info
}
const user3={
    firstName:"amit",
    age:29,
    about:info
}

user1.about();
user2.about();
user3.about();