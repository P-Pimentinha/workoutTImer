const counter = document.querySelector('.counter');
const startButton = document.querySelector('.btnStart');

let initialTime = 45;

startButton.addEventListener('click', timerInt);

function timerInt() {
  if (initialTime === 0) {
    initialTime = 45;
  } else {
    setInterval(timer, 1000);
  }
}

function timer() {
  if (initialTime === 0) return startButton.removeAttribute('disabled', '');
  initialTime--;
  startButton.setAttribute('disabled', '');
  // prettier-ignore
  return counter.innerHTML = initialTime;
}
