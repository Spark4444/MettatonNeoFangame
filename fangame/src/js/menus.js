//Varaibles initilization
let frisk = document.querySelector("#frisk");
let start = document.querySelector(".start");
let wrapper = document.querySelector(".wrapper");
let heart = document.querySelector("#heart");
let buttons = document.querySelectorAll('.button');
let img = document.querySelectorAll('.but');
let text_placeholder = document.querySelector(".text");
let text_chatbox_main = document.querySelector(".wrap_box_text");
let text_chatbox = document.querySelector(".chat_box");
let triangle = document.querySelector(".triangle");
let img_h = document.querySelectorAll(".heart_img");  
let start_button = document.querySelector(".start_button");
let start_menu = document.querySelector(".start_menu");
let fullScreenBtn = document.querySelector(".fullScreen_btn");
let sound = document.querySelector(".sound");
let html = document.querySelector("html");
let hp = document.querySelector(".txt");
let hp_mettaton_attacked = document.querySelector(".hp-");
let elem_mettaton = document.querySelector(".mettaton_hp");
let attack_png = document.querySelector(".attack_png");
let hp_left = document.querySelector(".hp_shower");
let mettaton_gif = document.querySelector(".mettaton_gif");
let battle_menu = document.querySelector(".battle-menu");
let lv = document.querySelector(".lv");
let name = document.querySelector(".name");
let volume = document.querySelector("#volume");
let hp_str = document.querySelector(".txt").innerHTML[0] + document.querySelector(".txt").innerHTML[1];
let hp_width = document.querySelector(".hpVis");
let canvas = document.querySelector("#canvas");
let food_list = ["Pie","I. Noodles","Steak","L. Hero","L. Hero","L. Hero","L. Hero","L. Hero"];
let health = ["72","72","60","40","40","40","40","40"];
let food_used = [];
let text = "";
let food = "";
let HP_width_small = "100%";
let width_pr;
let stage = false;
let audio_work = true;
let attack = false;
let num = false;
let x_disable = false;
let invent = false;
let position = false;
let position_bf = false;
let started = false;
let canvas_t = false;
let attack_num = false;
let anim = true;
let fullScreen = false;
let hp_mettaton = 360;
let position2 = 0;
let hp_recover = 0;
let num_second = 0;
let timer = 0;
let letterId = 0;
let count_death = 0;
let restarts = 0;
let damage_taken = 0;
let damage_taken_times = 0;
let hits = 0;
let critical_hits_given = 0;
let misses = 0;
let time_complete = 0;
let turns_complete = 0;
let attack_line;
let finished;
setTimeout(() => {
  finished = get(1);
}, 10);
let attack_line_timeout;
let time_complete_interval;
let timer_int;
let intervalL;
let shakeElement;
let text1;
let text2;
let text_2;
let text_3;

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

//Sets volume of the music to 20%
setTimeout(() => {
  audio.pauseAll();
}, 100);

//Sets the volume in percantages
document.querySelector("#rangeValue").innerHTML = `${volume.value}%`;

//Width for hp bar
hp_width.style.width = "100%";

//Plays starting music
start_menu.addEventListener('mousedown', () =>{
  if(started !== true){
  audio.play(2);
  }
});

//The bar will play a sound when you click on it
volume.addEventListener("mousedown", () => {
  audio.reset(1);
  audio.play(1);
});

// Update the volume when the mouse is released from the slider
volume.addEventListener("mouseup", () => {
  audio.volumeAll(volume.value);
});

