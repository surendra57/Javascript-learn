// function execution context

//when Js call a function then its create a new executon context ,it is called a function execution context

const lastName="gehlot";
function fullname() {
            const firstName="surendra";
            console.log(firstName);
            function all() {
                console.log(firstName);
                console.log(lastName);   
            }
            all();//created another FEC from there
}
fullname();//created FEC from there 

// lexical enviro