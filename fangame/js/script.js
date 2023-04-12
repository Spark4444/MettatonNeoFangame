//Varaibles initilization
let frisk = document.querySelector("#frisk");
let start = document.querySelector(".start");
let wrapper = document.querySelector(".wrapper");
let heart = document.querySelector("#heart");
let audio = document.querySelector("#audio");
let audio1 = document.querySelector("#audio1");
let audio2 = document.querySelector("#audio2");
let audio3 = document.querySelector("#audio3");
let audio4 = document.querySelector("#audio4");
let audio5 = document.querySelector("#audio5");
let audio6 = document.querySelector("#audio6");
let audio7 = document.querySelector("#audio7");
let audio8 = document.querySelector("#audio8");
let buttons = document.querySelectorAll('.button');
let img = document.querySelectorAll('.but');
let text_placeholder = document.querySelector(".text");
let text_chatbox_main = document.querySelector(".wrap_box_text");
let text_chatbox = document.querySelector(".chat_box");
let triangle = document.querySelector(".triangle");
let img_h = document.querySelectorAll(".heart_img");  
let start_button = document.querySelector(".start_button");
let start_menu = document.querySelector(".start_menu");
let sound = document.querySelector(".sound");
let html = document.querySelector("html");
let hp = document.querySelector(".txt");
let hp_mettaton_attacked = document.querySelector(".hp-");
let elem_mettaton = document.querySelector(".mettaton_hp");
let hp_left = document.querySelector(".hp_shower");
let attack_gif = document.querySelector(".attack_png");
let mettaton_gif = document.querySelector(".mettaton_gif");
let volume = document.querySelector("#volume");
let hp_str = document.querySelector(".txt").innerHTML[0] + document.querySelector(".txt").innerHTML[1];
let hp_width = document.querySelector(".hpVis");
let canvas = document.querySelector("#canvas");
let food_list = ["Pie","I. Noodles","Steak","L. Hero","L. Hero","L. Hero","L. Hero","L. Hero"];
let health = ["72","72","60","40","40","40","40","40"];
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
let hp_mettaton = 396;
let position2 = 0;
let hp_recover = 0;
let num_second = 0;
let timer = 0;
let letterId = 0;
let attack_line;
let attack_line_timeout;
let timer_int;
let intervalL;
let shakeElement;
let text1;
let text2;
let text_2;
let text_3;
// alert(window.innerHeight + " " + window.innerWidth);

//Sets volume of the music to 20%
audio.volume = 0;
audio.volume = 0.20;
audio.pause();
audio1.pause();
audio2.pause();
audio3.pause();
audio4.pause();
audio5.pause();
audio6.pause();
audio7.pause();
audio8.pause();

// Pause audio when user leaves the tab
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    audio.pause();
    audio2.pause();
  } else {
    audio.play();
    audio2.play();
  }
});

//Width for hp bar
hp_width.style.width = "100%"

//Plays starting music
start_menu.addEventListener('mousedown', () =>{
  if(started !== true){
  audio2.play();
  }
});

//The bar will play a sound when you click on it
volume.addEventListener("mousedown", () => {
  audio1.currentTime = "0";
  audio1.play();
});

// Update the volume when the mouse is released from the slider
volume.addEventListener("mouseup", () => {
  audio.volume = parseInt(volume.value) / 100;
});

//Waits for the button to be clicked and here you can change the animation in the start parameter
start_button.addEventListener('click', () =>{
  if(started !== true){
  audio2.muted = true;
  audio1.currentTime = "0";
  audio1.play();
  html.classList.add("cursor_none");
  frisk.classList.remove("hidden");
  start_menu.classList.add("hidden_anim");
  setTimeout(function() {
  start_menu.classList.add("hidden");
  },1000);
  started = true;
    //Starting animation
    function start_animation(){
    if(started === true){
    setTimeout(function() {
    appear(`* Mettaton NEO blocks the way!`);
    stage = false
    },1500);
    setTimeout(function() {
    heart.classList.remove("hidden");
    audio4.play();
    frisk.classList.add("hidden");
    start.classList.add("black");
    setTimeout(function() {
      wrapper.classList.remove("hidden");
      start.classList.add("hidden");
      heart.classList.add("move");
    }, 200);
    setTimeout(function() {
    audio.muted = false;
    audio.currentTime = 0;
    audio.play();
    }, 1000);
    }, 2000); 
    setTimeout(function(){
    start_button.innerHTML = "RESTART";
    start_button.style.width = "38%";
    buttons[0].classList.add('yellow');
    heart.classList.add("hidden");
    audio7.play();
    img[0].src = "img/heart.png";
    num = 0;
    },2400);
    }
    }

    //No start animation
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
      audio.muted = false;
      audio.currentTime = 0;
      audio.play();
    },10);
    }
    }

  if(anim === true){
    start_animation();
  }
  else if(anim === false){
    no_start_animation();
  }
}
});

