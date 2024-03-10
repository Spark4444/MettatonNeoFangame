//Varaibles initilization
let frisk = document.querySelector(".frisk");
let start = document.querySelector(".startingAnimation");
let inGameScreen = document.querySelector(".inGameScreen");
let heart = document.querySelector(".heart");
let buttons = document.querySelectorAll(".actionButton");
let img = document.querySelectorAll(".buttonImg");
let playerMovementBox = document.querySelector(".playerMovementBox");
let chatBox = document.querySelector(".chatBox");
let textBox = document.querySelector(".textBox");
let triangle = document.querySelector(".triangle");
let heartImg = document.querySelectorAll(".heartImg");  
let play = document.querySelector(".play");
let startingMenu = document.querySelector(".startingMenu");
let fullScreenBtn = document.querySelector(".fullScreenButton");
let sound = document.querySelector(".sound");
let html = document.querySelector("html");
let hp = document.querySelector(".playersHPText");
let damageDealt = document.querySelector(".damageDealt");
let attackingSection = document.querySelector(".attackingSection");
let attackingGIF = document.querySelector(".attackingGIF");
let mettatonsHP = document.querySelector(".mettatonsHP");
let mettatonGIF = document.querySelector(".mettatonGIF");
let battleSection = document.querySelector(".battleSection");
let lv = document.querySelector(".lv");
let name = document.querySelector(".name");
let volume = document.querySelector(".volume");
let playersHPString = document.querySelector(".playersHPText").innerHTML[0] + document.querySelector(".playersHPText").innerHTML[1];
let playersHP = document.querySelector(".playersHP");
let foodList = ["Pie","I. Noodles","Steak","L. Hero","L. Hero","L. Hero","L. Hero","L. Hero"];
let health = ["72","72","60","40","40","40","40","40"];
let foodUsed = [];
let text = "";
let food = "";
let hpWidth = "100%";
let stage = false;
let attack = false;
let num = false;
let disableX = false;
let position = false;
let positionBefore = false;
let started = false;
let playerFighting = false;
let attackNumber = false;
let animation = true;
let fullScreen = false;
let keythrottle = false;
let MettatonHP = 360;
let secondPosition = 0;
let HPRecovered = 0;
let secondNumber = 0;
let letterId = 0;
let deathDialogue = 0;
let restarts = 0;
let damageTaken = 0;
let damageTakenTimes = 0;
let hits = 0;
let criticalHitsGiven = 0;
let misses = 0;
let timeToComplete = 0;
let turnsToComplete = 0;
let attackLine;
let finished;
setTimeout(() => {
  finished = get(1);
}, 10);
let attackLineTimeout;
let timeToCompleteInterval;
let shakeElement;
let firstInventoryRow;
let secondInventoryRow;
let secondColumn;
let thirdColumn;

//Enables fullscreen
function enableFullScreen(){
  if(fullScreen){
    fullScreen = false;
    fullScreenBtn.src = "img/fullscreen.png";
    document.exitFullscreen();
  }
  else{
    fullScreen = true;
    fullScreenBtn.src = "img/exit fullscreen.png";
    document.documentElement.requestFullscreen();
  }
}

// f11 keylistener to enable fullscreen
document.addEventListener('keyup', function(e) {
  const key = e.keyCode || e.which;
  switch(key){
    case 122:
      e.preventDefault();
      enableFullScreen();
      break;
    case 27:
      this.location.reload()
      break;
  }
});

// Sets volume of the music to 20%
setTimeout(() => {
  audio.pauseAll();
}, 100);

// Sets the volume in percantages
document.querySelector("#rangeValue").innerHTML = `${volume.value}%`;

// Width for hp bar
playersHP.style.width = "100%";

// Plays starting music
startingMenu.addEventListener('mousedown', () =>{
  if(started !== true){
  audio.play(2);
  }
});

// Mousedown listner to play sound when volume bar is changed
volume.addEventListener("mousedown", () => {
  audio.reset(1);
  audio.play(1);
});

// Update the volume when the mouse is released from the slider
volume.addEventListener("mouseup", () => {
  audio.volumeAll(volume.value);
});

