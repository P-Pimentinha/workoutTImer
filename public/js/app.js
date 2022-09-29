const counter = document.querySelector('.counter');
const startButton = document.querySelector('.btnStart');

let initialTime = 45;

console.log(location);

startButton.addEventListener('click', timerInt);

function timerInt() {
  if (initialTime === 0) {
    initialTime = 45;
  } else {
    startButton.setAttribute('disabled', '');
    setInterval(timer, 1000);
  }
}

function timer() {
  if (initialTime === 0) return location.reload();
  initialTime--;
  // prettier-ignore
  return counter.innerHTML = initialTime;
}

location.reload;
