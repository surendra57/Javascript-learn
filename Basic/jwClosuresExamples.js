// //closures examples

// function sayHello(x) {
//       const a="varA";
//       const b='varB';
//       return function () {
//           console.log(a,b,x);
//       }
// }
// const ans=sayHello("arg");
// ans();


// // sqaure examples

// function myFunc(power) {
//     return function inner(y) {
//         console.log(y**power);
//     }
// }
// const sqaure=myFunc(2);
// sqaure(8)            

/* alreeady function called examples */

function v1() {
         let counter=0;
      return function v2() {
          if (counter<1) {
              console.log('hi!! i called');
              counter++;
            } else {
              console.log('bc kitti baar call krega');
          }
      }
    
}
const ans=v1();
// ans();
// ans()
// ans()

function helloO(params) {
    console.log("hells")
}
const aans=helloO.apply();
// aans()pp