//Event listener for the play button
play.addEventListener('click', () => {

  // Pause audio when user leaves the tab
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      audio.pause(0);
      audio.pause(2);
      audio.pause(9);
      audio.pause(12);
    } else {
      audio.play(0);
      audio.play(2);
      audio.play(9);
      audio.play(12);
    }
  });

  // Play audio when user returns to the tab or unblocks the browser
  window.addEventListener('focus', () => {
    audio.play(0);
    audio.play(2);
    audio.play(9);
    audio.play(12);
  });

  if(started !== true){
    audio.mute(2);
    audio.reset(1);
    audio.play(1);
    html.classList.add("cursorNone");
    frisk.classList.remove("hidden");
    startingMenu.style.opacity = "0";
    startingMenu.style.animation = "none";

    setTimeout(function() {
      startingMenu.classList.add("hidden");
    },1000);

    started = true;

// Starting animation for frisk
function startingAnimation(){
  if(started === true){
    //Animation is present
    if(animation == true){
        setTimeout(function() {
          appear(`* Mettaton NEO blocks the way!`);
          stage = false;
        },1500);
    
        setTimeout(function() {
          heart.classList.remove("hidden");
          heart.style.top = `${window.innerWidth*0.0303+window.innerHeight*0.75}px`
          audio.play(4);
          frisk.classList.add("hidden");
          start.classList.add("black");
    
          setTimeout(function() {
            inGameScreen.classList.remove("hidden");
            start.classList.add("hidden");
            heart.classList.add("move");
            heart.style.top = window.innerHeight/2 - 0.25 * window.innerWidth + window.innerWidth * 0.4615 + "px";
          }, 200);
    
          setTimeout(function() {
            audio.unmute(0);
            audio.reset(0);
            audio.play(0);
          }, 1000);
        }, 2000); 
    
        setTimeout(function(){
          play.innerHTML = "RESTART";
          play.style.width = "38%";
          buttons[0].classList.add('yellow');
          heart.classList.add("hidden");
          audio.play(7);
          img[0].src = "img/heart.png";
          num = 0;
        },2600);
      }
      //Animation is skipped
      else{
        setTimeout(function() {
          appear("* Mettaton NEO blocks the way!");
        },10);
    
        start.classList.add("hidden");
        inGameScreen.classList.remove("hidden");
        img[0].src = "img/heart.png";
        buttons[0].classList.add('yellow');
        num = 0;
        stage = false;
    
        setTimeout(function(){
          audio.unmute(0);
          audio.reset(0);
          audio.play(0);
        },10);
      }
    }
  }
}

startingAnimation();
timeToCompleteInterval = setInterval(() =>{
  timeToComplete++;
}, 1000);

});

//All functions initialization

//Function to display the first menu
function display(){
  if(secondNumber == 0){
    img[secondNumber].src = "img/nothing.png"
    text = `<div class='attackingText'><img class= 'smallerHeart' src='img/heart.png'><div class="shakeElement" class="WidthN"> * Mettaton NEO </div> <div class='mettatonsHP2'><div class='mettatonsHP' style='width:${hpWidth};'></div></div></div>`;
    typeWriterInstant();
  }
  if(secondNumber == 1){
    img[secondNumber].src = "img/nothing.png"
    text = `<div class="flex"><img class= 'smallerHeart' src='img/heart.png'><div class="shakeElement"> * Mettaton NEO</div></div>`;
    typeWriterInstant();
  }
  if(secondNumber == 2){
    img[secondNumber].src = "img/nothing.png"
    position = 0;
    positionBefore = 0;
    text = `<div class="invetory">${foodList[0] !== undefined ? "<div class='left-element'><img class='heartImg smaller_img_heart' src='img/nothing.png'><div class='shakeElement'> * " + foodList[0] + "</div></div>" : `<div class="nothing"></div>`}${foodList[1] !== undefined ? "<div class='right-element'><img class='heartImg' src='img/nothing.png'><div class='shakeElement'> * " + foodList[1] + "</div></div>" : `<div class="nothing"></div>`}
    ${foodList[2] !== undefined ? "<div class='left-element'><img class='heartImg smaller_img_heart' src='img/nothing.png'><div class='shakeElement'> * " + foodList[2] + "</div></div>" : `<div class="nothing"></div>`}${foodList[3] !== undefined ? "<div class='right-element'><img class='heartImg' src='img/nothing.png'><div class='shakeElement'> * " + foodList[3] + "</div></div>" : `<div class="nothing"></div>`}
   <div class="nothing"></div><div class="right-element-page" class="shakeElement">PAGE 1</div></div>`;
    typeWriterInstant();
    imgH();
    heartImg[0].src = "img/heart.png"
  }
  if(secondNumber == 3){
    img[secondNumber].src = "img/nothing.png"
    text = `<div class="flex"><img class= 'smallerHeart' src='img/heart.png'><div class="shakeElement"> * Spare</div></div>`;
    typeWriterInstant();
  }
}

