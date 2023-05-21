const counter = document.querySelector('.counter');
const startButton = document.querySelector('.btnStart');
const upButton = document.querySelector('.btnUp');
const downButton = document.querySelector('.btnDown');

localStorage.setItem('userTime', 3);

let userTime;

function userSetTime() {
  const time = localStorage.getItem('userTime');
  if (time) {
    userTime = time;
  } else {
    userTime = 45;
  }
}
userSetTime();

let initialTime = 4;
counter.innerHTML = initialTime;
let interval;

function timerInt() {
  startButton.classList.add('disable');
  startButton.setAttribute('disabled', '');
  upButton.classList.add('disable');
  upButton.setAttribute('disabled', '');
  downButton.classList.add('disable');
  downButton.setAttribute('disabled', '');

  interval = setInterval(timer, 1000);
}

function timer() {
  if (initialTime === 0) {
    startButton.classList.remove('disable');
    startButton.removeAttribute('disabled', '');
    upButton.classList.remove('disable');
    upButton.removeAttribute('disabled', '');
    downButton.classList.remove('disable');
    downButton.removeAttribute('disabled', '');

    clearInterval(interval);
    initialTime = userTime;
    counter.innerHTML = initialTime;
    return;
  }
  initialTime--;
  // prettier-ignore
  counter.innerHTML = initialTime;
}

function add() {
  initialTime += 1;
  userTime += 1;
  counter.innerHTML = initialTime;
}

function sub() {
  if (initialTime === 0) return;
  initialTime -= 1;
  userTime -= 1;
  counter.innerHTML = initialTime;
}

startButton.addEventListener('click', timerInt);
upButton.addEventListener('click', add);
downButton.addEventListener('click', sub);