// Waits for the button to be clicked and here you can change the animation in the start parameter
start_button.addEventListener('click', () => {

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

  // Pause audio when user leaves the tab or blocks the browser entirely
  // window.addEventListener('blur', () => {
  //   audio.pause(0);
  //   audio.pause(2);
  //   audio.pause(9);
  //   audio.pause(12);
  // });

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
    html.classList.add("cursor_none");
    frisk.classList.remove("hidden");
    start_menu.classList.add("hidden_anim");

    setTimeout(function() {
      start_menu.classList.add("hidden");
    },1000);

    started = true;

    // Starting animation
    function start_animation(){
      if(started === true){
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
            wrapper.classList.remove("hidden");
            start.classList.add("hidden");
            heart.classList.add("move");
            heart.style.top = (window.innerHeight - 0.5 * window.innerWidth)/2 + (0.5 * window.innerWidth) * 0.923 + "px";
          }, 200);

          setTimeout(function() {
            audio.unmute(0);
            audio.reset(0);
            audio.play(0);
          }, 1000);
        }, 2000); 

        setTimeout(function(){
          start_button.innerHTML = "RESTART";
          start_button.style.width = "38%";
          buttons[0].classList.add('yellow');
          heart.classList.add("hidden");
          audio.play(7);
          img[0].src = "img/heart.png";
          num = 0;
        },2600);
      }
    }

    // No start animation
    function no_start_animation(){
      if(started === true){
        setTimeout(function() {
          appear("* Mettaton NEO blocks the way!");
        },10);

        start.classList.add("hidden");
        wrapper.classList.remove("hidden");
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

    if(anim === true){
      start_animation();
      time_complete_interval = setInterval(() =>{
        time_complete++;
      }, 1000);
    } else if(anim === false){
      no_start_animation();
      time_complete_interval = setInterval(() =>{
        time_complete++;
      }, 1000);
    }
  }
});

//All functions initialization

//Function that will check for the num and then display check
function check(num){
  if(num_second == 0){
    img[num_second].src = "img/nothing.png"
    text = `<div class='attack_text'><img class= 'heart_img smaller_img' src='img/heart.png'><div id="shake-element" class="WidthN"> * Mettaton NEO </div> <div class='hp_show_wrap'><div class='hp_shower fisrt_hp' style='width:${HP_width_small};'></div></div></div>`;
    typeWriter2();
  }
  if(num_second == 1){
    img[num_second].src = "img/nothing.png"
    text = `<div class="flex"><img class= 'heart_img smaller_img' src='img/heart.png'><div id="shake-element"> * Mettaton NEO</div></div>`;
    typeWriter2();
  }
  if(num_second == 2){
    img[num_second].src = "img/nothing.png"
    position = 0;
    position_bf = 0;
    text = `<div class="grid-container">${food_list[0] !== undefined ? "<div class='left-element'><img class='heart_img smaller_img_heart' src='img/nothing.png'><div id='shake-element'> * " + food_list[0] + "</div></div>" : `<div class="nothing"></div>`}${food_list[1] !== undefined ? "<div class='right-element'><img class='heart_img' src='img/nothing.png'><div id='shake-element'> * " + food_list[1] + "</div></div>" : `<div class="nothing"></div>`}
    ${food_list[2] !== undefined ? "<div class='left-element'><img class='heart_img smaller_img_heart' src='img/nothing.png'><div id='shake-element'> * " + food_list[2] + "</div></div>" : `<div class="nothing"></div>`}${food_list[3] !== undefined ? "<div class='right-element'><img class='heart_img' src='img/nothing.png'><div id='shake-element'> * " + food_list[3] + "</div></div>" : `<div class="nothing"></div>`}
   <div class="nothing"></div><div class="right-element-page" id="shake-element">PAGE 1</div></div>`;
    typeWriter2();
    imgH();
    img_h[0].src = "img/heart.png"
  }
  if(num_second == 3){
    img[num_second].src = "img/nothing.png"
    text = `<div class="flex"><img class= 'heart_img smaller_img' src='img/heart.png'><div id="shake-element"> * Spare</div></div>`;
    typeWriter2();
  }
}