//Function to display the second menu
function display2(){
  if(secondNumber == 0){
    disableX = false;
    stage = false;
    num = false;
    text = `<div class="line_attack" alt="" style=""></div>`;
    setTimeout(() => {
      attackLine = document.querySelector(".line_attack"); 
      attack = 0;
    },10);
    typeWriterInstant();
    attackFunction();
  }
  if(secondNumber == 1){
    text = `<div class="flex"><img class= 'smallerHeart' src='img/heart.png'><div class="shakeElement"> * Check</div></div>`;
    typeWriterInstant();
  }
  if(secondNumber == 2){
    audio.play(15);
    disableX = false;
    food = foodList[position];
    HPRecovered = health[position];
    foodUsed.push(foodList.splice(position, 1));
    health.splice(position, 1);

    if(food == "Pie"){
      text = `* You ate the ${food}.`
      secondColumn = `* Your HP was maxed out!`;
      thirdColumn = ``;
    }
    else if(food == "Steak"){
      text = `* You ate the ${food}.`          
      secondColumn = `* You recovered ${HPRecovered} HP!`;
      thirdColumn = ``;
    }
    else if(food == "I. Noodles"){
      text = `* You ate the Instant Noodles.`
      secondColumn = `* Your HP was maxed out!`;
      thirdColumn = ``;
    }
    else if(food == "L. Hero"){
      text = `* You eat the Legendary Hero.`;
      secondColumn = `* You recovered ${HPRecovered} HP!`;
      thirdColumn = ``;
    }
    playersHPString = document.querySelector(".playersHPText").innerHTML[0] + document.querySelector(".playersHPText").innerHTML[1];
    recoverHP();
    typeWriterArr();
    position = false;
  }
  if(secondNumber == 3){
    disableX = false;
    disappear();
  }
}

//Function to display the third menu
function display3(){
  if(secondNumber == 0){
    //continue
  }
  if(secondNumber == 1){
    disableX = false;
    text = `* METTATON NEO - 90 ATK 9 DEF`;
    secondColumn = `* Dr. Alphys's greatest invention.`
    thirdColumn = "";
    typeWriterArr();
  }
  if(secondNumber == 2){
    num = false;
    stage = false;
    disappear();
  if(secondNumber == 3){
  }
}
}

//Function to display the fourth menu
function display4(){
  if(secondNumber == 0){
  }
  if(secondNumber == 1){
    num = false;
    stage = false;
    disappear();
  }
  if(secondNumber == 2){
  }
  if(secondNumber == 3){
  }
}

//Transition from menu into an attack
function disappear(){
  stage = false;
  num = false;
  text = "";
  typeWriterInstant();
  playerMovementBox.classList.add("cube")
  setTimeout(function(){
    buttons[secondNumber].classList.remove('yellow');
    img[secondNumber].src = "";
    if(secondNumber == 0){
      img[0].src = "img/fight.png";
    }
    if(secondNumber == 1){
      img[1].src = "img/act.png";
    }
    if(secondNumber == 2){
      img[2].src = "img/item.png";
    }
    if(secondNumber == 3){
      img[3].src = "img/mercy.png";
    } 
    playerMovementBox.style.display = "";
    playerFighting = true;
    if(MettatonHP > 0){
      chat_box();
    }
    else{
      mettatonGIF.classList.add("mettaton_gif_left");
      triangle.classList.add("triangle_left");
      textBox.classList.add("chat_box_left");
      audio.mute(0);
      setTimeout(() => {
      deathMtt();
      document.addEventListener('keyup', e => {
        const key = e.keyCode || e.which;
        switch (key) {
          case 13: // Enter key
          case 90: // Z key
          case 122: // z key
          deathMtt();
          break;
          default:
          return;
        }
      });      
    }, 1000);
    }
  },1000);
}

//text menu appears
function appear(text1){
  projectile.innerHTML = ``;
  mettatonGIF.style.opacity = "1";
  playerFighting = false;
  num = 0;
  text = "";
  typeWriterInstant();
  buttonsMovement();
  playerMovementBox.classList.remove("hidden");
  setTimeout(function(){
    playerMovementBox.classList.remove("cube");
  },100);
  
  setTimeout(function(){
    text = text1;
    typeWriter();
    stage = 0;
  },1000 + 100);
}

//img heart initilization
function imgH(){
  heartImg = document.querySelectorAll(".heartImg");  
  return;
}

//Player attacking mettaton
function attackFunction(){
  setTimeout(() => {
    attackLine.classList.add("move_attack");
    playerMovementBox.classList.add("text_bc_im");
    attackLineTimeout = setTimeout(() => {
      clearInterval(HP_show);
      attack = false;
      damageDealt.innerHTML = "MISS";
      misses++;
      audio.play(5);
      attackingSection.style.height = (window.innerHeight - 0.5 * window.innerWidth)/2 + (0.5 * window.innerWidth) * 0.556+"px"
      attackingSection.classList.remove("hidden");
      attackLine.classList.remove("move_attack");
      attackLine.classList.add("hidden");
      attackingGIF.src = "img/attack.gif";
      setTimeout(() => {
        attackLine.classList.remove("appear_hide");
        attackLine.classList.add("hidden");
        attackingSection.classList.add("hidden");
        attackingGIF.src = "";
        playerMovementBox.classList.remove("text_bc_im");
        disappear();
      }, 980);
    }, 1201);
  }, 11);
}

