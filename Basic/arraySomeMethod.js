// some() method 

// if only one value return true then method return true otherwise false
const numbers=[3,9,15,8];

const result=numbers.some((num)=>num%2===0);
// console.log(result)


const userCart=[
    {productId:1,productName:"mobile",price:500},
    {productId:2,productName:"shirt",price:250},
    {productId:3,productName:"tv",price:240},
    {productId:4,productName:"jeans",price:1200}
];
//check any item Price>1000

const ans=userCart.some((user)=>user.price>1000);
console.log(ans);


