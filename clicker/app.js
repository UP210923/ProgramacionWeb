
const containerClicks = document.getElementById('container-clicks');

const btnIncrement = document.querySelector('.btn-primary');
const btnDecrement = document.querySelector('.btn-secondary');
const btnReset = document.querySelector('.btn-reset');
console.log('poninas gay');
let counter = 0;

btnIncrement.onclick = function() {
  counter++;
  containerClicks.innerText = counter;
}
btnDecrement.onclick = function()  {
  counter--;
  containerClicks.innerText = counter;
}


btnReset.onclick = function(){
  counter = 0;
  containerClicks.innerText = counter
}

console.log(btnIncrement,btnDecrement,btnReset);
console.log(containerClicks);