//HP recovering
function recoverHP(){
  if(parseInt(playersHPString) + parseInt(HPRecovered) < 71 && parseInt(playersHPString) + parseInt(HPRecovered) > 0){
  playersHPString = parseInt(playersHPString) + parseInt(HPRecovered);
  }
  else if(parseInt(playersHPString) + parseInt(HPRecovered) >= 72){
  playersHPString = 72;
  }
  if(playersHPString < 72){
    hp.innerHTML = `${playersHPString}/72`;
    playersHP.style.width = `${playersHPString/(72/100)}%`;
  }
  if(playersHPString > 72 && playersHPString == 72){
    hp.innerHTML = `72/72`;
    playersHP.style.width = `100%`;
  }
  showHP();
}

//Updates hp and checks if game is over
function showHP(){
  hp.innerHTML = `${playersHPString}/72`;
  playersHP.style.width = `${playersHPString/(72/100)}%`;
  if(playersHPString < 0){
    busy = false;
    hp_text = false;
    food_text = false;
    audio.play(3);
    audio.pause(12);
    top1 = 19.3;
    top2 = 19.3;
    left1 = 50;
    left2 = 50;
    projectile.innerHTML == "";
    mettatonGIF.style.filter = "";
    battleSection.style.opacity = "1";
    name.style.opacity = "1";
    lv.style.opacity = "1";
    mettatonGIF.style.opacity = "1";
    audio.unmute(2);
    number = 1;
    deathDialogue = 0;
    turnsToComplete = 0;
    hits = 0;
    timeToComplete = 0;
    damageTaken = 0;
    damageTakenTimes = 0;
    criticalHitsGiven = 0;
    misses = 0;
    foodUsed = [];
    restarts++;
    audio.reset(2);
    audio.mute(0);
    clearInterval(intervalId);
    clearInterval(intervalId2);
    clearInterval(moveHeartI);
    clearInterval(HP_show);
    clearInterval(ten_secs);
    clearInterval(lightning);
    clearInterval(laser_time);
    clearInterval(hand_time);
    clearInterval(head_time);
    clearInterval(dash_leg);
    clearInterval(yellow_heartMove);
    clearInterval(bomb_interval);
    clearInterval(wings_rockets_inter);
    clearInterval(timeToCompleteInterval);
    foodList = ["Pie","I. Noodles","Steak","L. Hero","L. Hero","L. Hero","L. Hero","L. Hero"];
    health = ["72","72","60","40","40","40","40","40"];
    MettatonHP = 360;
    one = 0;
    playersHPString = "72";
    hp.innerHTML = `72/72`;
    playersHP.style.width = `100%`;
    mettatonsHP.style.width = `${MettatonHP/(360/100)}%`;
    hpWidth = `${MettatonHP/(360/100)}%`;
    animation = false;
    attackNumber = false;
    stage = false;
    num = false;
    html.classList.remove("cursorNone");
    inGameScreen.classList.add("hidden");
    startingMenu.classList.remove("hidden");
    startingMenu.style.opacity = "";
    startingMenu.style.animation = "";
    startingMenu.style.opacity = "0";
    setTimeout(function(){
      startingMenu.style.opacity = "";
    },10)
    started = false;
  }
}


//Movement between buttons
function buttonsMovement(){
  secondNumber = num;
  if(secondNumber > 3){
    secondNumber = 0;
  }
  if(secondNumber < 0){
    secondNumber = 3;
  }
  if(num > 3){
    num = 0;
  }
  if(num < 0){
    num = 3;
  }
  if(num == 0){
    buttons[1].classList.remove('yellow');
    buttons[2].classList.remove('yellow');
    buttons[3].classList.remove('yellow');
    img[1].src = "img/act.png";
    img[2].src = "img/item.png";
    img[3].src = "img/mercy.png";
  }
  if(num == 1){
    buttons[0].classList.remove('yellow');
    buttons[2].classList.remove('yellow');
    buttons[3].classList.remove('yellow');
    img[0].src = "img/fight.png";
    img[2].src = "img/item.png";
    img[3].src = "img/mercy.png";
  }
  if(num == 2){
    buttons[0].classList.remove('yellow');
    buttons[1].classList.remove('yellow');
    buttons[3].classList.remove('yellow');
    img[0].src = "img/fight.png";
    img[1].src = "img/act.png";
    img[3].src = "img/mercy.png";
  }
  if(num == 3){
    buttons[0].classList.remove('yellow');
    buttons[1].classList.remove('yellow');
    buttons[2].classList.remove('yellow');
    img[0].src = "img/fight.png";
    img[1].src = "img/act.png";
    img[2].src = "img/item.png";
  } 
  img[num].src = "img/heart.png";
  buttons[num].classList.add('yellow');
}

//Timeout
let timeoutID;

