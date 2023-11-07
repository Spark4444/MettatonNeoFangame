let HP_show;
let intervalId2;
let intervalId;
let ten_secs;
let moveHeartI;
let number_lightning;
let lightningElem;
let lightning;
let leg1_l;
let leg2_l;
let hyp_l;
let laser;
let laser_num;
let laser_time;
let hand;
let count_laser;
let randomNum;
let laser_white;
let hand_time;
let hand2;
let count_hand2;
let laser_head;
let head_time;
let hyp_t;
let leg_t;
let leg2_t;
let left;
let dash_leg;
let leg_dash;
let random_leg;
let leg_dash_count;
let leg_dash_count_top;
let leg_dash_transition;
let worked_legs_dash;
let yellow_heart;
let yellow_heart_out;
let yellow_heartMove;
let bullet;
let yellow_heart_red;
let width_yellow;
let src_yellow;
let left_yellow;
let top_yellow;
let bomb_interval;
let bomb;
let random_bomb;
let explosion;
let bomb_timeout;
let wings_rockets_inter;
let wing1;
let wing2;
let rocket;
let rocket_count_left;
let rocket_inter;
let rocket_inter2;
let rocket_random;
let rocket_count_left_move;
let wing;

//Attack 1(legs)
function attack1_legs(){ 
    moveHeartI = setInterval(moveHeart, 10);
    x = 47;
    y = 31;
    drawHeart(x, y);
    projectile.innerHTML = `<img src="img/leg1.png" style="left:${randomRange(23,71)}%" class="leg1 legs" alt=""><img src="img/leg2.png" style="left:${randomRange(23,71)}%" class="leg2 legs" alt="">`
    mettaton_gif.style.opacity = "0";
    leg1 = document.querySelector(".leg1");
    leg2 = document.querySelector(".leg2");
    legs = document.querySelectorAll(".legs");
    number = 1
  
    intervalId = setInterval(() => {
        if(number%3 === 1){
          leg1.classList.add("legs_down");
          leg2.classList.add("legs_down");
        }
        else if(number%3 === 2){
          leg1.classList.remove("legs_down");
          leg2.classList.remove("legs_down");
        }
        else if(number%3 === 0 && number != 0){
          leg1.style.left = `${randomRange(23,71)}%`
          leg2.style.left = `${randomRange(23,71)}%`
        }
        number++;
    }, 333);

    intervalId2 = setInterval(() => {
    if(t_f_wait === false){
    checkCollision(legs, img_M, 20, false, false);
    }
    }, 10);
      
    
    HP_show = setInterval(() => {
      showHP();
    }, 10);
  
    ten_secs = setTimeout(() => {
      clearInterval(intervalId);
      clearInterval(intervalId2);
      clearInterval(moveHeartI);
      clearInterval(HP_show);
      appear("* Stage lights are blaring");
    }, 9999);
  }