//All functions initialization
//Function that will check for the num and then display check
function check(num){
  if(num_second == 0){
    img[num_second].src = "img/nothing.png"
    text = `<div class='attack_text'><img class= 'heart_img smaller_img' src='img/heart.png'><div id="shake-element" class="WidthN"> * Mettaton NEO </div> <div class='hp_show_wrap'><div class='hp_shower fisrt_hp' style='width:${HP_width_small};'></div></div></div>`;
    setTimeout(() => {
      shakeLetters();
    }, 10);
    typeWriter2();
  }
  if(num_second == 1){
    img[num_second].src = "img/nothing.png"
    text = `<div class="flex"><img class= 'heart_img smaller_img' src='img/heart.png'><div id="shake-element"> * Mettaton NEO</div></div>`;
    setTimeout(() => {
      shakeLetters();
    }, 10);
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
    setTimeout(() => {
      shakeLetters();
    }, 10);
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
    setTimeout(() => {
      shakeLetters();
    }, 10);
    typeWriter2 ();
  }
  if(num_second == 2){
    x_disable = false;
    food = food_list[position];
    hp_recover = health[position];
    food_list.splice(position, 1);
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
    chat_box();
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
      audio5.play();
      elem_mettaton.classList.remove("hidden");
      attack_gif.classList.remove("hidden");
      attack_gif.src = "img/attack.gif";
      attack_line.classList.remove("move_attack");
      attack_line.classList.add("hidden");
      setTimeout(() => {
        attack_line.classList.remove("appear_hide");
        attack_line.classList.add("hidden");
        attack_gif.classList.add("hidden");
        elem_mettaton.classList.add("hidden");
        canvas.classList.remove("text_bc_im");
        attack_gif.src = "img/nothing.png";
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
    audio3.play();
    top1 = 19.3;
    top2 = 19.3;
    left1 = 50;
    left2 = 50;
    projectile.innerHTML == "";
    mettaton_gif.style.filter = "";
    audio2.muted = false;
    number = 1;
    restarts++;
    audio2.currentTime = 0;
    audio.muted = true;
    clearInterval(intervalId);
    clearInterval(intervalId2);
    clearInterval(moveHeartI);
    clearInterval(HP_show);
    clearInterval(ten_secs);
    clearInterval(lightning);
    clearInterval(laser_time);
    clearInterval(hand_time);
    clearInterval(head_time);
    food_list = ["Pie","I. Noodles","Steak","L. Hero","L. Hero","L. Hero","L. Hero","L. Hero"];
    health = ["72","72","60","40","40","40","40","40"];
    hp_mettaton = 396;
    one = 0;
    hp_str = "72";
    hp.innerHTML = `72/72`;
    hp_width.style.width = `100%`;
    hp_left.style.width = `${hp_mettaton/(396/100)}%`;
    HP_width_small = `${hp_mettaton/(396/100)}%`;
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

//Removes img that is needed to make the inventory work because of the DOM initialization
img_h[0].remove();

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
  audio7.currentTime = 0;
  audio7.play();
  text_placeholder.innerHTML = "";
  clearTimeout(timeoutID);
  clearInterval(intervalL);
    text_placeholder.innerHTML = `<div id="shake-element"></div>`;
    setTimeout(() => {
      shakeElement = document.querySelector("#shake-element");
      let i = 0;
      timeoutID = setInterval(() => {
        if (i >= text.length) {
          setTimeout(() => {
            shakeLettersArr();
            audio7.pause();
          }, 100);
          clearInterval(timeoutID);
          return;
        }
        shakeElement.innerHTML += text[i];
        i++;
      }, 40);
    }, 10);
}

//Function that writes the text in the text box letter by letter and works with arrays
function typeWriterArr() {
  audio7.currentTime = 0;
  audio7.play();
  text_placeholder.innerHTML = "";
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
                    audio7.pause();
                    shakeLettersArr();
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
  audio6.currentTime = 0;
  audio6.play();
  text_chatbox.innerHTML = "";
  clearTimeout(timeoutID);
  clearInterval(intervalL);
  let i = 0;
  timeoutID = setInterval(() => {
    if (i >= text_write.length) {
      setTimeout(() => {
        audio6.pause();
      },100);
      clearInterval(timeoutID);
      return;
    }
    text_chatbox.innerHTML += text_write[i];
    i++;
  }, 40);
}

//Function that writes the text in the text box instantly
function typeWriter2() {
  audio7.currentTime = 0;
  audio7.pause();
  clearTimeout(timeoutID);
  clearInterval(intervalL);
  text_placeholder.innerHTML = "";
  text_placeholder.innerHTML = text;
  shakeLettersArr();
  return;
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
        audio1.currentTime = "0";
        audio1.play();
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
        audio1.currentTime = "0";
        audio1.play();
        classA();
      }
      break;
    default:
      return;
  }
});
}, 3000);
//Z and enter, x key listeners
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
          attack_line.style.left = `${attack_line.getBoundingClientRect().left.toFixed(0)-401}px`;
          attack_line.classList.remove("move_attack");
          audio5.play();
          if(timer > 50){
            timer = timer - 50;
            timer = 50 - timer;
            hp_mettaton_attacked.innerHTML = (0.35*calculatePercentage(timer,50)).toFixed(0);
            hp_mettaton -= (0.35*calculatePercentage(timer,50)).toFixed(0);
            attack_line.classList.add("appear_hide");
          }
          else if(timer > 47 && timer < 51){
            hp_mettaton_attacked.innerHTML = "36";
            hp_mettaton -= 36;
            attack_line.classList.add("appear_hide_yellow");
          }
          else if(timer < 48){
            hp_mettaton_attacked.innerHTML = (0.35*calculatePercentage(timer,47)).toFixed(0);
            hp_mettaton -= (0.35*calculatePercentage(timer,47)).toFixed(0);
            attack_line.classList.add("appear_hide");
          }
          hp_left.style.width = `${hp_mettaton/(396/100)}%`;
          HP_width_small = `${hp_mettaton/(396/100)}%`;
          elem_mettaton.classList.remove("hidden");
          attack_gif.classList.remove("hidden");
          attack_gif.src = "img/attack.gif";
          attack_line.classList.remove("move_attack");
          setTimeout(() => {
            attack_line.classList.remove("appear_hide");
            attack_line.classList.remove("appear_hide_yellow");
            attack_line.classList.add("hidden");
            attack_gif.classList.add("hidden");
            elem_mettaton.classList.add("hidden");
            attack_line.classList.add("hidden");
            canvas.classList.remove("text_bc_im");
            attack_gif.src = "img/nothing.png";
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
        audio1.currentTime = "0";
        audio1.play();
       }
      if(stage == 2 && stage !== false && num_second == 0 || stage == 2 && stage !== false && num_second == 1 || stage == 2 && stage !== false && num_second == 2){
        stage = 3;
        check3(num_second);
        audio1.currentTime = "0";
        audio1.play();
       }
       if(stage == 1 && stage !== false){
        stage = 2;
        check2(num_second);
        audio1.currentTime = "0";
        audio1.play();
        }
      if(stage == 0 && stage !== false){
        audio7.pause();
        clearTimeout(timeoutID);
        stage = 1;
        check(num_second);
        audio1.currentTime = "0";
        audio1.play();
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
      audio1.currentTime = "0";
      audio1.play();
      num = num_second;
      }

      break;
      default:
      return;
  }
});

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
          audio1.currentTime = "0";
          audio1.play();
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
          audio1.currentTime = "0";
          audio1.play();
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
          audio1.currentTime = "0";
          audio1.play();
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
        audio1.currentTime = "0";
        audio1.play();
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