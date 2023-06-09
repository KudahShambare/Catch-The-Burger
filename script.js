const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
let upKey = document.getElementById("topButton");
let downKey = document.getElementById("bottomButton");
let leftKey = document.getElementById("leftButton");
let rightKey = document.getElementById("rightButton");
let scoreValue = 0;
let time = 60;
let scoreDisplay = document.getElementById("scoreDisplay");


//canvas dimensions
let yPosition = 140;
let xPosition = 0;
let yBurger = canvas.height - 20;
let xBurger = canvas.width - 20;


//put all songs in an array.
let songs = [

    "Game Music/Oliver Mtukudzi - Mutserendende.mp3",
    "Game Music/Nelly - Dilemma (Official Music Video) ft. Kelly Rowland.mp3",
    "Game Music/Rihanna - Umbrella (Orange Version) (Official Music Video) ft. JAY-Z.mp3",
    "Game Music/2._nomcebo_zikode_ft_master_kg_xola_moya_wami_mp3_78924.mp3",
    "Game Music/p-square_taste_money_testimony_mp3_78981.mp3",
    "Game Music/the_script_hall_of_fame_ft._will.i.am_mp3_79044.mp3",
    "Game Music/shine_your_light_feat._akon_mp3_640.mp3",
    "Game Music/these_streets_know_my_name_official_music_video_mp3_85775.mp3",
    "Game Music/voltz_jt_shamwari_yangu_mp3_86081.mp3",
    "Game Music/shashl_chegore_riye_matenga_na_gudo_riddim_mp3_574.mp3",
    "Game Music/seh_calaz_high_defination_produced_by_dj_fydale_heart_emotions_riddim_mp3_242.mp3",
    "Game Music/poptain_sota_official_music_video_mp3_86252.mp3",
    "Game Music/nasty_c_ft_rowlene_sma_lyrics_mp3_99.mp3",
    "Game Music/mi_casa_jika_mp3_665.mp3",
    "Game Music/master_kg_skeleton_move_feat._zanda_zakuza_official_music_video_mp3_606.mp3",
    "Game Music/holy_ten_musatinetse_mp3_86151.mp3",
    "Game Music/mary_j._blige_be_without_you_mp3_85927.mp3",
    "Game Music/holy_ten_pressure_official_video_ft._mr._candy_michael_magz_mp3_295.mp3",
    "Game Music/holy_ten_michael_magz_ucharamba_uchipisa_ft._poptain_mp3_86184.mp3",
    "Game Music/malaika_destiny_mp3_490.mp3",
    "Game Music/lil_durk_all_my_life_ft._j._cole_official_video_mp3_85703.mp3",
    "Game Music/5._voltz_jt_mangwana_lifeofmuvhimialbum_mp3_25.mp3",
    "Game Music/admire_kasenga_ngosimbi_crew_pamuchato_wa_tobias_mp3_199.mp3",
    "Game Music/aniseti_butati_wataulizana_official_video_mp3_135.mp3",
    "Game Music/big_nuz_feat._dj_yamza_ngeke_official_music_video_mp3_86038.mp3",
    "Game Music/bob_marley_jammin_mp3_86382.mp3",
    "Game Music/french_montana_unforgettable_ft._swae_lee_mp3_333.mp3",
    "Game Music/dbn_gogo_x_uncle_waffles_jagermeister_ft._tnk_musiq_mellow_sleazy_mp3_85990.mp3",
    "Game Music/davido_coolest_kid_in_africa_official_video_ft._nasty_c_mp3_686.mp3",
    "Game Music/boom_box_riddim_version_instrumental_notnice_records_mp3_2002.mp3",
    "Game Music/holy_ten_wakatuka_amai_mp3_1964.mp3",

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


//Bob Movement

const moveLeft = () => {
    clearCanvas();
    xPosition -= 20;
    movements();
}

const moveRight = () => {
    clearCanvas();
    xPosition += 20;
    movements();
}

const moveTop = () => {
    clearCanvas();
    yPosition -= 20;
    movements();
}

const moveDown = () => {
    clearCanvas();
    yPosition += 20;
    movements();
}




//game play function
function playGame() {
    themeSong.pause();
    let gameSound = document.getElementById("gameSound");
    gameSound.src = songs[Math.floor(Math.random() * songs.length)];
    gameSound.volume = 0.3;
    gameSound.loop = true;
    gameSound.play();

    //decrement time after every second
    let clock = document.getElementById("clock");
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
        clock.innerHTML = "My time: " + time + "s";
    }, 1000);

    //change burger position after every 4 seconds
    setInterval(burgerChangePosition, 4000);
    drawBurger();
    drawBob();


    //buttons behavoiur
    upKey.addEventListener("click", moveTop);
    downKey.addEventListener("click", moveDown);
    leftKey.addEventListener("click", moveLeft);
    rightKey.addEventListener("click", moveRight);

}
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

}

function playCharacterCollisionAudio() {
    let sound = document.getElementById("sound");
    sound.play();
}

function playWallCollisionAudio() {
    let collisionSound = document.getElementById("wallCollision");
    collisionSound.play();
}


//keyboard events

window.addEventListener("keydown", (e) => {
    if (e.which == 37) {
        moveLeft();
    }
    if (e.which == 38) {
        moveTop();

    }
    if (e.which == 39) {
        moveRight();
    }
    if (e.which == 40) {
        moveDown();
    }

})