//Attack 2(smoke and lighting)
function attack2_smoke(){
  projectile.innerHTML = `<img src="img/smoke.png" class="smoke" style="opacity:0" alt="">`;
  x = 47;
  y = 31;
  moveX = 0;
  moveY = 0;
  number_lightning = 0;
  mettaton_gif.style.filter = "brightness(50%)";
  drawHeart(x, y);

  setTimeout(() => {
    document.querySelector(".smoke").style.opacity = "1";
  },10);

  lightning = setInterval(function(){
  let point1 = { x: `${randomRange(0,97)}%`, y: `${randomRange(0,48)}%` };//initial position of element
  let point2 = { x: `${randomRange(24,73)}%`, y: `${randomRange(57,74)}%` };//it moves to this position
  number_lightning++;
  if(number_lightning == 10){
    number_lightning = 1;
  }
  let startX = parseInt(point1.x) * window.innerWidth / 100;
  let startY = parseInt(point1.y) * document.documentElement.scrollHeight / 100;
  let endX = parseInt(point2.x) * window.innerWidth / 100;
  let endY = parseInt(point2.y) * document.documentElement.scrollHeight / 100;
  leg1_l = endY - startY;
  leg2_l = endX - startX; 
  if(leg2_l < 0){
    leg2_l = leg2_l - leg2_l - leg2_l;
    left = true;
  }
  else{
    left = false;
  }
  hyp_l = calculateHypotenuse(leg2_l,leg1_l);
  if(left === false){
    let calcR = -calculateAngle(hyp_l,leg1_l);
    projectile.innerHTML += `<img src="img/lightning.gif" id="${number_lightning}" class="lightning" alt="" style="left:${point1.x}; top:${point1.y};rotate:${calcR}deg">`;
  }
  if(left === true){
    let calcR = calculateAngle(hyp_l,leg1_l) 
    projectile.innerHTML += `<img src="img/lightning.gif" id="${number_lightning}" class="lightning" alt="" style="left:${point1.x}; top:${point1.y};rotate:${calcR}deg">`;
  }
  setTimeout(() => {
  if(number_lightning < 11){
  lightningElem = document.querySelectorAll(`#\\3${number_lightning}`);
  }

  lightningElem[lightningElem.length - 1].style.left = `${point2.x}`;
  lightningElem[lightningElem.length - 1].style.top = `${point2.y}`;
  }, 10);

  setTimeout(() => {
    lightningElem[lightningElem.length - 1].remove();
  }, 500);

  },600);

  HP_show = setInterval(() => {
    showHP();
  }, 10);

  moveHeartI = setInterval(moveHeart, 10);
  
  setTimeout(()=>{
  intervalId2 = setInterval(() => {
    if(t_f_wait === false){
      checkCollision(lightningElem, img_M, 15, false, false);
  }
  }, 10);
  },601);
  
  ten_secs = setTimeout(() => {
    clearInterval(lightning);
    clearInterval(intervalId2);
    clearInterval(moveHeartI);
    clearInterval(HP_show);
    img_M.style.animation = "";
    mettaton_gif.style.filter = "";
    appear("* Stage lights are blaring");
  }, 11900);
}