//Function that writes the text in the text box letter by letter
function typeWriter() {
  audio.reset(7);
  audio.play(7);
  clearTimeout(timeoutID);
    playerMovementBox.innerHTML = `<div class="shakeElement"></div>`;
    setTimeout(() => {
      shakeElement = document.querySelector(".shakeElement");
      let i = 0;
      timeoutID = setInterval(() => {
        if (i >= text.length) {
          shakeLetters();
          audio.pause(7);
          clearInterval(timeoutID);
          return;
        }
        shakeElement.innerHTML += text[i];
        i++;
      }, 40);
    }, 10);
}

//Function that writes the text in the text box instantly
function typeWriterInstant() {
  audio.reset(7);
  audio.pause(7);
  clearTimeout(timeoutID);
  playerMovementBox.innerHTML = "";
  playerMovementBox.innerHTML = text;
  clearTimeout(timeoutID);
  shakeLetters();
  return;
}

//Function that writes the text in the text box letter by letter and works with arrays
function typeWriterArr() {
  audio.reset(7);
  audio.play(7);
  clearTimeout(timeoutID);
    playerMovementBox.innerHTML = `<div class="wrap"><div class="shakeElement"></div><div class="shakeElement"></div><div class="shakeElement"></div></div>`;
    setTimeout(() => {
      shakeElement = document.querySelectorAll(".shakeElement");
      let i = 0;
      timeoutID = setInterval(() => {
        if (i >= text.length) {
          clearInterval(timeoutID);
          let i = 0;
          timeoutID = setInterval(() => {
            if (i >= secondColumn.length) {
              clearInterval(timeoutID);
              let i = 0;
              timeoutID = setInterval(() => {
                if (i >= thirdColumn.length) {
                  clearInterval(timeoutID);
                  setTimeout(() => {
                    audio.pause(7);
                    shakeLetters();
                  }, 100);
                  return;
                  }
                  shakeElement = document.querySelectorAll(".shakeElement");
                  shakeElement[2].innerHTML += thirdColumn[i];
                  i++;
              }, 40); 
              return;
            }
            shakeElement = document.querySelectorAll(".shakeElement");
            shakeElement[1].innerHTML += secondColumn[i];
            i++;
          }, 40);
          return;
        }
        shakeElement = document.querySelectorAll(".shakeElement");
        shakeElement[0].innerHTML += text[i];
        i++;
      }, 40);
    }, 10);
}


//Function that writes the text in the text box letter by letter
function typeWriterBox(textWritten) {
  audio.reset(6);
  audio.play(6);
  textBox.innerHTML = "";
  clearTimeout(timeoutID);
  let i = 0;
  timeoutID = setInterval(() => {
    if (i >= textWritten.length) {
      setTimeout(() => {
        audio.pause(6);
      },100);
      clearInterval(timeoutID);
      return;
    }
    textBox.innerHTML += textWritten[i];
    i++;
  }, 40);
}

//Mettaton death animation
function deathMtt() {
  chatBox.style.opacity = "1";
  mettatonGIF.style.animation = "shake_death 0.2s steps(1, end) infinite";
  if(deathDialogue == 0){
  mettatonGIF.src="img/f7.png";
  typeWriterBox("YOU WON, BUT AT WHAT COST?");
  deathDialogue++;
  }
  else if(deathDialogue == 1){
  mettatonGIF.src="img/f7.png";
  typeWriterBox("...");
  deathDialogue++;
  }
  else if(deathDialogue == 2){
  mettatonGIF.src="img/f7.png";
  typeWriterBox("YOU MAY HAVE DEFEATED ME, BUT...");
  deathDialogue++;
  }
  else if(deathDialogue == 3){
    mettatonGIF.src="img/f5.png";
  if(misses > 0){
  typeWriterBox("I CAN TELL FROM THAT MISS, DARLING.");
  }
  else{
  typeWriterBox("I KNOW YOU'RE NOT THAT BAD, DARLING.");
  }
  deathDialogue++;
  }
  else if(deathDialogue == 4){
  mettatonGIF.src="img/f6.png";
  typeWriterBox("YOU WERE HOLDING BACK.");
  deathDialogue++;
  }
  else if(deathDialogue == 5){
  mettatonGIF.src="img/f7.png";
  typeWriterBox("YES, ASGORE WILL LOSE EASILY TO YOU...");
  deathDialogue++;
  }
  else if(deathDialogue == 6){
  mettatonGIF.src="img/f6.png";
  typeWriterBox("BUT YOU WON'T MURDER ALL HUMANS, WILL YOU?");
  deathDialogue++;
  }
  else if(deathDialogue == 7){
  mettatonGIF.src="img/f2.png";
  typeWriterBox("YOU'RE NOT THAT BAD.");
  deathDialogue++;
  }
  else if(deathDialogue == 8){
  mettatonGIF.src="img/f6.png";
  typeWriterBox("IF YOU WERE TRYING TO BE, THEN YOU MESSED UP.");
  deathDialogue++;
  }
  else if(deathDialogue == 9){
  mettatonGIF.src="img/f1.png";
  typeWriterBox("AND SO LATE INTO THE FIGHT, TOO.");
  deathDialogue++;
  }
  else if(deathDialogue == 10){
  mettatonGIF.src="img/f1.png";
  typeWriterBox("AT LEAST NOW I CAN REST EASILY.");
  deathDialogue++;
  }
  else if(deathDialogue == 11){
  mettatonGIF.src="img/f4.png";
  typeWriterBox("KNOWING THAT ALPHYS AND THE MONSTERS WILL LIVE ON...!");
  deathDialogue++;
  }
  else if(deathDialogue == 12){
  deathDialogue++;
  audio.pause(6);
  audio.reset(6);
  audio.play(14);
  projectile.classList.add("transition");
  projectile.style.background = "white";
  finished++;
  setTimeout(() => {
    html.classList.remove("cursorNone");
    projectile.innerHTML = `<div class="statistics">
    <div class="stat">Game was finished : ${finished}(times)</div>
    <div class="stat">Restarts : ${restarts}</div>
    <div class="stat">Damage taken : ${damageTaken}</div>
    <div class="stat">Damage taken : ${damageTakenTimes}(times)</div>
    <div class="stat">Hits : ${hits}</div>
    <div class="stat">Critical hits : ${criticalHitsGiven}</div>
    <div class="stat">Food used : ${foodUsed.length === 0 ? 0 : foodUsed.join(" ")} , ${foodUsed.length}</div>
    <div class="stat">Time taken to complete the game : ${timeToComplete}s</div>
    <div class="stat">Turns taken to complete the game : ${turnsToComplete}</div>
    <div class="stat">Press esc to restart</div>
    </div>`;
  }, 1000);
  save(1,finished);
  setTimeout(() => {
    audio.unmute(2);
    audio.reset(2);
    audio.play(2);
    projectile.style.background = "black";
  }, 3000);
  //END
  }
}

