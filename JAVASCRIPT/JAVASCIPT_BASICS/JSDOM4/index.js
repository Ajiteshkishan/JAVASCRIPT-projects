// javascript promises
// promises are used to handle asynchronous operations

// const { comma } = require("postcss/lib/list");

// // they are a way to handle the result of an asynchronous operation
// let myPromise1 = new Promise(function (resolve, reject) {
//   setTimeout(function()  {
//     console.log("Promise resolved after 5 second");  
//   }, 5000);
 
//  // resolve(1990);
//   reject("Error aaya hai");// reject the promise with an error message
// }
// );
// // then is used after the promise is resolved
// myPromise1.then((value) => {console.log("value", value)});
// myPromise1.catch((error) => {console.log("error aaya hai")});


// promise is created and will resolve after 5 seconds
// the resolve function is called to indicate that the promise has been fulfilled
// parallelly, we can create another promise 
// let myPromise2= new Promise(function (resolve, reject) {
//   setTimeout(function()  {
//     console.log("Promise2 resolved after 3 second");  
//   }, 3000);
//   resolve(1990);
//  // reject("Error aaya hai");// reject the promise with an error message
// }
// );

//console.log("Promise created.");

// multiple promises 
// let wada1 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("setTimeout 1 started");
//   }, 2000);
//   resolve("done");
// });

// wada1.then((result) => {
//   console.log("Promise resolved with:", result);
// });

// let output = wada1.then(() => {
//   let wada2 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       console.log("settimeout2 started")
//     },3000);
//     resolve("Wada 2 resolved");
//   });
//   return wada2;
// })


// output.then((value) => {console.log(value);
// });




// ASYNC AWAIT
// async function abcd(){
//   return "ajitesh";
// };
// console.log(abcd());
// async function utility(){
//   let biharmausam = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Delhi ka mausam garm hai");
//   },1000);
// });

// let haryanamausam = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("haryana ka mausam cool hai");
//   },5000);
// });

// let BM =await biharmausam;
// let hr = await  haryanamausam;
// return [BM,hr];

// }
// // Why? Because utility() is an async function, and all async functions return a Promise — even if they return an array internally. That Promise is not yet resolved, which is why it shows as <pending>.
// // use .then( ) method

// utility().then((result) => {
//   console.log(result); // Output: ['Delhi ka mausam garm hai', 'Haryana ka mausam cool hai']
// });
// async function main() {
//   let result = await utility();
//   console.log(result);
// }
// main();

// API FETCH
//async function utility(){
//   let content = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//   let output = await content.json();
//   console.log(output);
// }
// utility();

//post call
async function helper(){
  let option  = {
// POST request using fetch()
   // Adding method type
    method: "POST", 
    // Adding body or contents to send
    body: JSON.stringify({
        title: "ajitesh",
        body: "nice",
        userId: 118,
        weight :80,
        hwight :6.5
    }),
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
};


let content1 = await fetch('https://jsonplaceholder.typicode.com/posts',option);
let response = content1.json();
return response;}

async function utility(){
  let ans  = await helper() ;
  console.log(ans);
}
utility();