//Attack 3(hand and lasers)
function attack3_lasers(){
  if(randomPick(0,1) == 1){
    randomNum = randomRange(21,74);
    projectile.innerHTML = `<img src="img/hand.png" class="hand1" style="opacity:0; top:5%; left:${randomNum}%;">`;
    setTimeout(() => {
      hand = document.querySelector(".hand1");
      hand.style.opacity = "1";
      projectile.innerHTML += `<div class="laser" id="l${laser_num}" style="top: ${top_laser2}%; left:${randomNum + 2.3}%"></div>`;
      setTimeout(() => {
        laser = document.querySelectorAll(".laser");
        laser[laser.length-1].style.height = "69%";
      },250);
    },10);
  }
  else{
    randomNum = randomRange(44,65);
    projectile.innerHTML = `<img src="img/hand.png" class="hand1" style="opacity:0; top:${randomNum}%; left:90%; rotate:90deg;">`;
    setTimeout(() => {
      hand = document.querySelector(".hand1");
      hand.style.opacity = "1";
      projectile.innerHTML += `<div class="laser" id="l${laser_num}" style="top: ${randomNum + top_laser}%; left:86%"></div>`;
      setTimeout(() => {
      laser = document.querySelectorAll(".laser");
      laser[laser.length-1].style.width = "86.5%"; 
      laser[laser.length-1].style.left = "0%"; 
      },250);
    },10);
  }

  mettaton_gif.style.opacity = "0";
  x = 47;
  y = 31;
  moveX = 0;
  moveY = 0;
  count_laser = 0;
  laser_num = 1;
  laser = 0;
  drawHeart(x, y);

  intervalId2 = setInterval(() => {
    if(t_f_wait === false){
      laser = document.querySelectorAll(".laser");
      checkCollision(laser, img_M, 30, false, true);
    }
  }, 10);

  HP_show = setInterval(() => {
    showHP();
  }, 10);

  moveHeartI = setInterval(moveHeart, 10);

  setTimeout(function(){
    count_laser += 1;
    laser_num = 1;
    if(hand.style.left == "90%"){
      if(count_laser != 1){
        setTimeout(() => {
        randomNum = randomRange(21,74);
        hand = document.querySelector(".hand1");
        hand.style.top = `5%`;
        hand.style.left = `${randomNum}%`;
        hand.style.rotate = ``;
        setTimeout(() => {
        projectile.innerHTML += `<div class="laser" id="l${laser_num}" style="top: ${top_laser2}%; left:${randomNum + 2.3}%"></div>`;
        setTimeout(() => {
          laser = document.querySelectorAll(".laser");
          laser[laser.length-1].style.height = "69%";
        },10);
        }, 500);
        }, 10);
      }
    }
    else if(hand.style.top == "5%"){
      if(count_laser != 1){
        setTimeout(() => {
        randomNum = randomRange(44,65);
        hand = document.querySelector(".hand1");
        hand.style.top = `${randomNum}%`;
        hand.style.left = `90%`;
        hand.style.rotate = `90deg`;
        setTimeout(() => {
        projectile.innerHTML += `<div class="laser" id="l${laser_num}" style="top: ${randomNum + top_laser}%; left:86%"></div>`;
        setTimeout(() => {
          laser = document.querySelectorAll(".laser");
          laser[laser.length-1].style.width = "86.5%"; 
          laser[laser.length-1].style.left = "0%"; 
        },10);
        }, 0);
        }, 10);
      }
    }
  }, 10);

  setTimeout(() => {
    clearInterval(laser_time);
    laser_time = setInterval(function(){
      count_laser += 1;
      if(count_laser > 4){
        laser_num = 0;
      }
      if(count_laser == 3){
        laser_num = 2;
      }
      if(hand.style.left == "90%"){
        if(count_laser != 1){
          setTimeout(() => {
          randomNum = randomRange(21,74);
          hand = document.querySelector(".hand1");
          hand.style.top = `5%`;
          hand.style.left = `${randomNum}%`;
          hand.style.rotate = ``;
          setTimeout(() => {
          projectile.innerHTML += `<div class="laser" id="l${laser_num}" style="top: ${top_laser2}%; left:${randomNum + 2.3}%"></div>`;
          setTimeout(() => {
            laser = document.querySelectorAll(".laser");
            laser[laser.length-1].style.height = "69%";
          },10);
          }, 500);
          }, 10);
        }
      }
      else if(hand.style.top == "5%"){
        if(count_laser != 1){
          setTimeout(() => {
          randomNum = randomRange(44,65);
          hand = document.querySelector(".hand1");
          hand.style.top = `${randomNum}%`;
          hand.style.left = `90%`;
          hand.style.rotate = `90deg`;
          setTimeout(() => {
          projectile.innerHTML += `<div class="laser" id="l${laser_num}" style="top: ${randomNum + top_laser}%; left:86%"></div>`;
          setTimeout(() => {
            laser = document.querySelectorAll(".laser");
            laser[laser.length-1].style.width = "86.5%"; 
            laser[laser.length-1].style.left = "0%"; 
          },10);
          }, 500);
          }, 10);
        }
      }
    }, 1000); 
  },11);
  ten_secs = setTimeout(() => {
    clearInterval(laser_time);
    clearInterval(intervalId2);
    clearInterval(moveHeartI);
    clearInterval(HP_show);
    img_M.style.animation = "";
    appear("* Stage lights are blaring");
  }, 11999);
} 

//Attack 4 hand
function attack4_hand(){
  projectile.innerHTML = `<img src="img/hand2.png" class="hand2" style="left: 40%;">`;

  setTimeout(() => {
    hand2 = document.querySelectorAll(".hand2");
  },10);

  mettaton_gif.style.opacity = "0";
  x = 47;
  y = 31;
  moveX = 0;
  moveY = 0;
  count_hand2 = 0;
  drawHeart(x, y);

  intervalId2 = setInterval(() => {
    if(t_f_wait === false){
      hand2 = document.querySelectorAll(".hand2");
      checkCollision(hand2, img_M, 30, false, false);
    }
  }, 10);

  HP_show = setInterval(() => {
    showHP();
  }, 10);

  moveHeartI = setInterval(moveHeart, 10);

  setTimeout(() => {
  hand_time = setInterval(function(){
    count_hand2++;
    if(count_hand2 % 3 === 1){
      hand2[hand2.length - 1].classList.add("hand2_down");
    }
    if(count_hand2 % 3 === 2){
      hand2[hand2.length - 1].classList.remove("hand2_down");
    }
    if(count_hand2 % 3 === 0){
      hand2[hand2.length - 1].style.left = `${img_M.getBoundingClientRect().left-window.innerWidth/100*8}px`;
    }
  },250);
  }, 400);

  ten_secs = setTimeout(() => {
    clearInterval(hand_time);
    clearInterval(intervalId2);
    clearInterval(moveHeartI);
    clearInterval(HP_show);
    img_M.style.animation = "";
    appear("* Stage lights are blaring");
  }, 12000);
}

