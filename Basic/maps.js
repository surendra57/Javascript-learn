// maps



// const user={
//     fname:'sure'
// }

// console.log(user.fname)
// console.log(user['fname'])

// const value=new Map();
// value.set('fname','surendra');
// value.set('age',25)
// console.log(value)
// console.log(value.get('age'));

// // allkeyy
// console.log(value.keys());

// for (const key of value.keys()) {
//     console.log(key,typeof key)
// }



// const user={
//     fname:'sure',
//     age:25
// }
// console.log(Object.keys(user))

// const numbers=[3,9,15,8];
// // console.log(user.fname)
// for (let key in user) {
//     // console.log(user);

// }

// for (const key of Object.keys(user)) {
//     console.log(user[key])
// }

/* more use of Map() */
const user1={
    id:1,
    age:25
}
 
const info=new Map();
info.set(user1,{gender:"Male"});
console.log(info);
// console.log(user1.id);
console.log(info.get(user1).gender)

// const numbers=[3,9,15,8];
// const info=new Set(numbers);
// info.add(numbers)
// info.add(2);

// console.log(info);