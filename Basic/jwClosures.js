// closures
 

function outside() {
    function inside() {
        console.log("inside function")
    }
    return inside;
    
}

// const ans=outside();
// ans();

function outerSide(lastName) {
    const firstName="sur"
    function innerSide() {
        console.log(firstName,lastName)
    }
    return innerSide;

}

const ans=outerSide('surendra','gehlot');
ans();

