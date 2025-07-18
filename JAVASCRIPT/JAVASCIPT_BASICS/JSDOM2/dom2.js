//  function toclick(){console.log('i have been clicked'); }

// document.addEventListener('click', toclick);

// to remove the event listener
function toclick() {
  console.log('i have been clicked');
}
document.addEventListener('click', toclick);

// to remove the event listener
document.removeEventListener('click', toclick); // here both function are same in add and remove event listener

// to remove condition are
//  1. same event type, 2. same function, 3. same target
// dispatchEvent is used to trigger an event programmatically means
// it will trigger the event as if it was clicked by the user
// const event = new Event('click');
// document.dispatchEvent(event);
// it will trigger the click event on the document
// it will call the toclick function and log 'i have been clicked' in the console
// its is now deprecated and not recommended to use


// phases of an event
// 1. capturing phase - the event is captured by the parent elements first and then it
//2. target phase - the event is triggered on the target element
//3. bubbling phase - the event bubbles up to the parent elements

// the event obkject
// the event object is passed to the event handler function

// const content = document.querySelector('#wrapper');
// content.addEventListener('click', function(event) {
//   console.log(event);
// });

// let links = document.querySelectorAll('a');
// links.forEach(function(link) {
//   link.addEventListener('click', function(event) {
//     event.preventDefault();
//     console.log('Link clicked:', link.href);
//   });
// });


// let myDiv = document.createElement('div');

// function parastatus(event){
//   console.log('i have clicked on para' + event.target.textContent);
// }

// myDiv.addEventListener('click', parastatus);// div ke upar listner add 
// for (let i = 0; i <= 10; i++) {
//   let p = document.createElement('p');
//   p.textContent = 'this is paragraph ' + (i+1);
//   myDiv.appendChild(p);
// }
// document.body.appendChild(myDiv);

let element = document.querySelector('#wrapper');
element.addEventListener('click', function(event) {
  if(event.target.nodeName === 'SPAN') {// this will check if the target of the event is a span element
    // if the target is a span element then this code will run
    console.log("span per click hua hai" + event.target.textContent);
  }
});
// here span per click krne se code chal rha at the same time para
// per click krne se v code chal rha
// but we want to run code only when span is clicked
// so we can use event.target to check if the target is span or not



