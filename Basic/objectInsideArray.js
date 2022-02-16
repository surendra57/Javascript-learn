// objects inside array
//very useful in real world application

const users=[
    {userId:1,firstName:'surendra',gender:'male'},
    {userId:2,firstName:'harshit',gender:'male'},
    {userId:3,firstName:'aakash',gender:'male'}
];

console.log(users[0].firstName,users[0].gender);

// // firstly we do iterate

// for (let user of users) {
    // console.log(user);
    // console.log(user.userId,user.firstName,user.gender)
// }

//de-structuring
// const[user1,user2,user3]=users;
// // console.log(user1,user2,user3);
// const[{firstName:var1,gender:bb},{userId} ,{gender}]=users;
// console.log(userId,var1,bb,gender)