//Attack 5 head
function attack5_head(){
  mettaton_gif.style.opacity = "1";
  x = 47;
  y = 31;
  moveX = 0;
  moveY = 0;
  drawHeart(x, y);

  intervalId2 = setInterval(() => {
    if(t_f_wait === false){
      laser_head = document.querySelectorAll(".laser_head");
      checkCollision(laser_head, img_M, 20, false, true);
    }
  }, 10);

  HP_show = setInterval(() => {
    showHP();
  }, 10);

  moveHeartI = setInterval(moveHeart, 10);

  head_time = setInterval(function(){
    leg_t = img_M.getBoundingClientRect().top - window.innerHeight/100 * 16;
    leg2_t = img_M.getBoundingClientRect().left - window.innerWidth/100 * 48;
    if(leg2_t < 0){
      leg2_t = leg2_t - leg2_t - leg2_t;
      left = true;
    }
    else{
      left = false;
    }
    hyp_t = calculateHypotenuse(leg2_t,leg_t);
    if(left === false){
    let calcR = -calculateAngle(hyp_t,leg_t);
    projectile.innerHTML += `<div class="laser_head" id="l${randomRange(0,2)}" style="rotate:${calcR}deg"></div>`;
    }
    if(left === true){
    let calcR = calculateAngle(hyp_t,leg_t) 
    projectile.innerHTML += `<div class="laser_head" id="l${randomRange(0,2)}" style="rotate:${calcR}deg"></div>`;
    }
    
    setTimeout(() => {
    laser_head = document.querySelectorAll(".laser_head");
    laser_head[laser_head.length - 1].style.left = `${img_M.getBoundingClientRect().left}px`;
    laser_head[laser_head.length - 1].style.top = `${img_M.getBoundingClientRect().top}px`;
    setTimeout(() => {
      laser_head[laser_head.length - 1].style.left = `${img_M.getBoundingClientRect().left + img_M.getBoundingClientRect().left - window.innerWidth/100 * 48}px`;
      laser_head[laser_head.length - 1].style.top = `${img_M.getBoundingClientRect().top + img_M.getBoundingClientRect().top - window.innerHeight/100 * 16}px`;
    }, 10);
    }, 10);

  },710);

  ten_secs = setTimeout(() => {
    clearInterval(head_time);
    clearInterval(intervalId2);
    clearInterval(moveHeartI);
    clearInterval(HP_show);
    img_M.style.animation = "";
    appear("* Stage lights are blaring");
  }, 10649);
}

