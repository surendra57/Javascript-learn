// splice() method

const array=['item1','item2','item3'];

    // const del=array.splice(1,1,"in");
// console.log(del)
// console.log(array)
const user=[5,6,8,9];

const ans=user.filter((item,index,arr)=>{
    // console.log(item);
    return item%2===0;
});

console.log(ans);