//Second checker
function check2(num){
  if(num_second == 0){
    x_disable = false;
    stage = false;
    num = false;
    text = `<div class="line_attack" alt="" style=""></div>`;
    setTimeout(() => {
      attack_line = document.querySelector(".line_attack"); 
      attack = 0;
      timer = 0;
    },10);
    typeWriter2();
    attack_function();
  }
  if(num_second == 1){
    text = `<div class="flex"><img class= 'heart_img smaller_img' src='img/heart.png'><div id="shake-element"> * Check</div></div>`;
    typeWriter2 ();
  }
  if(num_second == 2){
    audio.play(15);
    x_disable = false;
    food = food_list[position];
    hp_recover = health[position];
    food_used.push(food_list.splice(position, 1));
    health.splice(position, 1);

    if(food == "Pie"){
      text = `* You ate the ${food}.`
      text_2 = `* Your HP was maxed out!`;
      text_3 = ``;
    }
    else if(food == "Steak"){
      text = `* You ate the ${food}.`          
      text_2 = `* You recovered ${hp_recover} HP!`;
      text_3 = ``;
    }
    else if(food == "I. Noodles"){
      text = `* You ate the Instant Noodles.`
      text_2 = `* Your HP was maxed out!`;
      text_3 = ``;
    }
    else if(food == "L. Hero"){
      text = `* You eat the Legendary Hero.`;
      text_2 = `* You recovered ${hp_recover} HP!`;
      text_3 = ``;
    }
    hp_str = document.querySelector(".txt").innerHTML[0] + document.querySelector(".txt").innerHTML[1];
    HP_recover();
    typeWriterArr();
    position = false;
  }
  if(num_second == 3){
    x_disable = false;
    disappear();
  }
}

//Third checker
function check3(num){
  if(num_second == 0){
    //continue
  }
  if(num_second == 1){
    x_disable = false;
    text = `* METTATON NEO - 90 ATK 9 DEF`;
    text_2 = `* Dr. Alphys's greatest invention.`
    text_3 = "";
    typeWriterArr();
  }
  if(num_second == 2){
    num = false;
    stage = false;
    disappear();
  if(num_second == 3){
  }
}
}

//Fourth checker
function check4(num){
  if(num_second == 0){
  }
  if(num_second == 1){
    num = false;
    stage = false;
    disappear();
  }
  if(num_second == 2){
  }
  if(num_second == 3){
  }
}

