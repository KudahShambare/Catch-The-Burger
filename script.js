/*HTML Elements*/
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const upKey = document.getElementById("topButton");
const downKey = document.getElementById("bottomButton");
const leftKey = document.getElementById("leftButton");
const rightKey = document.getElementById("rightButton");
const stop = document.getElementById("stop");
const scoreDisplay = document.getElementById("scoreDisplay");
const themeSong = document.getElementById("theme");
const gameSound = document.getElementById("gameSound");
const clock = document.getElementById("clock");
const score = document.getElementById("scores");
const soundMode = document.getElementById("soundMode");
const muteMode = document.getElementById("muteMode");
const burger = document.getElementById("burger");
const bob = document.getElementById("bob");
const eatSound = document.getElementById("eat-sound");
const collisionSound = document.getElementById("wallCollision");
const start = document.getElementById("start");
const main = document.getElementById("game-page");
const startAndStop = document.getElementById("startAndStop");
const list = document.getElementById("list");

/*Initial Values*/
let scoreValue = 0; //created a bug here # score value must be 0
let time = 60;
let userName = "NoName";


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
    "Game Music/the_script_hall_of_fame_ft._will.i.am_mp3_79044.mp3",
    "Game Music/shine_your_light_feat._akon_mp3_640.mp3",
    "Game Music/these_streets_know_my_name_official_music_video_mp3_85775.mp3",
    "Game Music/voltz_jt_shamwari_yangu_mp3_86081.mp3",
    "Game Music/shashl_chegore_riye_matenga_na_gudo_riddim_mp3_574.mp3",
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
    "Game Music/admire_kasenga_ngosimbi_crew_pamuchato_wa_tobias_mp3_199.mp3",
    "Game Music/big_nuz_feat._dj_yamza_ngeke_official_music_video_mp3_86038.mp3",
    "Game Music/bob_marley_jammin_mp3_86382.mp3",
    "Game Music/french_montana_unforgettable_ft._swae_lee_mp3_333.mp3",
    "Game Music/dbn_gogo_x_uncle_waffles_jagermeister_ft._tnk_musiq_mellow_sleazy_mp3_85990.mp3",
    "Game Music/davido_coolest_kid_in_africa_official_video_ft._nasty_c_mp3_686.mp3",
    "Game Music/holy_ten_wakatuka_amai_mp3_1964.mp3",

];

//change song when it ends
const changeSong = (sound) => {
    sound.addEventListener('ended', () => {
        sound.src = songs[Math.floor(Math.random() * songs.length)];
        sound.play();
    });
};

//select a random theme song
themeSong.src = songs[Math.floor(Math.random() * songs.length)];
themeSong.volume = 0.3;
changeSong(themeSong);

//play themesong on load -- causing a 2 song playing bug
/*
window.onload= ()=>{

    document.body.addEventListener("mousemove", function () {

    themeSong.play();
    changeSong(themeSong);
})
    


}
*/
//play sound

/*
soundMode.addEventListener("click", () => {
    themeSong.play();
});

//switch off sound
muteMode.addEventListener("click", () => {
    themeSong.pause();

});
*/

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
//create burger character
const drawBurger = () => {

        context.drawImage(burger, xBurger, yBurger, 20, 20);
    }
    //create Bob character
const drawBob = () => {
    context.drawImage(bob, xPosition, yPosition, 20, 20);
}

/*Button Click Behaviour*/
const movements = () => {
    if (scoreValue <= -10 || time < 0) {
        stopGame();
    }
    characterCollision();
    wallCollision();
    drawBob();
    drawBurger();
}

const clearCanvas = () => {
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
}

const characterCollision = () => {
        score.innerHTML = "Score: " + scoreValue;
        if (xPosition == xBurger && yPosition == yBurger) {
            playCharacterCollisionAudio();
            scoreValue += 10;
            time += 10;
            burgerChangePosition();
        }
    }
    //hit the wall behviour
const wallCollision = () => {
    if (
        xPosition < 0 ||
        xPosition > canvas.width - 20 ||
        yPosition < 0 ||
        yPosition > canvas.height - 20
    ) {
        playWallCollisionAudio();
        scoreValue -= 50;
        score.innerHTML = "Score: " + scoreValue;
    }
}


/*Play the sound when bob eats the burger*/

const playCharacterCollisionAudio = () => {
    eatSound.play();
}

/*Play the sound when bob hits the wall*/
const playWallCollisionAudio = () => {
    collisionSound.play();
}

/*Burger ChnagePosition*/

const burgerChangePosition = () => {
    clearCanvas();
    drawBurger();
    let values = [
        0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280,
    ];
    xBurger = values[Math.floor(Math.random() * values.length)];
    yBurger = values[Math.floor(Math.random() * values.length)];
    drawBurger();
    drawBob();
}

/*Start Game Button Behaviour*/
start.addEventListener("click", (e) => {
  //  e.preventDefault();
    userName = prompt("Username:")
    playGame();
});

/*Stop Button Behaviour*/
stop.addEventListener("click", (e) => {
  //  e.preventDefault();
    stopGame();

});


/**************************************************************************************/
let hasRun = false; //flag variable
const stopGame = () => {

    if(!hasRun){
  //stop music
    gameSound.pause();
    //clear canvas
    clearCanvas();

      //send score to database if it is greater than 100 -- now done in backend
/*
    
*/
 /*Save userdata into a cookie*/
    if(userName== "" || userName == null){
        userName = "Stranger101"
    }

    localStorage.setItem("name",userName);
    localStorage.setItem("score",scoreValue);

    fetch("https://burger-world.beast-o.com/leaderboard", {
         "method": "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: userName,
            score: scoreValue
        })
    }).then((resp) => {
        return resp;
    }).catch(error=>{
        console.log(error)
    })
hasRun=true;

setTimeout(()=>{
    location.assign("./leaderboard.html");

},1000)
//stopGame();


    }
else{
  console.log("done");

}
  
 
}



/*********************************************************************************************************/
//game play function
const playGame = () => {

        themeSong.pause();
        gameSound.src = songs[Math.floor(Math.random() * songs.length)];
        gameSound.volume = 0.3;
        gameSound.play();
        changeSong(gameSound);


        let timeToChangeBurgerPosition = 3000;

        //decrement time after every second
        setInterval(() => {

//game levels

        //make game harder if the player has more points or more time 
        if (time > 100 || scoreValue > 100) {
                    timeToChangeBurgerPosition = 1000;
        }
if(time > 200){
    timeToChangeBurgerPosition = 500;
    console.log("supahard")
}

//end of levels

            time--;
            //end the game when time is over
            if (time < 0) {
                stopGame();

            }
            //end game when score is negative
            if (scoreValue < 0) {
                time=0;

            }


            clock.innerHTML = "Time: " + time + "s";
        }, 1000);



        //change burger position after every 4 seconds
        setInterval(burgerChangePosition, timeToChangeBurgerPosition);
        drawBurger();
        drawBob();


        //buttons behavoiur
        upKey.addEventListener("click", moveTop);
        downKey.addEventListener("click", moveDown);
        leftKey.addEventListener("click", moveLeft);
        rightKey.addEventListener("click", moveRight);


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

        

    }
    /****************************************************************************************************/