//attack 6 legs dashing on you
function attack6_dash(){
  random_leg = randomRange(1,2);
  projectile.innerHTML = `<img src="img/${random_leg + 3}.png" id="l${random_leg}" class="leg_dash">`;
  mettaton_gif.style.opacity = "0";
  x = 47;
  y = 31;
  moveX = 0;
  moveY = 0;
  drawHeart(x, y);
  leg_dash_count = 0;
  leg_dash_transition = 500;
  leg_dash_count_top = "";
  intervalId2 = setInterval(() => {
    if(t_f_wait === false){
      leg_dash = document.querySelectorAll(".leg_dash");
      leg_dash[leg_dash.length - 1].style.transition = "0.5s";
      checkCollision(leg_dash, img_M, 20, false, true);
    }
  }, 10);

  HP_show = setInterval(() => {
    showHP();
  }, 10);

  moveHeartI = setInterval(moveHeart, 10);

  dash_leg = setInterval(() => {
    leg_dash_count++;
    if(leg_dash_count%3 == 1){
      leg_dash[leg_dash.length - 1].classList.add("leg_dash_right");
    }
    if(leg_dash_count%3 == 2){
      leg_dash[leg_dash.length - 1].classList.remove("leg_dash_right");
    }
    if(leg_dash_count%3 == 0){
      if(leg_dash_count_top !== ""){
        leg_dash[leg_dash.length - 1].classList.remove(`${leg_dash_count_top}`);
      }
      worked_legs_dash = false;
      if(leg_dash_count_top == "" && worked_legs_dash === false){
        worked_legs_dash = true;
        leg_dash_count_top = randomPick3("leg_dash_bottom","leg_dash_top","");
        if(leg_dash_count_top == "leg_dash_bottom" || leg_dash_count_top == "leg_dash_top"){
          random_leg = 0;
        }
        else{
        random_leg = randomRange(1,2);
        }
        leg_dash[leg_dash.length - 1].style.transition = "0.5s";
        leg_dash_transition = 500;
      }
      if(leg_dash_count_top == "leg_dash_bottom" && worked_legs_dash === false){
        worked_legs_dash = true;
        leg_dash_count_top = "";
        random_leg = randomRange(1,2);
        leg_dash[leg_dash.length - 1].style.transition = "1s";
        leg_dash_transition = 1000;
      }
      if(leg_dash_count_top == "leg_dash_top" && worked_legs_dash === false){
        worked_legs_dash = true;
        leg_dash_count_top = "";
        random_leg = randomRange(1,2);
        leg_dash[leg_dash.length - 1].style.transition = "1s";
        leg_dash_transition = 1000;
      }
      leg_dash[leg_dash.length - 1].src = `img/${random_leg + 3}.png`;
      leg_dash[leg_dash.length - 1].setAttribute('id', `l${random_leg}`);
      if (leg_dash_count_top !== "") {
        if (!leg_dash[leg_dash.length - 1].classList.contains(leg_dash_count_top)) {
          leg_dash[leg_dash.length - 1].classList.add(leg_dash_count_top);
        }
      }
    }
  }, leg_dash_transition);

  ten_secs = setTimeout(() => {
    clearInterval(dash_leg);
    clearInterval(intervalId2);
    clearInterval(moveHeartI);
    clearInterval(HP_show);
    img_M.style.animation = "";
    appear("* Stage lights are blaring");
  }, 20000);
}

