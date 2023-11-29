var timeCount = 60;
var hitValue = 0;
// to create bubble
function makeBubble() {
  var clutter = "";
  for (i = 1; i <= 140; i++) {
    var randomNumber = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${randomNumber}</div>`;
  }
  document.querySelector("#panel-bottom").innerHTML = clutter;
}
makeBubble();

//to run timer
function runTimer() {
  var timerVariable = setInterval(function () {
    if (timeCount > 0) {
      timeCount--;
      document.querySelector("#time-box").textContent = timeCount;
    } else {
      clearInterval(timerVariable);
      document.querySelector("#panel-bottom").innerHTML = `<h1>GAME OVER</h1>`;
      document.querySelector(
        "#panel-bottom"
      ).innerHTML += `<h1>Final Score: ${scoreValue}</h1>`;
    }
  }, 1000);
}
runTimer();

// function to generate new hit value
function getNewHit() {
  hitValue = Math.floor(Math.random() * 10);
  document.querySelector("#hit-value").textContent = hitValue;
}
getNewHit();

// function to generate score value
var scoreValue = 0;
function increaseScore() {
  scoreValue += 10;
  document.querySelector("#score-value").textContent = scoreValue;
}

// to find out which element got clicked
document.querySelector("#panel-bottom").addEventListener("click", function (e) {
  var clickedNumber = Number(e.target.textContent);
  if (clickedNumber === hitValue) {
    increaseScore();
    makeBubble();
    getNewHit();
  } else {
    document.querySelector("#panel-bottom").innerHTML = `<h1>GAME OVER</h1>`;
    document.querySelector(
      "#panel-bottom"
    ).innerHTML += `<h1>Final Score: ${scoreValue}</h1>`;
  }
});
