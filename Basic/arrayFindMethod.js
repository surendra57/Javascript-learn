// Find method


const users=["surendra","raj","narendra","rakesh"];

// function findname(string){
//     return string.length===3;
// }

const a=users.find(function(string){
    return string.length===3;
});
// console.log(a);

const ages=[15,16,19,40];

const ans=ages.find((age)=>age>18);
// console.log(ans);

/* real world */

const userOne=[
    {userId:1,userName:"mobile",price:500},
    {userId:2,userName:"mob",price:500},
    {userId:3,userName:"moile",price:500},
    {userId:4,userName:"bile",price:500},
    
];
const myUser= userOne.find((user)=>user.userId===3);
console.log(myUser)
