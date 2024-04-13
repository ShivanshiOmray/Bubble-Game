var score = 0;
var hit;

function setBubble() {
  document.querySelector("#btm").innerHTML = ``;
  for (var i = 1; i < 217; i++) {
    var rn = Math.floor(Math.random() * 10);
    document.querySelector("#btm").innerHTML += `<div id="element">${rn}</div>`;
  }
}

function setTimer() {
  var timer = 60;
  setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer-box").textContent = timer;
    } else {
      document.querySelector(
        "#btm"
      ).innerHTML = `<h1>Game Over <br> Your Score is <span>${score}</span></h1>`;
    }
  }, 1000);
}

function setHit() {
  hit = Math.floor(Math.random() * 10);
  document.querySelector("#hit-box").textContent = hit;
}

function setScore() {
  score = score + 10;
  document.querySelector("#score-box").textContent = score;
}

document.querySelector("#btm").addEventListener("click", function (dets) {
  if (Number(dets.target.textContent) === hit) {
    setScore();
    setHit();
    setBubble();
  }
});

setBubble();
setHit();
setTimer();