//End of the functions initialization

//A,a and left arrow keys listeners, movement to the right of the buttons
setTimeout(() => {
document.addEventListener('keyup', e => {
  const key = e.keyCode || e.which;
  switch (key) {
    case 37: // Left arrow key
    case 65: // A key
    case 97: // a key
      if(num !== false){
        num--;
        audio.reset(1);
        audio.play(1);
        buttonsMovement();
      }
      break;
    default:
      return;
  }
});

//D,d and right arrow keys listener, movement to the left of the buttons
document.addEventListener('keyup', e => {
  const key = e.keyCode || e.which;
  switch (key) {
    case 39: // Right arrow key
    case 68: // D key
    case 100: // d key
      if(num !== false){
        num++;
        audio.reset(1);
        audio.play(1);
        buttonsMovement();
      }
      break;
    default:
      return;
  }
});
}, 3000);

document.addEventListener('keydown', e => {
  const key = e.keyCode || e.which;
  switch (key) {
    case 13: // Enter key
    case 90: // Z key

      //If the user pressed enter while the attack
      if(attack === 0 && stage == false && attack !== false){
        setTimeout(() => {
          attack = false;
          clearTimeout(attackLineTimeout);
          clearInterval(HP_show);
          attackLine.style.left = `${attackLine.getBoundingClientRect().left-window.innerWidth*0.23795}px`;
          attackLine.classList.remove("move_attack");
          let attack_amount = parseFloat(((attackLine.getBoundingClientRect().left - window.innerWidth*0.23795)/(window.innerWidth*0.005242)).toFixed(2));
          audio.play(5);
          if(attack_amount > 49){
            hits++;
            damageDealt.innerHTML = (0.35*calculatePercentage(51-(attack_amount-49),51)).toFixed(0);
            if(MettatonHP - (0.35*calculatePercentage(51-(attack_amount-49),51)).toFixed(0) < 0){
              MettatonHP = 0;
              mettatonGIF.src = "img/f7.png";
            }
            else{
              
              MettatonHP -= (0.35*calculatePercentage(attack_amount,100)).toFixed(0);
            }
            attackLine.classList.add("appear_hide");
          }
          else if(attack_amount > 48.49 && attack_amount < 49.01){
            damageDealt.innerHTML = "36";
            criticalHitsGiven++;
            hits++;
            if(MettatonHP - 36 < 0){
              MettatonHP = 0;
              mettatonGIF.src = "img/f7.png";
            }
            else{
            MettatonHP -= 36;
            }
            attackLine.classList.add("appear_hide_yellow");
          }
          else if(attack_amount < 48.49){
            hits++;
            damageDealt.innerHTML = (0.35*calculatePercentage(attack_amount,+49)).toFixed(0);
            if(MettatonHP - (0.35*calculatePercentage(attack_amount,47.49)).toFixed(0) < 0){
              MettatonHP = 0;
              mettatonGIF.src = "img/f7.png";
            }
            else{
              MettatonHP -= (0.35*calculatePercentage(attack_amount,47.49)).toFixed(0);
            }
            attackLine.classList.add("appear_hide");
          }
          mettatonsHP.style.width = `${MettatonHP/(360/100)}%`;
          hpWidth = `${MettatonHP/(360/100)}%`;
          setTimeout(() => {
            mettatonGIF.classList.add("animation_shake");
          }, 10);
          attackingSection.style.height = (window.innerHeight - 0.5 * window.innerWidth)/2 + (0.5 * window.innerWidth) * 0.556+"px"
          attackingSection.classList.remove("hidden");
          attackLine.classList.remove("move_attack");
          attackingGIF.src = "img/attack.gif";
          setTimeout(() => {
            setTimeout(() => {
              mettatonGIF.classList.remove("animation_shake");
            }, 30);
            attackLine.classList.remove("appear_hide");
            attackLine.classList.remove("appear_hide_yellow");
            attackLine.classList.add("hidden");
            attackingSection.classList.add("hidden");
            attackingGIF.src = "";
            attackLine.classList.add("hidden");
            playerMovementBox.classList.remove("text_bc_im");
            disappear();
          }, 980);
        },11);
      }
      break;
    }

});

