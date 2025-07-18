const countvalue = document.getElementById('counter');

function increment (){
  // get the value from ui
  let value = parseInt(countvalue.innerText);// parese will convert innertext into int
  // update
  value = value+1;
  // set the vale
  countvalue.innerText = value;
};

function decrement() {
   // get the value from ui
  let value = parseInt(countvalue.innerText);
  // update
  value = value-1;
  // set the vale
  countvalue.innerText = value;
};
