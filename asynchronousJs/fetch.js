// fetch

const URL="https://jsonplaceholder.typicode.com/posts";

fetch(URL)
    .then((response)=>{
        // console.log(response)
        if (response.ok===true) {
            return response.json()
        } else {
            console.log("something went wrong")
            throw new Error("something went wrong")
        }
        // return response.json()
    })
    .then((data)=>{
        console.log(data);
        
    })
    .catch((error)=>{
        console.log("einside error")
        console.log(error)
    })