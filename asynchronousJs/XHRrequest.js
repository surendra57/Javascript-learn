// XMLHttpRequest for create and send request to the server

const URL="https://jsonplaceholder.typicode.com/posts";
const xhr=new XMLHttpRequest();
// console.log(xhr);

xhr.open("GET",URL);
console.log(xhr.readyState);

// xhr.onreadystatechange=function () {
//     // console.log(xhr.readyState);
//     if (xhr.readyState===4) {
//         // console.log(xhr);
//         const response=xhr.response;// json data (as a string) 
//         const data=JSON.parse(response);// this is convert into js object
//         console.log(typeof data)
//         }
// }
xhr.onload=function () {
    console.log(xhr.readyState)
    const response=xhr.response;// json data (as a string) 
        const data=JSON.parse(response);// this is convert into js object
        console.log( data)
}

xhr.send();