//Z and enter, x key listeners
setTimeout(() => {
document.addEventListener('keyup', e => {
  const key = e.keyCode || e.which;
  switch (key) {
    case 13: // Enter key
    case 90: // Z key

      //Movement between the text menus
      if(secondNumber > 3){
        secondNumber = 0;
      }
      if(secondNumber < 0){
        secondNumber = 3;
      }
      if(num > 3){
        num = 0;
      }
      if(num < 0){
        num = 3;
      }

      //Movement between text 
      if(stage == 3 && stage !== false && secondNumber == 1){
        stage = 4;
        display4();
        audio.reset(1);
        audio.play(1);
       }
      if(stage == 2 && stage !== false && secondNumber == 0 || stage == 2 && stage !== false && secondNumber == 1 || stage == 2 && stage !== false && secondNumber == 2){
        stage = 3;
        display3();
        audio.reset(1);
        audio.play(1);
       }
       if(stage == 1 && stage !== false){
        stage = 2;
        display2();
        audio.reset(1);
        audio.play(1);
        }
      if(stage == 0 && stage !== false){
        audio.pause(7);
        clearTimeout(timeoutID);
        stage = 1;
        display();
        audio.reset(1);
        audio.play(1);
        disableX = true;
        num = false;
        }

      break;
      case 88: // X key
      case 120: // x key

      //Go out of the text menu
      if(disableX == true){
      disableX = false;
      position = false;
      stage = 0;
      attack = false
      img[secondNumber].src = "img/heart.png";
      text = `* Stage lights are blaring`;
      typeWriter();
      audio.reset(1);
      audio.play(1);
      num = secondNumber;
      }

      break;
      default:
      return;
  }
});
},4000);

