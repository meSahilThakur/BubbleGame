// Making of Bubbles
function makeBubble() {
  var clutter = "";
  for (let i = 1; i <= 160; i++) {
    var randomNumber = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${randomNumber}</div>`;
    // console.log(randomNumber);
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}
makeBubble();


// Making of timer for 60 seconds
let timer = 60;
function runTimer() {
  const timerInterval = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerValue").textContent = timer
    //   console.log(timer);
    } else {
      clearInterval(timerInterval);
    }
  }, 1000);
}
runTimer();


// Making value of hit
function getNewHit(){
    const randomNumber = Math.floor(Math.random()*10);
    document.querySelector("#hitValue").textContent = randomNumber;
    console.log(randomNumber);
}
getNewHit();