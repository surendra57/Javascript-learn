// sort method

// sorting 

// const numbers=["sur","A","c"];
const numbers=[5,10,55,66,8];
const a=numbers.sort((a,b)=>{
    return b-a;
});
// console.log(a[0]);

/* real world ex. */
const userCart=[
    {productId:1,productName:"mobile",price:500},
    {productId:2,productName:"shirt",price:250},
    {productId:3,productName:"tv",price:240},
    {productId:4,productName:"jeans",price:1200}
];

// low to high
const lowtoHigh=userCart.slice(0).sort((a,b)=>{//use slice()
        return a.price-b.price;
})
console.log(lowtoHigh);

//high to low
const highToLow=[].concat(userCart).sort((a,b)=>{//use concat() for clonearray
    return b.price-a.price;
});
console.log(highToLow);

// console.log(userCart);