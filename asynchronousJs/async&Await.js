//  Consume Promises with async and Await

// fetch(URL)
//     .then((response)=>{
//         return response.json();
//     })
//     .then((data)=>{
//         console.log(data);
//     })


const URL="https://jsonplaceholder.typicode.com/postss";

async function getF() {
        
        const response=await fetch(URL);
        if (!response.ok) { //error handling
            throw new Error("something went Wrong")
        }
        const data=await response.json()
        return data;
}
getF()
    .then(data=>{console.log(data)})
    .catch((error)=>{
        console.log("inside")
        console.log(error)
    })
