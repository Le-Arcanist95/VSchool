const startBtn = document.getElementById('start')
const timerBtn = document.getElementById('timer-button');
const resetBtn = document.getElementById('reset-button');
const clickCount = document.getElementById('click-count');
const clickBtn = document.getElementById("click-button");
let timer
let timeLeft = 15;
let isTimed = false;

clickBtn.disabled = !isTimed;

timerBtn.addEventListener("click", startTimer)
clickBtn.addEventListener("click", clickIncrement);
resetBtn.addEventListener("click", reset)

function clickIncrement() {
  if (localStorage.getItem("clickCounter") === null) {
    localStorage.setItem("clickCounter", "0");
  };
  let count = parseInt(localStorage.getItem("clickCounter"));
  let newCount = count + 1;
  localStorage.setItem("clickCounter", newCount);
  clickCount.innerHTML = newCount; 
}

function startTimer() {
    isTimed = true;
    if(timeLeft === 0){
        timerBtn.textContent = "Start";
        clickBtn.disabled = true;
        timerBtn.disabled = true;
        isTimed = false;
    } else if (timeLeft > 0 && isTimed) {
        timerBtn.textContent = timeLeft + " seconds remaining";
        clickBtn.disabled = false;
        timeLeft--;
        timer = setTimeout(startTimer, 1000);
    }
}
function reset() {
    timeLeft = 15;
    isTimed = false;
    clearTimeout(timer);
    clickBtn.disabled = true;
    timerBtn.disabled = false;
    timerBtn.textContent = "Start"
    localStorage.setItem("clickCounter", "0");
    clickCount.textContent = "0";
}