//function returning Function


function myOne(){
    function myTwo(){
        console.log("mytwo");
        // return "sy";
    }
    return myTwo;
}
const ans= myOne();
ans();