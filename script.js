// Making of Bubbles
function makeBubble() {
  var clutter = "";
  for (let i = 1; i <= 140; i++) {
    var randomNumber = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${randomNumber}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}
makeBubble();


// Making of timer for 60 seconds
let timer = 60;
let gameIsOver = false; // Add a flag to track game-over state

function runTimer() {
  const timerInterval = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerValue").textContent = timer;
    } else {
      clearInterval(timerInterval);
      gameIsOver = true; // Set the game-over flag
      document.querySelector(
        "#pbtm"
      ).innerHTML = `<div><h1>Game Over</h1>  <h1>Your Score is ${score}</h1></div>`;
    }
  }, 1000);
}
runTimer();

// Making value of hit
var hitrandomnum;
function getNewHit() {
  hitrandomnum = Math.floor(Math.random() * 10);
  document.querySelector("#hitValue").textContent = hitrandomnum;
}
getNewHit();

var score = 0;
function increaseScore() {
  score += 10;
  document.querySelector("#scoreValue").textContent = score;
}

function decreaseScore() {
  score -= 5;
  document.querySelector("#scoreValue").textContent = score;
}


// Defining the click handler function separately
function handleBubbleClick(details) {
    if (!gameIsOver) {
        var clickedElement = details.target;

        // Check if the clicked element is a bubble
        if (clickedElement.classList.contains("bubble")) {
            var clickednumber = Number(clickedElement.textContent);

            if (clickednumber === hitrandomnum) {
                increaseScore();
                makeBubble();
                getNewHit();
            } else {
                decreaseScore();
            }
        }
    }
}


document.querySelector("#pbtm").addEventListener("click", handleBubbleClick);