//text_menu disappear
function disappear(){
  stage = false;
  num = false;
  text = "";
  typeWriter2();
  text_placeholder.classList.add("cube")
  setTimeout(function(){
    buttons[num_second].classList.remove('yellow');
    img[num_second].src = "";
    if(num_second == 0){
      img[0].src = "img/fight.png";
    }
    if(num_second == 1){
      img[1].src = "img/act.png";
    }
    if(num_second == 2){
      img[2].src = "img/item.png";
    }
    if(num_second == 3){
      img[3].src = "img/mercy.png";
    } 
    canvas.style.display = "";
    canvas_t = true;
    if(hp_mettaton > 0){
      chat_box();
    }
    else{
      mettaton_gif.classList.add("mettaton_gif_left");
      triangle.classList.add("triangle_left");
      text_chatbox.classList.add("chat_box_left");
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

//text_menu appear
function appear(text1){
  projectile.innerHTML = ``;
  mettaton_gif.style.opacity = "1";
  canvas_t = false;
  num = 0;
  text = "";
  typeWriter2();
  classA();
  text_placeholder.classList.remove("hidden");
  setTimeout(function(){
    text_placeholder.classList.remove("cube");
  },100);
  
  setTimeout(function(){
    text = text1;
    typeWriter();
    stage = 0;
  },1000 + 100);
}

//img_h initialization
function imgH(){
  img_h = document.querySelectorAll(".heart_img");  
  return;
}

//Attack
function attack_function(){
  setTimeout(() => {
    attack_line.classList.add("move_attack");
    canvas.classList.add("text_bc_im");
    timer_int  = setInterval(() => {
      timer++;
    }, 12);
    attack_line_timeout = setTimeout(() => {
      clearInterval(timer_int);
      clearInterval(HP_show);
      attack = false;
      hp_mettaton_attacked.innerHTML = "MISS";
      misses++;
      audio.play(5);
      elem_mettaton.style.height = (window.innerHeight - 0.5 * window.innerWidth)/2 + (0.5 * window.innerWidth) * 0.556+"px"
      elem_mettaton.classList.remove("hidden");
      attack_png.src = "img/attack.gif";
      attack_line.classList.remove("move_attack");
      attack_line.classList.add("hidden");
      setTimeout(() => {
        attack_line.classList.remove("appear_hide");
        attack_line.classList.add("hidden");
        elem_mettaton.classList.add("hidden");
        attack_png.src = "";
        canvas.classList.remove("text_bc_im");
        disappear();
      }, 999);
    }, 1201);
  }, 11);
}

//HP recovering
function HP_recover(){
  if(parseInt(hp_str) + parseInt(hp_recover) < 71 && parseInt(hp_str) + parseInt(hp_recover) > 0){
  hp_str = parseInt(hp_str) + parseInt(hp_recover);
  }
  else if(parseInt(hp_str) + parseInt(hp_recover) >= 72){
  hp_str = 72;
  }
  if(hp_str < 72){
    hp.innerHTML = `${hp_str}/72`;
    hp_width.style.width = `${hp_str/(72/100)}%`;
  }
  if(hp_str > 72 && hp_str == 72){
    hp.innerHTML = `72/72`;
    hp_width.style.width = `100%`;
  }
  showHP();
}

//Shows hp and checks if game is over
function showHP(){
  hp.innerHTML = `${hp_str}/72`;
  hp_width.style.width = `${hp_str/(72/100)}%`;
  if(hp_str < 0){
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
    mettaton_gif.style.filter = "";
    battle_menu.style.opacity = "1";
    name.style.opacity = "1";
    lv.style.opacity = "1";
    mettaton_gif.style.opacity = "1";
    audio.unmute(2);
    number = 1;
    count_death = 0;
    turns_complete = 0;
    hits = 0;
    time_complete = 0;
    damage_taken = 0;
    damage_taken_times = 0;
    critical_hits_given = 0;
    misses = 0;
    food_used = [];
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
    clearInterval(time_complete_interval);
    food_list = ["Pie","I. Noodles","Steak","L. Hero","L. Hero","L. Hero","L. Hero","L. Hero"];
    health = ["72","72","60","40","40","40","40","40"];
    hp_mettaton = 360;
    one = 0;
    hp_str = "72";
    hp.innerHTML = `72/72`;
    hp_width.style.width = `100%`;
    hp_left.style.width = `${hp_mettaton/(360/100)}%`;
    HP_width_small = `${hp_mettaton/(360/100)}%`;
    anim = false;
    attack_num = false;
    stage = false;
    num = false;
    html.classList.remove("cursor_none");
    wrapper.classList.add("hidden");
    start_menu.classList.remove("hidden");
    start_menu.classList.remove("hidden_anim");
    start_menu.style.opacity = "0";
    setTimeout(function(){
      start_menu.style.opacity = "";
    },10)
    started = false;
  }
}


//Movement between buttons
function classA(){
  num_second = num;
  if(num_second > 3){
    num_second = 0;
  }
  if(num_second < 0){
    num_second = 3;
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
  clearInterval(intervalL);
    text_placeholder.innerHTML = `<div id="shake-element"></div>`;
    setTimeout(() => {
      shakeElement = document.querySelector("#shake-element");
      let i = 0;
      timeoutID = setInterval(() => {
        if (i >= text.length) {
          setTimeout(() => {
            shakeLetters();
            audio.pause(7);
          }, 100);
          clearInterval(timeoutID);
          return;
        }
        shakeElement.innerHTML += text[i];
        i++;
      }, 40);
    }, 10);
}

//Function that writes the text in the text box instantly
function typeWriter2() {
  audio.reset(7);
  audio.pause(7);
  clearTimeout(timeoutID);
  clearInterval(intervalL);
  text_placeholder.innerHTML = "";
  text_placeholder.innerHTML = text;
  clearTimeout(timeoutID);
  shakeLetters();
  return;
}

//Function that writes the text in the text box letter by letter and works with arrays
function typeWriterArr() {
  audio.reset(7);
  audio.play(7);
  clearTimeout(timeoutID);
  clearInterval(intervalL);
    text_placeholder.innerHTML = `<div class="flex wrap"><div id="shake-element"></div><div id="shake-element"></div><div id="shake-element"></div></div>`;
    setTimeout(() => {
      shakeElement = document.querySelectorAll("#shake-element");
      let i = 0;
      timeoutID = setInterval(() => {
        if (i >= text.length) {
          clearInterval(timeoutID);
          let i = 0;
          timeoutID = setInterval(() => {
            if (i >= text_2.length) {
              clearInterval(timeoutID);
              let i = 0;
              timeoutID = setInterval(() => {
                if (i >= text_3.length) {
                  clearInterval(timeoutID);
                  setTimeout(() => {
                    audio.pause(7);
                    shakeLetters();
                  }, 100);
                  return;
                  }
                  shakeElement = document.querySelectorAll("#shake-element");
                  shakeElement[2].innerHTML += text_3[i];
                  i++;
              }, 40); 
              return;
            }
            shakeElement = document.querySelectorAll("#shake-element");
            shakeElement[1].innerHTML += text_2[i];
            i++;
          }, 40);
          return;
        }
        shakeElement = document.querySelectorAll("#shake-element");
        shakeElement[0].innerHTML += text[i];
        i++;
      }, 40);
    }, 10);
}


//Function that writes the text in the text box letter by letter
function typeWriterBox(text_write) {
  audio.reset(6);
  audio.play(6);
  text_chatbox.innerHTML = "";
  clearTimeout(timeoutID);
  clearInterval(intervalL);
  let i = 0;
  timeoutID = setInterval(() => {
    if (i >= text_write.length) {
      setTimeout(() => {
        audio.pause(6);
      },100);
      clearInterval(timeoutID);
      return;
    }
    text_chatbox.innerHTML += text_write[i];
    i++;
  }, 40);
}

//Mettaton death animation
function deathMtt() {
  text_chatbox_main.style.opacity = "1";
  mettaton_gif.style.animation = "shake_death 0.2s steps(1, end) infinite";
  if(count_death == 0){
  mettaton_gif.src="img/f7.png";
  typeWriterBox("YOU WON, BUT AT WHAT COST?");
  count_death++;
  }
  else if(count_death == 1){
  mettaton_gif.src="img/f7.png";
  typeWriterBox("...");
  count_death++;
  }
  else if(count_death == 2){
  mettaton_gif.src="img/f7.png";
  typeWriterBox("YOU MAY HAVE DEFEATED ME, BUT...");
  count_death++;
  }
  else if(count_death == 3){
    mettaton_gif.src="img/f5.png";
  if(misses > 0){
  typeWriterBox("I CAN TELL FROM THAT MISS, DARLING.");
  }
  else{
  typeWriterBox("I KNOW YOU'RE NOT THAT BAD, DARLING.");
  }
  count_death++;
  }
  else if(count_death == 4){
  mettaton_gif.src="img/f6.png";
  typeWriterBox("YOU WERE HOLDING BACK.");
  count_death++;
  }
  else if(count_death == 5){
  mettaton_gif.src="img/f7.png";
  typeWriterBox("YES, ASGORE WILL LOSE EASILY TO YOU...");
  count_death++;
  }
  else if(count_death == 6){
  mettaton_gif.src="img/f6.png";
  typeWriterBox("BUT YOU WON'T MURDER ALL HUMANS, WILL YOU?");
  count_death++;
  }
  else if(count_death == 7){
  mettaton_gif.src="img/f2.png";
  typeWriterBox("YOU'RE NOT THAT BAD.");
  count_death++;
  }
  else if(count_death == 8){
  mettaton_gif.src="img/f6.png";
  typeWriterBox("IF YOU WERE TRYING TO BE, THEN YOU MESSED UP.");
  count_death++;
  }
  else if(count_death == 9){
  mettaton_gif.src="img/f1.png";
  typeWriterBox("AND SO LATE INTO THE FIGHT, TOO.");
  count_death++;
  }
  else if(count_death == 10){
  mettaton_gif.src="img/f1.png";
  typeWriterBox("AT LEAST NOW I CAN REST EASILY.");
  count_death++;
  }
  else if(count_death == 11){
  mettaton_gif.src="img/f4.png";
  typeWriterBox("KNOWING THAT ALPHYS AND THE MONSTERS WILL LIVE ON...!");
  count_death++;
  }
  else if(count_death == 12){
  count_death++;
  audio.pause(6);
  audio.reset(6);
  audio.play(14);
  projectile.classList.add("transition");
  projectile.style.background = "white";
  finished++;
  setTimeout(() => {
    html.classList.remove("cursor_none");
    projectile.innerHTML = `<div class="statistics">
    <div class="in_statistics">Game was finished : ${finished}(times)</div>
    <div class="in_statistics">Restarts : ${restarts}</div>
    <div class="in_statistics">Damage taken : ${damage_taken}</div>
    <div class="in_statistics">Damage taken : ${damage_taken_times}(times)</div>
    <div class="in_statistics">Hits : ${hits}</div>
    <div class="in_statistics">Critical hits : ${critical_hits_given}</div>
    <div class="in_statistics">Food used : ${food_used.length === 0 ? 0 : food_used.join(" ")} , ${food_used.length}</div>
    <div class="in_statistics">Time taken to complete the game : ${time_complete}s</div>
    <div class="in_statistics">Turns taken to complete the game : ${turns_complete}</div>
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
        classA();
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
        classA();
      }
      break;
    default:
      return;
  }
});
}, 3000);

//Z and enter, x key listeners
setTimeout(() => {
document.addEventListener('keyup', e => {
  const key = e.keyCode || e.which;
  switch (key) {
    case 13: // Enter key
    case 90: // Z key
    case 122: // z key

      //If the user pressed enter while the attack
      if(attack === 0 && stage == false && attack !== false){
        setTimeout(() => {
          attack = false;
          clearTimeout(attack_line_timeout);
          clearInterval(timer_int);
          clearInterval(HP_show);
          attack_line.style.left = `${attack_line.getBoundingClientRect().left-window.innerWidth/100*24.25}px`;
          attack_line.classList.remove("move_attack");
          audio.play(5);
          if(timer > 50){
            timer = timer - 50;
            timer = 50 - timer;
            hits++;
            hp_mettaton_attacked.innerHTML = (0.35*calculatePercentage(timer,50)).toFixed(0);
            if(hp_mettaton - (0.35*calculatePercentage(timer,50)).toFixed(0) < 0){
              hp_mettaton = 0;
              mettaton_gif.src = "img/f7.png";
            }
            else{
              
              hp_mettaton -= (0.35*calculatePercentage(timer,50)).toFixed(0);
            }
            attack_line.classList.add("appear_hide");
          }
          else if(timer > 47 && timer < 51){
            hp_mettaton_attacked.innerHTML = "36";
            critical_hits_given++;
            hits++;
            if(hp_mettaton - 36 < 0){
              hp_mettaton = 0;
              mettaton_gif.src = "img/f7.png";
            }
            else{
            hp_mettaton -= 36;
            }
            attack_line.classList.add("appear_hide_yellow");
          }
          else if(timer < 48){
            hits++;
            hp_mettaton_attacked.innerHTML = (0.35*calculatePercentage(timer,47)).toFixed(0);
            if(hp_mettaton - (0.35*calculatePercentage(timer,47)).toFixed(0) < 0){
              hp_mettaton = 0;
              mettaton_gif.src = "img/f7.png";
            }
            else{
              hp_mettaton -= (0.35*calculatePercentage(timer,47)).toFixed(0);
            }
            attack_line.classList.add("appear_hide");
          }
          hp_left.style.width = `${hp_mettaton/(360/100)}%`;
          HP_width_small = `${hp_mettaton/(360/100)}%`;
          setTimeout(() => {
            mettaton_gif.classList.add("animation_shake");
          }, 10);
          elem_mettaton.style.height = (window.innerHeight - 0.5 * window.innerWidth)/2 + (0.5 * window.innerWidth) * 0.556+"px"
          elem_mettaton.classList.remove("hidden");
          attack_png.src = "img/attack.gif";
          attack_line.classList.remove("move_attack");
          setTimeout(() => {
            setTimeout(() => {
              mettaton_gif.classList.remove("animation_shake");
            }, 30);
            attack_line.classList.remove("appear_hide");
            attack_line.classList.remove("appear_hide_yellow");
            attack_line.classList.add("hidden");
            elem_mettaton.classList.add("hidden");
            attack_png.src = "";
            attack_line.classList.add("hidden");
            canvas.classList.remove("text_bc_im");
            disappear();
          }, 999);
        },11);
      }

      //Movement between the text menus
      if(num_second > 3){
        num_second = 0;
      }
      if(num_second < 0){
        num_second = 3;
      }
      if(num > 3){
        num = 0;
      }
      if(num < 0){
        num = 3;
      }

      //Movement between text 
      if(stage == 3 && stage !== false && num_second == 1){
        stage = 4;
        check4(num_second);
        audio.reset(1);
        audio.play(1);
       }
      if(stage == 2 && stage !== false && num_second == 0 || stage == 2 && stage !== false && num_second == 1 || stage == 2 && stage !== false && num_second == 2){
        stage = 3;
        check3(num_second);
        audio.reset(1);
        audio.play(1);
       }
       if(stage == 1 && stage !== false){
        stage = 2;
        check2(num_second);
        audio.reset(1);
        audio.play(1);
        }
      if(stage == 0 && stage !== false){
        audio.pause(7);
        clearTimeout(timeoutID);
        stage = 1;
        check(num_second);
        audio.reset(1);
        audio.play(1);
        x_disable = true;
        num = false;
        }

      break;
      case 88: // X key
      case 120: // x key

      //Go out of the text menu
      if(x_disable == true){
      x_disable = false;
      position = false;
      stage = 0;
      attack = false
      img[num_second].src = "img/heart.png";
      text = `* Stage lights are blaring`;
      typeWriter();
      audio.reset(1);
      audio.play(1);
      num = num_second;
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
    position_bf = position;
    //Sets the text1 and text2 to this every time
    text1 = `<div class="grid-container">${food_list[0] !== undefined ? "<div class='left-element'><img class='heart_img smaller_img_heart' src='img/nothing.png'><div id='shake-element'> * " + food_list[0] + "</div></div>" : `<div class="nothing"></div>`}${food_list[1] !== undefined ? "<div class='right-element'><img class='heart_img' src='img/nothing.png'><div id='shake-element'> * " + food_list[1] + "</div></div>" : `<div class="nothing"></div>`}
    ${food_list[2] !== undefined ? "<div class='left-element'><img class='heart_img smaller_img_heart' src='img/nothing.png'><div id='shake-element'> * " + food_list[2] + "</div></div>" : `<div class="nothing"></div>`}${food_list[3] !== undefined ? "<div class='right-element'><img class='heart_img' src='img/nothing.png'><div id='shake-element'> * " + food_list[3] + "</div></div>" : `<div class="nothing"></div>`}
   <div class="nothing"></div><div class="right-element-page" id="shake-element">PAGE 1</div></div>`;
  text2 = `<div class="grid-container">${food_list[4] !== undefined ? "<div class='left-element'><img class='heart_img smaller_img_heart' src='img/nothing.png'><div id='shake-element'> * " + food_list[4] + "</div></div>" : `<div class="nothing"></div>`}${food_list[5] !== undefined ? "<div class='right-element'><img class='heart_img' src='img/nothing.png'><div id='shake-element'> * " + food_list[5] + "</div></div>" : `<div class="nothing"></div>`}
 ${food_list[6] !== undefined ? "<div class='left-element'><img class='heart_img smaller_img_heart' src='img/nothing.png'><div id='shake-element'> * " + food_list[6] + "</div></div>" : `<div class="nothing"></div>`}${food_list[7] !== undefined ? "<div class='right-element'><img class='heart_img' src='img/nothing.png'><div id='shake-element'> * " + food_list[7] + "</div></div>" : `<div class="nothing"></div>`}
 <div class="nothing"></div><div class="right-element-page" id="shake-element">PAGE 2</div></div>`; 
const key = e.keyCode || e.which;
  //Movement in  the inventory
  switch (key) {
      case 38: // ArrowUp
      case 87: // W
      case 119: // w
        img_h[position2].src = "img/nothing.png";
        if(position == 2 || position == 3){
          if(food_list[position - 2] !== undefined){
          position -= 2;
          }
        }
        else if(position == 0 || position == 1){
          if(food_list[position + 2] !== undefined){
          position += 2;
          }
        }
        else if(position == 4 || position == 5){
          if(food_list[position + 2] !== undefined){
          position += 2;
          }
        }
        else if(position == 6 || position == 7){
          if(food_list[position - 2] !== undefined){
          position -= 2;
          }
        }
        if(position_bf != position){
          audio.reset(1);
          audio.play(1);
        }

      break;
      case 40: // ArrowDown
      case 83: // S
      case 115: // s
        img_h[position2].src = "img/nothing.png";
        if(position == 2 || position == 3){
          if(food_list[position - 2] !== undefined){
          position -= 2;
          }
        }
        else if(position == 0 || position == 1){
          if(food_list[position + 2] !== undefined){
          position += 2;
          }
        }
        else if(position == 4 || position == 5){
          if(food_list[position + 2] !== undefined){
          position += 2;
          }
        }
        else if(position == 6 || position == 7){
          if(food_list[position - 2] !== undefined){
          position -= 2;
          }
        }
        if(position_bf != position){
          audio.reset(1);
          audio.play(1);
        }

      break;
      case 37: // ArrowLeft
      case 65: // A
      case 97: // a
        img_h[position2].src = "img/nothing.png";
        if(position == 2){
          if(food_list.length > 6){
          position = food_list.length - 1;
          }
          else if(food_list.length < 7 && food_list.length > 3){
            position = 3;
          }
        }
        else if(position == 0){
            if(food_list.length == 8 || food_list.length == 7){
            position = 5;
            }
            else if(food_list.length == 6 || food_list.length == 5){
            position = food_list.length - 1;
            }
            else if(food_list.length < 5 && food_list.length != 1){
            position = 1;
            }
            else if(food_list.length == 1){
            position = 0;
            }
        }
        else if(position == 4){
          if(food_list[1] !== undefined){
          position = 1;
          }
        }
        else if(position == 6){
          if(food_list[3] !== undefined){
          position = 3;
          }
        }
        else if(1 == position || 3 == position){
          if(food_list[position - 1] !== undefined){
          position -= 1;
          }
        }
        else if(7 == position || 5 == position){
          if(food_list[position - 1] !== undefined){
          position -= 1;
          }
        }
        if(position_bf != position){
          audio.reset(1);
          audio.play(1);
        }

      break;
      case 39: // ArrowRight
      case 68: // D
      case 100: // d        
        img_h[position2].src = "img/nothing.png";
        if(position == 0 && food_list.length > 1 || position == 2 && food_list.length > 3 || position == 4 && food_list.length > 5 || position == 6 && food_list.length > 7 ){
          position += 1;
        }
        else if(position == 7 && food_list.length > 7 || position == 5 && food_list.length > 5){
          position -= 5;
        }
        else if(position == 1 && food_list.length > 4 || position == 3 && food_list.length > 6){
          position += 3;
        }
        else if(food_list.length == 5 && position == 3 || food_list.length == 6 && position == 3){
          position -= 1;
        }
        else if(position == 4 && food_list.length == 5){
          position = 0;
        }
        else if(position == 6 && food_list.length == 7){
          position = 2;
        }
        else if(position == 3 && food_list.length == 4 || position == 1  && food_list.length < 5 && food_list.length > 1){
          position -= 1;
        }
        typeWriter2();
        imgH();
        img_h[position2].src = "img/heart.png";
        if(position_bf != position){
          audio.reset(1);
          audio.play(1);
        }

      break;
    default:
      return;
  }

  //Sets the position for the img because theyre different
  if(position == 4){
    position2 = 0;
  }
  else if(position == 5){
    position2 = 1;
  }
  else if(position == 6){
    position2 = 2;
  }
  else if(position == 7){
    position2 = 3;
  }
  else if(position > -1 && position < 4){
    position2 = position;
  }
  if(position > -1 && position < 4){
    text = text1;
  }
  if(position > 3 && position < 8){
    text = text2;
  }
typeWriter2();
imgH();
img_h[position2].src = "img/heart.png";

}
});
