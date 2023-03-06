//Varaibles initilization
let frisk = document.querySelector("#frisk");
let start = document.querySelector(".start");
let wrapper = document.querySelector(".wrapper");
let heart = document.querySelector("#heart");
let audio = document.querySelector("#audio");
let audio1 = document.querySelector("#audio1");
let buttons = document.querySelectorAll('.button');
let img = document.querySelectorAll('.but');
let text_placeholder = document.querySelector(".text");
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
let attack_line = document.querySelector(".line_attack");
let mettaton_gif = document.querySelector(".mettaton_gif");
let hp_string = document.querySelector(".txt").innerHTML[0] + document.querySelector(".txt").innerHTML[1];
let hp_width = document.querySelector(".hpVis");
let canvas = document.querySelector("#canvas");
let food_list = ["Pie","I. Noodles","Steak","L. Hero","L. Hero","L. Hero","L. Hero","L. Hero"];
let health = ["72","72","60","40","40","40","40","40"];
let text = "";
let text1;
let text2;
let width_pr;
let food = "";
let stage = false;
let attack = false;
let num = false;
let x_disable = false;
let invent = false;
let position = false;
let started = false;
let canvas_t = false;
let sound_boolean = true;
let hp_mettaton = 1000;
let attack2 = 0;
let position2 = 0;
let hp_recover = 0;
let num_second = 0;
let time = -200;
let time2 = 0;
let mettaton_hp = 1000;

//Width for hp bar
hp_width.style.width = "100%"

//Waits for the button to be clicked and here you can change the animation in the start parameter
sound.addEventListener('click', () =>{
  if(sound.src.includes("sound.png")){
  sound.src = "img/sound_canceled.png";
  sound_boolean = false;
  }
  else if(sound.src.includes("sound_canceled.png")){
  sound.src = "img/sound.png";
  sound_boolean = true
  }
});

start_button.addEventListener('click', () =>{
  text = "* Mettaton NEO blocks the way!";
  html.classList.add("cursor_none");
  frisk.classList.remove("hidden");
  start_menu.classList.add("hidden_anim");
  setTimeout(function() {
  start_menu.classList.add("hidden");
  },1000);
  started = true;
  //Starting animation
  function start_animation(){
    if(started == true){
    setTimeout(function() {
      heart.classList.remove("hidden");
      frisk.classList.add("hidden");
      start.classList.add("black");
      setTimeout(function() {
        wrapper.classList.remove("hidden");
        wrapper.classList.remove("hidden");
        start.classList.add("hidden");
        heart.classList.add("move");
      }, 200);
    }, 2000); 
    setTimeout(function(){
      typeWriter();
      buttons[0].classList.add('yellow');
      heart.classList.add("hidden");
      img[0].src = "img/heart.png";
      if(sound_boolean === true){
      audio.play();
      }
      num = 0;
      stage = 0;
    },2400);
    }
    }
    start_animation();

    //No start animation
function no_start_animation(){
  if(started == true){
  start.classList.add("hidden");
  wrapper.classList.remove("hidden");
  img[0].src = "img/heart.png";
  buttons[0].classList.add('yellow');
  num = 0;
  stage = 0;
  setTimeout(function(){
    typeWriter();
    if(sound_boolean === true){
      audio.play();
    }
  },10);
  }
  }
  // no_start_animation();
});

//All functions initialization
//Function that will check for the num and then display check
function check(num){
  if(num_second == 0){
    img[num_second].src = "img/nothing.png"
    text = "<div class='attack_text'><img class= 'heart_img' src='img/heart.png'> * Mettaton NEO  <div class='hp_show_wrap'><div class='hp_shower fisrt_hp'></div></div></div>";
    typeWriter2();
  }
  if(num_second == 1){
    img[num_second].src = "img/nothing.png"
    text = "<img class= 'heart_img' src='img/heart.png'> * Mettaton NEO";
    typeWriter2();

  }
  if(num_second == 2){
    img[num_second].src = "img/nothing.png"
    position = 0;
    text =  ` <img class="heart_img" src="img/nothing.png"> * ${food_list[0]}<img class="heart_img i1" src="img/nothing.png"> * ${food_list[1]}
 <img class="heart_img" src="img/nothing.png"> * ${food_list[2]}<img class="heart_img i2" src="img/nothing.png"> * ${food_list[3]}
<div class="p1">PAGE 1</div>`;
    typeWriter2();
    imgH();
    img_h[0].src = "img/heart.png"
  }
  if(num_second == 3){
    img[num_second].src = "img/nothing.png"
    text = "<img class= 'heart_img' src='img/heart.png'> * Spare";
    typeWriter2();
  }
}