//attack 7 bombs
function attack7_bombs(){
  projectile.innerHTML = ``;
  mettaton_gif.style.opacity = "1";
  x = 47;
  y = 31;
  moveX = 0;
  moveY = 0;
  drawHeart(x, y);

  intervalId2 = setInterval(() => {
    if(t_f_wait === false){
      bomb = document.querySelectorAll(".bomb");
      explosion = document.querySelectorAll(".explosion");
      if (explosion !== null){
      checkCollision(explosion, img_M, 20, false, false);
      }
      if(bomb !== null){
        checkCollision(bomb, img_M, 10, true, false);
      }
    }
  }, 10);

  HP_show = setInterval(() => {
    showHP();
  }, 10);

  setTimeout(() => {
    random_bomb = `${randomRange(23,69)}%`;
    projectile.innerHTML += '<img src="img/bomb.gif" class="bomb">';
    setTimeout(() => {
      bomb[bomb.length - 1] = document.querySelectorAll(".bomb");
      bomb[bomb.length - 1].style.left = random_bomb;
      bomb[bomb.length - 1].classList.add("bomb_down");
      bomb_timeout = setTimeout(() => {
        bomb[bomb.length - 1].src = "img/explosion.gif";
        bomb[bomb.length - 1].classList.remove("bomb");
        bomb[bomb.length - 1].classList.remove("bomb_down");
        bomb[bomb.length - 1].style.left = `${parseInt(random_bomb) - 5}%`;
        bomb[bomb.length - 1].classList.add("explosion");
        explosion[explosion.length - 1] = bomb[bomb.length - 1];
          setTimeout(() => {
          explosion = document.querySelectorAll(".explosion");
          if (explosion !== null){
          audio.play(13);
          explosion[explosion.length - 1].classList.add("transition");
          explosion[explosion.length - 1].style.width = "0%";
          explosion[explosion.length - 1].style.top = `74%`;
          explosion[explosion.length - 1].style.left = `${parseInt(explosion[explosion.length - 1].style.left) + 9}%`;
          setTimeout(() => {
          explosion = document.querySelectorAll(".explosion");
          explosion[explosion.length - 1].remove();
        }, 900);
        }
       }, 10);
      }, 1000);
    }, 10);
  }, 1);

  bomb_interval = setInterval(() => {
    random_bomb = `${randomRange(23,69)}%`;
    projectile.innerHTML += '<img src="img/bomb.gif" class="bomb">';
    setTimeout(() => {
      bomb = document.querySelectorAll(".bomb");
      bomb[bomb.length - 1].style.left = random_bomb;
      bomb[bomb.length - 1].classList.add("bomb_down");
      bomb_timeout = setTimeout(() => {
        audio.play(13);
        bomb[bomb.length - 1].src = "img/explosion.gif";
        bomb[bomb.length - 1].classList.remove("bomb");
        bomb[bomb.length - 1].classList.remove("bomb_down");
        bomb[bomb.length - 1].style.left = `${parseInt(random_bomb) - 5}%`;
        bomb[bomb.length - 1].classList.add("explosion");
        explosion[explosion.length - 1] = bomb[bomb.length - 1];
          setTimeout(() => {
          explosion = document.querySelectorAll(".explosion");
          if (explosion[explosion.length - 1] !== null){
          audio.play(13);
          explosion[explosion.length - 1].classList.add("transition");
          explosion[explosion.length - 1].style.width = "0%";
          explosion[explosion.length - 1].style.top = `74%`;
          explosion[explosion.length - 1].style.left = `${parseInt(explosion[explosion.length - 1].style.left) + 9}%`;
          setTimeout(() => {
            explosion = document.querySelectorAll(".explosion");
            explosion[explosion.length - 1].remove();
        }, 900);
        }
       }, 10);
      }, 1000);
    }, 10);
  }, 2020);

  moveHeartI = setInterval(moveHeart, 10);

  ten_secs = setTimeout(() => {
    clearInterval(bomb_interval);
    clearInterval(bomb_interval);
    clearInterval(intervalId2);
    clearInterval(moveHeartI);
    clearInterval(HP_show);
    img_M.style.animation = "";
    appear("* Stage lights are blaring");
  }, 20000);
}

//attack 8 wings,rockets
function attack8_wings(){
  projectile.innerHTML = `<img src="img/2.png" class="wing2 wing"><img src="img/1.png" class="wing1 wing">`;
  mettaton_gif.style.opacity = "0";
  x = 47;
  y = 31;
  moveX = 0;
  moveY = 0;
  drawHeart(x, y);
  rocket_count_left_move = 0;
  rocket_count_left = 17;

  setInterval(() => {
    wing1 = document.querySelectorAll(".wing1");
    wing2 = document.querySelectorAll(".wing2");
    wing2[wing2.length - 1].classList.add("wing2_down");
    wing1[wing1.length - 1].classList.add("wing1_down");
  }, 10);
  
  intervalId2 = setInterval(() => {
    wing = document.querySelectorAll(".wing");
    rocket = document.querySelectorAll(".rocket");
    if(t_f_wait === false && rocket.length > 1){
      checkCollision(rocket, img_M, 20, true, false);
      checkCollision(wing, img_M, 20, false, false);
    }
  }, 10);

  HP_show = setInterval(() => {
    showHP();
  }, 10);

  wings_rockets_inter = setInterval(() => {
    rocket_count_left_move = 0;
    rocket_count_left = 40;
    rocket_random = randomRange(1,3);
    rocket_inter2 = setInterval(() => {
    rocket_count_left_move++;
    rocket_count_left += 4;
    if(rocket_count_left_move !== rocket_random){
    projectile.innerHTML += `<img src="img/rocket.gif" class="rocket" style="left: ${rocket_count_left}%">`;
    }
    if(rocket_count_left_move == 3){
      clearInterval(rocket_inter2);
      clearInterval(rocket_inter);
      setTimeout(() => {
        rocket.forEach(rocket1 => {
          rocket1.remove();
        });
      }, 1900);
    }
    }, 20);
  }, 2000);

  moveHeartI = setInterval(moveHeart, 10);

  ten_secs = setTimeout(() => {
    clearInterval(wings_rockets_inter);
    clearInterval(rocket_inter);
    clearInterval(intervalId2);
    clearInterval(moveHeartI);
    clearInterval(HP_show);
    img_M.style.animation = "";
    appear("* Stage lights are blaring");
  }, 19000);
}

