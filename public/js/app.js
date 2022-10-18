const counter = document.querySelector('.counter');
const startButton = document.querySelector('.btnStart');

let initialTime = 45;
counter.innerHTML = initialTime;
startButton.addEventListener('click', timerInt);

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
