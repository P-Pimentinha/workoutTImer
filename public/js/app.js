const counter = document.querySelector('.counter');
const startButton = document.querySelector('.btnStart');
const upButton = document.querySelector('.btnUp');
const downButton = document.querySelector('.btnDown');

startButton.addEventListener('click', timerInt);
upButton.addEventListener('click', add);
downButton.addEventListener('click', sub);

let initialTime = 45;
counter.innerHTML = initialTime;

function timerInt() {
  startButton.setAttribute('disabled', '');
  setInterval(timer, 1000);
}

function timer() {
  if (initialTime === 0) return location.reload();
  initialTime--;
  // prettier-ignore
  return counter.innerHTML = initialTime;
}

function add() {
  initialTime += 1;
  counter.innerHTML = initialTime;
}

function sub() {
  if (initialTime === 0) return;
  initialTime -= 1;
  counter.innerHTML = initialTime;
}
