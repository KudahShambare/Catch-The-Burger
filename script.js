const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
let upKey = document.getElementById("topButton");
let downKey = document.getElementById("bottomButton");
let leftKey = document.getElementById("leftButton");
let rightKey = document.getElementById("rightButton");
let scoreValue = 0;
let time = 60;
let scoreDisplay = document.getElementById("scoreDisplay");
//put all songs in an array.
let songs = [
  "/Game Music/Andy Muridzo-Nhekwe (official video)NAXO films 2020.mp3",
  "Game Music/Oliver Mtukudzi - Mutserendende.mp3",
  "Game Music/Nelly - Dilemma (Official Music Video) ft. Kelly Rowland.mp3",
  "Game Music/Zimbabwe Police Band - Dambura Makomo.mp3",
  "Game Music/Rihanna - Umbrella (Orange Version) (Official Music Video) ft. JAY-Z.mp3",
  "Game Music/2._nomcebo_zikode_ft_master_kg_xola_moya_wami_mp3_78924.mp3",
  "Game Music/p-square_taste_money_testimony_mp3_78981.mp3",
  "Game Music/roki_patati_patata_feat_koffi_olomide_rayvanny_official_video_mp3_79011.mp3",
  "Game Music/the_script_hall_of_fame_ft._will.i.am_mp3_79044.mp3",
];

//theme song
let themeSong = document.getElementById("theme");
//select a random theme song
themeSong.src = songs[Math.floor(Math.random() * songs.length)];
themeSong.volume = 0.3;
themeSong.loop = true;
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
  gameSound.src = songs[Math.floor(Math.random() * songs.length)];
  gameSound.volume = 0.3;
  gameSound.loop = true;
  gameSound.play();
  //decrement time after every second
  let timeDisplay = document.getElementById("timeDisplay");
  setInterval(() => {
    time--;
    //end the game when time is over
    if (time <= 0) {
      stopGame();
      window.reload();
    }
    //end game when score is negative
    if (scoreValue < 0) {
      stopGame();
      window.reload();
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

 // alert("Gamen Over \n Score: " + scoreValue);
  location.reload();

  //return;
}

function playCharacterCollisionAudio() {
  let sound = document.getElementById("sound");
  sound.play();
}

function playWallCollisionAudio() {
  let collisionSound = document.getElementById("wallCollision");
  collisionSound.play();
}
