// reduce method

const numbers=[1,2,3,5,4,10];
// sum all numbers

const sum= numbers.reduce((accumulator,currentvalue,index,array2)=>{
        // console.log(index,array2);
        return accumulator + currentvalue;
},10);

console.log(sum);

const userCart=[
    {productId:1,productName:"mobile",price:12000},
    {productId:1,productName:"tv",price:16000},
    {productId:1,productName:"jeans",price:1200}
];

const totalCart= userCart.reduce((totalPrice,currentProduct)=>{
        return totalPrice + currentProduct.price;

},0);

console.log(totalCart);