//Second checker
function check2(num){
  if(num_second == 0){
    x_disable = false;
    stage = false;
    num = false;
    text = `<div class="attack_wrap"><img src="img/attack.png" class="attack"></div>`
    typeWriter2();
    attack_function();
  }
  if(num_second == 1){
    text = `<img class= 'heart_img' src='img/heart.png'> * Check`;
    typeWriter2 ();
  }
  if(num_second == 2){
    x_disable = false;
    food = food_list[position];
    hp_recover = health[position];
    food_list.splice(position, 1);
    food_list[8-position] = " ";
    health.splice(position, 1);
    health[8-position] = "0";

    if(food == "Pie"){
      text = `* You ate the ${food}.
* Your HP was maxed out!`;
    }
    else if(food == "Steak"){
      text = `* You ate the ${food}.
* You recovered ${hp_recover} HP!`;
    }
    else if(food == "I. Noodles"){
      text = `* You ate the Instant Noodles.
* Your HP was maxed out!`;
    }
    else if(food == "L. Hero"){
      text = `* You eat the Legerndary Hero.
* You recovered ${hp_recover} HP!`;
    }
    hp_string = document.querySelector(".txt").innerHTML[0] + document.querySelector(".txt").innerHTML[1];
    HP_recover(hp_recover,hp_string,hp,hp_width);
    typeWriter();
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
    text = `* METTATON NEO - 90 ATK 9 DEF
* Dr. Alphys's greatest
  invention.`;
    typeWriter();
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
  text = "";
  typeWriter2();
  text_placeholder.classList.add("cube")
  setTimeout(function(){
    buttons[num_second].classList.remove('yellow');
    img[num_second].src = "";
    canvas.style.display = "";
    canvas_t = true;
  },1000);
}

//text_menu appear
function appear(){
  num = 0;
  classA();
  stage = 0;
  canvas.style.display = "none";
  text_placeholder.classList.remove("hidden");
  setTimeout(function(){
    text_placeholder.classList.remove("cube");
  },100);
  
  setTimeout(function(){
    text = "* Stage lights are blaring";
    typeWriter();
  },1000 + 100);
}

//img_h initialization
function imgH(){
  img_h = document.querySelectorAll(".heart_img");  
  return;
}

//Attack
function attack_function(){
  let timer;
    setTimeout(function(){
    clearTimeout(timeoutID);
    attack_line.classList.remove("hidden");
    attack = 0;
    time = -50;
    timer = setInterval(function() {
    time += 10;
    }, 10);
  },100);
  setTimeout(function(){
    attack_line.classList.add("move_attack");
  },200);
  setTimeout(function(){
    clearInterval(timer);
    if(attack !== false){
      attack = "MISS";
      attack_line.classList.add("appear_hide");
      attack_line.classList.remove("move_attack");
      attack_line.classList.add("hidden");
      elem_mettaton.classList.remove("hidden");
      hp_mettaton_attacked.innerHTML = attack;
      setTimeout(function() {
        attack_line.classList.add("hidden");
        elem_mettaton.classList.add("hidden");
        disappear();
      }, 900);
    }
    time = -50;
  },1600+200);
}

//HP recovering
function HP_recover(health,HP,HP_text,HP_width){
  HP = parseInt(HP) + parseInt(health);
  if(HP < 72){
    HP_text.innerHTML = `${HP}/72`;
    HP_width.style.width = `${HP/(72/100)}%`
  }
  if(HP >= 72){
    HP_text.innerHTML = `72/72`;
    HP_width.style.width = `100%`
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
  text_placeholder.innerHTML = "";
  clearTimeout(timeoutID);
  let i = 0;
  timeoutID = setInterval(() => {
    if (i >= text.length) {
      clearInterval(timeoutID);
      return;
    }
    text_placeholder.innerHTML += text[i];
    i++;
  }, 40);
}

//Function that writes the text in the text box instantly
function typeWriter2() {
  clearTimeout(timeoutID);
  text_placeholder.innerHTML = "";
  text_placeholder.innerHTML = text;
  return;
}
//End of the functions initialization

//A,a and left arrow keys listeners, movement to the right of the buttons
document.addEventListener('keyup', e => {
  const key = e.key;
  switch (key) {
    case 'ArrowLeft':
    case 'a': 
    case 'A':
      if(num !== false){
        num--;
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
  const key = e.key;
  switch (key) {
    case 'ArrowRight':
    case 'd':
    case 'D':
      if(num !== false){
        num++;
        audio1.play();
        classA();
      }
      break;
    default:
      return;
  }
});

//Z and enter, x key listeners
document.addEventListener('keyup', e => {
  const key = e.key;
  switch (key) {
    case 'Enter':
    case 'z':
    case 'Z':
      //If the user pressed enter while the attack
      if(attack === 0 && stage == false && attack !== false){
        attack = false;
        time2 = time/1000;
        if(time2 > 1.11){
          time2 = time2 - 1.11;
          time2 = 1.11 - time2;
        }
        attack2 = (time2/(0.8/100)/2 * (36/100)).toFixed(0);
        if(attack2 <= 0 ){
          attack2 = 0;
        }
        attack_gif.src = "img/attack.gif";
        attack_gif.classList.remove("hidden");
        elem_mettaton.classList.remove("hidden");
        hp_mettaton = hp_mettaton - attack2;
        hp_left.style.width = `${hp_mettaton/(1000/100)}%`;
        hp_mettaton_attacked.innerHTML = `${attack2}`;
        setTimeout(function(){
          elem_mettaton.classList.add("hidden");
          attack_gif.classList.add("hidden");
          disappear();
        },900);
        width_pr = attack_line.getBoundingClientRect().left / window.innerWidth;
        attack_line.style.left = `${width_pr*100}%`;
        attack_line.classList.add("appear_hide");
        attack_line.classList.remove("move_attack");
        setTimeout(function(){
          attack_line.style.left = '';
          attack_line.classList.add("hidden");
          attack_line.classList.remove("appear_hide");
        },400);

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
      if(stage == 3 && stage !== false && num_second == 1){
        stage = 4;
        check4(num_second);
        audio1.play();
       }
      if(stage == 2 && stage !== false && num_second == 0 || stage == 2 && stage !== false && num_second == 1 || stage == 2 && stage !== false && num_second == 2){
        stage = 3;
        check3(num_second);
        audio1.play();
       }
       if(stage == 1 && stage !== false){
        stage = 2;
        check2(num_second);
        audio1.play();
        }
      if(stage == 0 && stage !== false){
        stage = 1;
        check(num_second);
        audio1.play();
        x_disable = true;
        num = false;
        }

      break;
    case 'x':
    case 'X':
      //Go outn of the text menu
      if(x_disable == true){
      position = false;
      stage = 0;
      attack = false
      img[num_second].src = "img/heart.png";
      text = "* Stage lights are blaring";
      typeWriter();
      audio1.play();
      num = num_second;
      x_disable = false;
      }

      break;
      default:
      return;
  }
});

//Movement in the inventory
document.addEventListener('keyup', e => {
  if(position !== false){
    //Sets the text1 to this every time
  text1 = ` <img class="heart_img" src="img/nothing.png"> * ${food_list[0]}<img class="heart_img i1" src="img/nothing.png"> * ${food_list[1]}
 <img class="heart_img" src="img/nothing.png"> * ${food_list[2]}<img class="heart_img i2" src="img/nothing.png"> * ${food_list[3]}
<div class="p1">PAGE 1</div>`;
  text2 = ` <img class="heart_img" src="img/nothing.png"> * ${food_list[4]}<img class="heart_img i3" src="img/nothing.png"> * ${food_list[5]}
 <img class="heart_img" src="img/nothing.png"> * ${food_list[6]}<img class="heart_img i4" src="img/nothing.png"> * ${food_list[7]} 
<div class="p2">PAGE 2</div>`; 

  const key = e.key;
  //Movement in  the inventory
  switch (key) {
      case 'ArrowUp':
      case "W":
      case "w":
        img_h[position2].src = "img/nothing.png";
        if(position == 2 || position == 3){
          position -= 2;
        }
        else if(position == 0 || position == 1){
          position += 2;
        }
        else if(position == 4 || position == 5){
          position += 2;
        }
        else if(position == 6 || position == 7){
          position -= 2;
        }
        audio1.play();
        console.log(position);

      break;
      case 'ArrowDown':
      case "S":
      case "s":
        img_h[position2].src = "img/nothing.png";
        if(position == 2 || position == 3){
          position -= 2;
        }
        else if(position == 0 || position == 1){
          position += 2;
        }
        else if(position == 4 || position == 5){
          position += 2;
        }
        else if(position == 6 || position == 7){
          position -= 2;
        }
        audio1.play();
        console.log(position);

      break;
      case 'ArrowLeft':
      case "A":
      case "a":
        img_h[position2].src = "img/nothing.png";
        if(position == 2){
          position = 7;
        }
        else if(position == 0){
          position = 5;
        }
        else if(position == 4){
          position = 1;
        }
        else if(position == 6){
          position = 3;
        }
        else if(1 == position || 3 == position){
          position -= 1;
        }
        else if(7 == position || 5 == position){
          position -= 1;
        }
        audio1.play();
        console.log(position);

      break;
      case 'ArrowRight':
      case "D":
      case "d":
        img_h[position2].src = "img/nothing.png";
        if(position == 3){
          position = 6;
        }
        else if(position == 0){
          position = 1;
        }
        else if(position == 1){
          position = 4;
        }
        else if(position == 5){
          position = 0;
        }
        else if(position == 7){
          position = 2;
        }
        else if(2 == position || 4 == position){
          position += 1;
        }
        else if(6 == position || 4 == position){
          position += 1;
        }
        typeWriter2();
        imgH();
        img_h[position2].src = "img/heart.png";
        audio1.play();
        console.log(position);

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