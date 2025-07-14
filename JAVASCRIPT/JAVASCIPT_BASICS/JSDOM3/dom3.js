const t1 = performance.now();
for(let i = 1;i<100;i++){
  let newelement = document.createElement("p");
  newelement.textContent = "This is a new paragraph element " + i;
  document.body.appendChild(newelement);
  }
  const t2 = performance.now();
  console.log("time taken "+(t2-t1)+" milliseconds");

// here we use div tag for performance improvement
// as it reduces the number of reflows and repaints in the browser
//reflow is the mathematical calculation of the layout of the page
//repaint is the process of painting the pixels on the screen
// repaint is faster than reflow 
  const t3 = performance.now();
  let myDiv = document.createElement("div");
  for(let i = 1;i<100;i++){
    let newElement = document.createElement("p");
    newElement.textContent ="this is para" + i;
    myDiv.appendChild(newElement);
  }
  document.body.appendChild(myDiv);
  const t4 = performance.now();
  console.log("time taken "+(t4-t3)+" milliseconds");

  // good practice is to use less reflows and repaints    
  // so we can use a single div to append all the elements
  // document fragment is a good way to do this 
  // it is a lightweight container that can hold multiple elements
  // it is not part of the DOM tree, so it does not cause reflows and repaints
  // virtual DOM is a concept that is used in frameworks like React 
  const t5 = performance.now();
  let fragment = document.createDocumentFragment();
  for(let i = 1;i<100;i++){
    let newElement = document.createElement("p");
    newElement.textContent ="this is para" + i;
    fragment.appendChild(newElement);
  }
  document.body.appendChild(fragment);
  const t6 = performance.now();
  console.log("time taken "+(t6-t5)+" milliseconds");


// the call stack keeps track of the functions that are currently being executed
// it is a data structure that stores the functions in the order they are called 
  function addPara(){
    let para = document.createElement("p");
    para.textContent = "javascript is a single threaded language";
    document.body.appendChild(para);
  }

  function addNewpara(){
    let para = document.createElement("p");
    para.textContent = "kaise ho aap sab";
    document.body.appendChild(para);
  }
  // calling the functions to add paragraphs
  addPara();
  addNewpara();
// this a type of asynchronous programming means going line by line
//1. run to completion and then go to the next line
//2.JS does not execute multiple lines/functions at the same time
// it is called event loop
// synchronous programming means executing one line at a time

// next topic 
// event loop
// it is a mechanism that allows JS to execute code asynchronously
// asynchronous programming means that the code can run in the background 
// async -> call stack -> web api -> callback queue -> event loop
// the event loop checks the call stack and the callback queue


// settimeout(function())
setTimeout(function(){
  console.log("This is executed after 2 seconds");
}, 2000);// it is not gurante that it will execute after exactly 2      seconds as that time is minimum time to wait
// this is an example of asynchronous programming