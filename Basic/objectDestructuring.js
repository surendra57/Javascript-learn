// Object De-Structuring

const band={
    bandName:"Rockstar",
    famousSong:"sehnai",
    year:1996,
    singer:"ustad"
}

// const var1=band.bandName;
// const var2=band.famousSong;
// console.log(var1,var2);


const{bandName:var1,famousSong:var2,year,...another}=band;
// bandName="Raj";

// console.log(bandName,famousSong,another);
console.log(var1,var2,year, another);