//Movement in the inventory
document.addEventListener('keyup', e => {
  if(position !== false){
    positionBefore = position;
    //Sets the firstInventoryRow and secondInventoryRow to this every time
    firstInventoryRow = `<div class="invetory">${foodList[0] !== undefined ? "<div class='left-element'><img class='heartImg smaller_img_heart' src='img/nothing.png'><div class='shakeElement'> * " + foodList[0] + "</div></div>" : `<div class="nothing"></div>`}${foodList[1] !== undefined ? "<div class='right-element'><img class='heartImg' src='img/nothing.png'><div class='shakeElement'> * " + foodList[1] + "</div></div>" : `<div class="nothing"></div>`}
    ${foodList[2] !== undefined ? "<div class='left-element'><img class='heartImg smaller_img_heart' src='img/nothing.png'><div class='shakeElement'> * " + foodList[2] + "</div></div>" : `<div class="nothing"></div>`}${foodList[3] !== undefined ? "<div class='right-element'><img class='heartImg' src='img/nothing.png'><div class='shakeElement'> * " + foodList[3] + "</div></div>" : `<div class="nothing"></div>`}
   <div class="nothing"></div><div class="right-element-page" class="shakeElement">PAGE 1</div></div>`;
  secondInventoryRow = `<div class="invetory">${foodList[4] !== undefined ? "<div class='left-element'><img class='heartImg smaller_img_heart' src='img/nothing.png'><div class='shakeElement'> * " + foodList[4] + "</div></div>" : `<div class="nothing"></div>`}${foodList[5] !== undefined ? "<div class='right-element'><img class='heartImg' src='img/nothing.png'><div class='shakeElement'> * " + foodList[5] + "</div></div>" : `<div class="nothing"></div>`}
 ${foodList[6] !== undefined ? "<div class='left-element'><img class='heartImg smaller_img_heart' src='img/nothing.png'><div class='shakeElement'> * " + foodList[6] + "</div></div>" : `<div class="nothing"></div>`}${foodList[7] !== undefined ? "<div class='right-element'><img class='heartImg' src='img/nothing.png'><div class='shakeElement'> * " + foodList[7] + "</div></div>" : `<div class="nothing"></div>`}
 <div class="nothing"></div><div class="right-element-page" class="shakeElement">PAGE 2</div></div>`; 
const key = e.keyCode || e.which;
  //Movement in  the inventory
  switch (key) {
      case 38: // ArrowUp
      case 87: // W
      case 119: // w
        heartImg[secondPosition].src = "img/nothing.png";
        if(position == 2 || position == 3){
          if(foodList[position - 2] !== undefined){
          position -= 2;
          }
        }
        else if(position == 0 || position == 1){
          if(foodList[position + 2] !== undefined){
          position += 2;
          }
        }
        else if(position == 4 || position == 5){
          if(foodList[position + 2] !== undefined){
          position += 2;
          }
        }
        else if(position == 6 || position == 7){
          if(foodList[position - 2] !== undefined){
          position -= 2;
          }
        }
        if(positionBefore != position){
          audio.reset(1);
          audio.play(1);
        }

      break;
      case 40: // ArrowDown
      case 83: // S
      case 115: // s
        heartImg[secondPosition].src = "img/nothing.png";
        if(position == 2 || position == 3){
          if(foodList[position - 2] !== undefined){
          position -= 2;
          }
        }
        else if(position == 0 || position == 1){
          if(foodList[position + 2] !== undefined){
          position += 2;
          }
        }
        else if(position == 4 || position == 5){
          if(foodList[position + 2] !== undefined){
          position += 2;
          }
        }
        else if(position == 6 || position == 7){
          if(foodList[position - 2] !== undefined){
          position -= 2;
          }
        }
        if(positionBefore != position){
          audio.reset(1);
          audio.play(1);
        }

      break;
      case 37: // ArrowLeft
      case 65: // A
      case 97: // a
        heartImg[secondPosition].src = "img/nothing.png";
        if(position == 2){
          if(foodList.length > 6){
          position = foodList.length - 1;
          }
          else if(foodList.length < 7 && foodList.length > 3){
            position = 3;
          }
        }
        else if(position == 0){
            if(foodList.length == 8 || foodList.length == 7){
            position = 5;
            }
            else if(foodList.length == 6 || foodList.length == 5){
            position = foodList.length - 1;
            }
            else if(foodList.length < 5 && foodList.length != 1){
            position = 1;
            }
            else if(foodList.length == 1){
            position = 0;
            }
        }
        else if(position == 4){
          if(foodList[1] !== undefined){
          position = 1;
          }
        }
        else if(position == 6){
          if(foodList[3] !== undefined){
          position = 3;
          }
        }
        else if(1 == position || 3 == position){
          if(foodList[position - 1] !== undefined){
          position -= 1;
          }
        }
        else if(7 == position || 5 == position){
          if(foodList[position - 1] !== undefined){
          position -= 1;
          }
        }
        if(positionBefore != position){
          audio.reset(1);
          audio.play(1);
        }

      break;
      case 39: // ArrowRight
      case 68: // D
      case 100: // d        
        heartImg[secondPosition].src = "img/nothing.png";
        if(position == 0 && foodList.length > 1 || position == 2 && foodList.length > 3 || position == 4 && foodList.length > 5 || position == 6 && foodList.length > 7 ){
          position += 1;
        }
        else if(position == 7 && foodList.length > 7 || position == 5 && foodList.length > 5){
          position -= 5;
        }
        else if(position == 1 && foodList.length > 4 || position == 3 && foodList.length > 6){
          position += 3;
        }
        else if(foodList.length == 5 && position == 3 || foodList.length == 6 && position == 3){
          position -= 1;
        }
        else if(position == 4 && foodList.length == 5){
          position = 0;
        }
        else if(position == 6 && foodList.length == 7){
          position = 2;
        }
        else if(position == 3 && foodList.length == 4 || position == 1  && foodList.length < 5 && foodList.length > 1){
          position -= 1;
        }
        typeWriterInstant();
        imgH();
        heartImg[secondPosition].src = "img/heart.png";
        if(positionBefore != position){
          audio.reset(1);
          audio.play(1);
        }

      break;
    default:
      return;
  }

  //Sets the position for the img because theyre different
  if(position == 4){
    secondPosition = 0;
  }
  else if(position == 5){
    secondPosition = 1;
  }
  else if(position == 6){
    secondPosition = 2;
  }
  else if(position == 7){
    secondPosition = 3;
  }
  else if(position > -1 && position < 4){
    secondPosition = position;
  }
  if(position > -1 && position < 4){
    text = firstInventoryRow;
  }
  if(position > 3 && position < 8){
    text = secondInventoryRow;
  }
typeWriterInstant();
imgH();
heartImg[secondPosition].src = "img/heart.png";

}
});