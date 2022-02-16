// every() method

//check all numbers are even or not
const numbers=[2,4,6,8,10];

const ans=numbers.every((num)=>num%2===0);
console.log(ans);

// real world

const userCart=[
    {productId:1,productName:"mobile",price:500},
    {productId:2,productName:"shirt",price:250},
    {productId:3,productName:"tv",price:240},
    {productId:4,productName:"jeans",price:1200}
];

//check Price <2000 
const result=userCart.every((cartItem)=>cartItem.price<1000);
console.log(result);