//attack 9 HEART
function attack9_finale(){
  projectile.innerHTML = `<div class="yellow_heart_anim" style="opacity: 0;"><img src="img/heart_yellow.png" class="heart_yellow"></div><img src="img/heart_yellow_out.png" class="heart_yellow_border" style="opacity: 1;">`;
  setTimeout(() => {
    mettaton_gif.style.opacity = "0";
  }, 700);
  x = 47;
  y = 31;
  moveX = 0;
  moveY = 0;
  width_yellow = 4;
  src_yellow = "img/bullet.png";
  left_yellow = get(2)
  top_yellow = get(3);
  drawHeart(x, y);

  setTimeout(() => {
  yellow_heart = document.querySelector(".yellow_heart_anim");
  yellow_heart_out = document.querySelector(".heart_yellow_border");
  yellow_heart.style.opacity = "1";
  yellow_heart_out.style.width = "4.8%"
  yellow_heart_out.style.left = "47.3%"
  yellow_heart_out.style.top = "23%"

  setTimeout(() => {
    yellow_heart_out.style.opacity = "0";
    yellow_heart.style.rotate = "90deg";
    yellow_heart.style.left = "82%";
    yellow_heart_red = `${img_M.getBoundingClientRect().top}px`;
    yellow_heart.style.top = yellow_heart_red;
  }, 500);

  setTimeout(() => {
  intervalId2 = setInterval(() => {
    if(t_f_wait === false){
      checkCollision(bullet, img_M, 20, true, false);
    }
  }, 10);
  }, 1550);
  }, 10);

  HP_show = setInterval(() => {
    showHP();
  }, 10);

  yellow_heartMove = setInterval(() => {
    yellow_heart = document.querySelector(".yellow_heart_anim");
    yellow_heart.style.top = yellow_heart_red;
    setTimeout(() => {
    if(width_yellow == 5.6){
      src_yellow = "img/bullet_big.png";
      yellow_heart.classList.add("yellow_heart_bc");
    }
    left_yellow -= 0.9;
    console.log(top_yellow);
    top_yellow += minus_yellow;
    projectile.innerHTML += `<img class="bullet" src="${src_yellow}" style="left:${left_yellow}%; top:${parseInt(yellow_heart_red) + top_yellow}px; width:${width_yellow}%">`;
    audio.play(11);

    setTimeout(() => {
      yellow_heart_red = `${img_M.getBoundingClientRect().top}px`;
      bullet = document.querySelectorAll(".bullet");
      bullet[bullet.length - 1].style.left = "-16%";
      width_yellow += 0.8;
    }, 10);
  }, 751);
  }, 801);

  moveHeartI = setInterval(moveHeart, 10);

  ten_secs = setTimeout(() => {
    clearInterval(yellow_heartMove);
    setTimeout(() => {
    clearInterval(intervalId2);
    clearInterval(moveHeartI);
    clearInterval(HP_show); 
    audio.mute(12);

    setTimeout(() => {
    audio.unmute(0);
    audio.reset(0);
    audio.play(0);
    }, 500);
    img_M.style.animation = "";
    battle_menu.style.opacity = "1";
    name.style.opacity = "1";
    lv.style.opacity = "1";
    appear("* Stage lights are blaring");
    }, 1100);
  }, 11500);
}