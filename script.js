const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
let upKey = document.getElementById("topButton");
let downKey = document.getElementById("bottomButton");
let leftKey = document.getElementById("leftButton");
let rightKey = document.getElementById("rightButton");
let scoreValue = 0;
let time = 60;
let scoreDisplay = document.getElementById("scoreDisplay");
let themeSong = document.getElementById("theme");
themeSong.volume = 0.3;
let soundMode = document.getElementById("soundMode");
soundMode.addEventListener("click", () => {
  themeSong.play();
});
let muteMode = document.getElementById("muteMode");
muteMode.addEventListener("click", () => {
  themeSong.pause();
});

function playGame() {
  themeSong.pause();
  let gameSound = document.getElementById("gameSound");
  gameSound.volume = 0.1;
  gameSound.play();
  let timeDisplay = document.getElementById("timeDisplay");
  setInterval(() => {
    time--;
    if (time <= 0) {
      stopGame();
      return;
    }
    timeDisplay.innerHTML = "Time left in seconds: " + time;
  }, 1000);
  setInterval(burgerChangePosition, 4000);
  drawBurger();
  drawBob();
  upKey.addEventListener("click", () => {
    clearCanvas();
    yPosition -= 20;
    movements();
  });
  downKey.addEventListener("click", () => {
    clearCanvas();
    yPosition += 20;
    movements();
  });
  leftKey.addEventListener("click", () => {
    clearCanvas();
    xPosition -= 20;
    movements();
  });
  rightKey.addEventListener("click", () => {
    clearCanvas();
    xPosition += 20;
    movements();
  });
}

let yPosition = 140;
let xPosition = 0;
let yBurger = canvas.height - 20;
let xBurger = canvas.width - 20;

function drawBurger() {
  let burger = document.getElementById("burger");

  context.drawImage(burger, xBurger, yBurger, 20, 20);
}
function drawBob() {
  let bob = document.getElementById("bob");
  context.drawImage(bob, xPosition, yPosition, 20, 20);
}

/*Button Click Behaviour*/

function movements() {
  if (scoreValue < 0 || time < 0) {
    stopGame();
  }
  characterCollision();
  wallCollision();
  drawBob();
  drawBurger();
}
function clearCanvas() {
  context.fillStyle = "white";
  context.fillRect(0, 0, canvas.width, canvas.height);
  drawBurger();
}
function characterCollision() {
  scoreDisplay.innerHTML = "Score: " + scoreValue;
  if (xPosition == xBurger && yPosition == yBurger) {
    playCharacterCollisionAudio();
    scoreValue += 10;
    time += 10;
    burgerChangePosition();
  }
}
function wallCollision() {
  if (
    xPosition < 0 ||
    xPosition > canvas.width - 20 ||
    yPosition < 0 ||
    yPosition > canvas.height - 20
  ) {
    playWallCollisionAudio();
    scoreValue -= 50;
    scoreDisplay.innerHTML = "Score: " + scoreValue;
  }
}
function burgerChangePosition() {
  clearCanvas();
  let values = [
    0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280,
  ];
  xBurger = values[Math.floor(Math.random() * values.length)];
  yBurger = values[Math.floor(Math.random() * values.length)];
  drawBurger();
  drawBob();
}

const start = document.getElementById("start");
start.addEventListener("click", () => {
  playGame();
});
const stop = document.getElementById("stop");
stop.addEventListener("click", () => {
  stopGame();
});

function stopGame() {
  alert("Gamen Over \n Score: " + scoreValue);
  location.reload();
  return;
}

function playCharacterCollisionAudio() {
  let sound = document.getElementById("sound");
  sound.play();
}

function playWallCollisionAudio() {
  let collisionSound = document.getElementById("wallCollision");
  collisionSound.play();
}
