const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
let upKey = document.getElementById("topButton");
let downKey = document.getElementById("bottomButton");
let leftKey = document.getElementById("leftButton");
let rightKey = document.getElementById("rightButton");
let scoreValue = 0;
let time = 60;
let scoreDisplay = document.getElementById("scoreDisplay");
//theme song
let themeSong = document.getElementById("theme");
themeSong.volume = 0.3;
//play sound 
let soundMode = document.getElementById("soundMode");
soundMode.addEventListener("click", () => {
  themeSong.play();
});
//switch off sound
let muteMode = document.getElementById("muteMode");
muteMode.addEventListener("click", () => {
  themeSong.pause();
});
//game play function
function playGame() {
  themeSong.pause();
  let gameSound = document.getElementById("gameSound");
  gameSound.volume = 0.1;
  gameSound.play();
  //decrement time after every second
  let timeDisplay = document.getElementById("timeDisplay");
  setInterval(() => {
    time--;
    //end the game when time is over
    if (time <= 0) {
      stopGame();
      return;
    }
    timeDisplay.innerHTML = "Time left in seconds: " + time;
  }, 1000);
  //change burger position after every 4 seconds
  setInterval(burgerChangePosition, 4000);
  drawBurger();
  drawBob();
  //buttons behavoiur
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
//canvas dimensions
let yPosition = 140;
let xPosition = 0;
let yBurger = canvas.height - 20;
let xBurger = canvas.width - 20;
//create burger character
function drawBurger() {
  let burger = document.getElementById("burger");

  context.drawImage(burger, xBurger, yBurger, 20, 20);
}
//create Bob character
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
//hit the wall behviour
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
