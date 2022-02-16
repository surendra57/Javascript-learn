// Promise && setTimeout

function newOne() {
    
    return new Promise((resolve,reject)=>{
        const value=true;
        setTimeout(() => {
            if (value) {
                resolve();
            } else {
                reject();
            }
        }, 2000);
    });
}

newOne()
    .then(()=>{console.log("resolved")})
    .catch(()=>{console.log("rejected")})