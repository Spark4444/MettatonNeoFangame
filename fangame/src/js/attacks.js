//Varaibles initilization
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
let ratio_yellow;
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
let mettatonBottom = (window.innerHeight - 0.5 * window.innerWidth)/2 + (0.5 * window.innerWidth) * 0.545;
let canvasBottom = (window.innerHeight - 0.5 * window.innerWidth)/2 + (0.5 * window.innerWidth) * 0.795;

//Attack 1(legs)
function attack1_legs(){ 
    moveHeartI = setInterval(moveHeart, 10);
    let mov1 = mettatonBottom - window.innerWidth * 0.189;
    let mov2 = canvasBottom - window.innerWidth * 0.189;
    x = 47;
    y = 31;
    drawHeart(x, y);
    projectile.innerHTML = `<img src="img/leg1.png" style="left:${randomRange(23,71)}%; top:${mov1}px;" class="leg1 legs" alt=""><img src="img/leg2.png" style="left:${randomRange(23,71)}%; top:${mov1}px;" class="leg2 legs" alt="">`
    mettatonGIF.style.opacity = "0";
    leg1 = document.querySelector(".leg1");
    leg2 = document.querySelector(".leg2");
    legs = document.querySelectorAll(".legs");
    number = 1
  
    intervalId = setInterval(() => {
        if(number%3 === 1){
          leg1.style.top = `${mov2}px`;
          leg2.style.top = `${mov2}px`;
        }
        else if(number%3 === 2){
          leg1.style.top = `${mov1}px`;
          leg2.style.top = `${mov1}px`;
        }
        else if(number%3 === 0 && number != 0){
          leg1.style.left = `${randomRange(23,71)}%`
          leg2.style.left = `${randomRange(23,71)}%`
        }
        number++;
    }, 333);

    intervalId2 = setInterval(() => {
    if(t_f_wait === false){
    checkCollision(legs, player, 20, false, false);
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
  projectile.innerHTML = `<img src="img/smoke.png" class="smoke" style="opacity:0; top:${mettatonBottom}px" alt="">`;
  x = 47;
  y = 31;
  moveX = 0;
  moveY = 0;
  number_lightning = 0;
  mettatonGIF.style.filter = "brightness(50%)";
  drawHeart(x, y);

  setTimeout(() => {
    document.querySelector(".smoke").style.opacity = "1";
  },10);
  
  lightning = setInterval(function(){
  let point1 = { x: `${randomRange(0,window.innerWidth * 0.97)}px`, y: `${randomRange(0,mettatonBottom - window.innerWidth* 0.045)}px` };//initial position of element
  let point2 = { x: `${randomRange(window.innerWidth * 0.24,window.innerWidth * 0.73)}px`, y: `${randomRange(mettatonBottom,canvasBottom - window.innerWidth* 0.045)}px` };//it moves to this position
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
      checkCollision(lightningElem, player, 15, false, false);
  }
  }, 10);
  },601);
  
  ten_secs = setTimeout(() => {
    clearInterval(lightning);
    clearInterval(intervalId2);
    clearInterval(moveHeartI);
    clearInterval(HP_show);
    player.style.animation = "";
    mettatonGIF.style.filter = "";
    appear("* Stage lights are blaring");
  }, 11900);
}

//Attack 3(hand and lasers)
function attack3_lasers(){
  if(randomPick(0,1) == 1){
    randomNum = randomRange(23,71);
    projectile.innerHTML = `<img src="img/hand.png" class="hand1" style="opacity:0; top:5%; left:${randomNum}%;">`;
    setTimeout(() => {
      hand = document.querySelector(".hand1");
      hand.style.opacity = "1";
      projectile.innerHTML += `<div class="laser" id="${laser_num}" style="top: ${window.innerHeight * 0.05 + window.innerWidth * 0.133}px; left:${randomNum + 2.3}%"></div>`;
      setTimeout(() => {
        laser = document.querySelectorAll(".laser");
        laser[laser.length-1].style.height = "69%";
      },250);
    },10);
  }
  else{
    randomNum = randomRange(mettatonBottom,canvasBottom - window.innerWidth * 0.045);
    projectile.innerHTML = `<img src="img/hand.png" class="hand1" style="opacity:0; top:${randomNum}px; left:90%; transform: rotate(90deg);">`;
    setTimeout(() => {
      hand = document.querySelector(".hand1");
      hand.style.opacity = "1";
      projectile.innerHTML += `<div class="laser" id="${laser_num}" style="top: ${randomNum + window.innerWidth * 0.045 / 2}px; left:76.5%"></div>`;
      setTimeout(() => {
      laser = document.querySelectorAll(".laser");
      laser[laser.length-1].style.width = "76.5%"; 
      laser[laser.length-1].style.left = "0%"; 
      },250);
    },10);
  }

  mettatonGIF.style.opacity = "0";
  x = 47;
  y = 31;
  moveX = 0;
  moveY = 0;
  count_laser = 0;
  laser_num = "Blue";
  laser = 0;
  drawHeart(x, y);

  intervalId2 = setInterval(() => {
    if(t_f_wait === false){
      laser = document.querySelectorAll(".laser");
      checkCollision(laser, player, 30, false, true);
    }
  }, 10);

  HP_show = setInterval(() => {
    showHP();
  }, 10);

  moveHeartI = setInterval(moveHeart, 10);

  setTimeout(function(){
    count_laser += 1;
    laser_num = "Blue";
    if(hand.style.left == "90%"){
      if(count_laser != 1){
        setTimeout(() => {
        randomNum = randomRange(23,71);
        hand = document.querySelector(".hand1");
        hand.style.top = `5%`;
        hand.style.left = `${randomNum}%`;
        hand.style.transform = ``;
        setTimeout(() => {
        projectile.innerHTML += `<div class="laser" id="${laser_num}" style="top: ${window.innerHeight * 0.05 + window.innerWidth * 0.133}px; left:${randomNum + 2.3}%"></div>`;
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
        randomNum = randomRange(mettatonBottom,canvasBottom - window.innerWidth * 0.045);
        hand = document.querySelector(".hand1");
        hand.style.top = `${randomNum}px`;
        hand.style.left = `90%`;
        hand.style.transform = `rotate(90deg)`;
        setTimeout(() => {
        projectile.innerHTML += `<div class="laser" id="${laser_num}" style="top: ${randomNum + window.innerWidth * 0.045 / 2}px; left:76.5%"></div>`;
        setTimeout(() => {
          laser = document.querySelectorAll(".laser");
          laser[laser.length-1].style.width = "76.5%"; 
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
        laser_num = "White";
      }
      if(count_laser == 3){
        laser_num = "Orange";
      }
      if(hand.style.left == "90%"){
        if(count_laser != 1){
          setTimeout(() => {
          randomNum = randomRange(23,71);
          hand = document.querySelector(".hand1");
          hand.style.top = `5%`;
          hand.style.left = `${randomNum}%`;
          hand.style.transform = ``;
          setTimeout(() => {
          projectile.innerHTML += `<div class="laser" id="${laser_num}" style="top: ${window.innerHeight * 0.05 + window.innerWidth * 0.133}px; left:${randomNum + 2.3}%"></div>`;
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
          randomNum = randomRange(mettatonBottom,canvasBottom - window.innerWidth * 0.045);
          hand = document.querySelector(".hand1");
          hand.style.top = `${randomNum}px`;
          hand.style.left = `90%`;
          hand.style.transform = `rotate(90deg)`;
          setTimeout(() => {
          projectile.innerHTML += `<div class="laser" id="${laser_num}" style="top: ${randomNum + window.innerWidth * 0.045 / 2}px; left:76.5%"></div>`;
          setTimeout(() => {
            laser = document.querySelectorAll(".laser");
            laser[laser.length-1].style.width = "76.5%"; 
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
    player.style.animation = "";
    appear("* Stage lights are blaring");
  }, 11999);
} 

//Attack 4 hand
function attack4_hand(){
  projectile.innerHTML = `<img src="img/hand2.png" class="hand2" style="left: 47%; top:${mettatonBottom - window.innerWidth*0.045/77*277}px">`;

  setTimeout(() => {
    hand2 = document.querySelectorAll(".hand2");
  },10);

  mettatonGIF.style.opacity = "0";
  x = 47;
  y = 31;
  moveX = 0;
  moveY = 0;
  count_hand2 = 0;
  drawHeart(x, y);

  intervalId2 = setInterval(() => {
    if(t_f_wait === false){
      hand2 = document.querySelectorAll(".hand2");
      checkCollision(hand2, player, 30, false, false);
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
      hand2[hand2.length - 1].style.top = `${canvasBottom - window.innerWidth*0.045/77*277}px`;
    }
    if(count_hand2 % 3 === 2){
      hand2[hand2.length - 1].style.top = `${mettatonBottom - window.innerWidth*0.045/77*277}px`;
    }
    if(count_hand2 % 3 === 0){
      hand2[hand2.length - 1].style.left = `${player.getBoundingClientRect().left+window.innerWidth*0.49*0.04/2 - window.innerWidth*0.045/2}px`;
    }
  },250);
  }, 400);

  ten_secs = setTimeout(() => {
    clearInterval(hand_time);
    clearInterval(intervalId2);
    clearInterval(moveHeartI);
    clearInterval(HP_show);
    player.style.animation = "";
    appear("* Stage lights are blaring");
  }, 12000);
}

//Attack 5 head
function attack5_head(){
  mettatonGIF.style.opacity = "1";
  x = 47;
  y = 31;
  moveX = 0;
  moveY = 0;
  let eyeDistance = (window.innerHeight - 0.5 * window.innerWidth)/2 + window.innerWidth * 0.068;
  drawHeart(x, y);

  intervalId2 = setInterval(() => {
    if(t_f_wait === false){
      laser_head = document.querySelectorAll(".laser_head");
      checkCollision(laser_head, player, 20, false, true);
    }
  }, 10);

  HP_show = setInterval(() => {
    showHP();
  }, 10);

  moveHeartI = setInterval(moveHeart, 10);

  head_time = setInterval(function(){
    leg_t = player.getBoundingClientRect().top - eyeDistance;
    leg2_t = player.getBoundingClientRect().left - window.innerWidth * 0.48;
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
    projectile.innerHTML += `<div class="laser_head" id="${randomPick3("White","Blue","Orange")}" style="top:${eyeDistance}px; rotate:${calcR}deg"></div>`;
    }
    if(left === true){
    let calcR = calculateAngle(hyp_t,leg_t) 
    projectile.innerHTML += `<div class="laser_head" id="${randomPick3("White","Blue","Orange")}" style="top:${eyeDistance}px; rotate:${calcR}deg"></div>`;
    }
    
    setTimeout(() => {
    laser_head = document.querySelectorAll(".laser_head");
    laser_head[laser_head.length - 1].style.left = `${player.getBoundingClientRect().left * 2 - window.innerWidth * 0.48}px`;
    laser_head[laser_head.length - 1].style.top = `${player.getBoundingClientRect().top * 2 - eyeDistance}px`;
    setTimeout(() => {
      laser_head[laser_head.length - 1].style.opacity = 0; 
    }, 350);
    }, 10);

  },710);

  ten_secs = setTimeout(() => {
    clearInterval(head_time);
    clearInterval(intervalId2);
    clearInterval(moveHeartI);
    clearInterval(HP_show);
    player.style.animation = "";
    appear("* Stage lights are blaring");
  }, 10649);
}

//attack 6 legs dashing on you
function attack6_dash(){
  random_leg = randomPick("Blue","Orange");
  projectile.innerHTML = `<img src="img/leg${random_leg}.png" id="${random_leg}" class="leg_dash">`;
  mettatonGIF.style.opacity = "0";
  x = 47;
  y = 31;
  moveX = 0;
  moveY = 0;
  drawHeart(x, y);
  leg_dash_count = 0;
  leg_dash_transition = 500;
  leg_dash_count_top = 1;
  intervalId2 = setInterval(() => {
    if(t_f_wait === false){
      leg_dash = document.querySelectorAll(".leg_dash");
      leg_dash[leg_dash.length - 1].style.transition = "0.5s";
      checkCollision(leg_dash, player, 20, false, true);
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
      if(leg_dash_count_top !== 1){
        leg_dash[leg_dash.length - 1].style.top = "";
      }
      worked_legs_dash = false;
      if(leg_dash_count_top == 1 && worked_legs_dash === false){
        worked_legs_dash = true;
        leg_dash_count_top = randomRange(0,2);
        if(leg_dash_count_top == 2 || leg_dash_count_top == 0){
          random_leg = "White";
        }
        else{
        random_leg = randomPick("Blue","Orange");
        }
        leg_dash[leg_dash.length - 1].style.transition = "0.5s";
        leg_dash_transition = 500;
      }
      if(leg_dash_count_top == 2 && worked_legs_dash === false){
        worked_legs_dash = true;
        leg_dash_count_top = 1;
        random_leg = randomPick("Blue","Orange");
        leg_dash[leg_dash.length - 1].style.transition = "1s";
        leg_dash_transition = 1000;
      }
      if(leg_dash_count_top == 0 && worked_legs_dash === false){
        worked_legs_dash = true;
        leg_dash_count_top = 1;
        random_leg = randomPick("Blue","Orange");
        leg_dash[leg_dash.length - 1].style.transition = "1s";
        leg_dash_transition = 1000;
      }
      leg_dash[leg_dash.length - 1].src = `img/leg${random_leg}.png`;
      leg_dash[leg_dash.length - 1].setAttribute('id', `${random_leg}`)
      if (leg_dash_count_top !== 1) {
        if (leg_dash_count_top == 0) {
          leg_dash[leg_dash.length - 1].style.top = `${(canvasBottom - mettatonBottom)*0.6666+mettatonBottom - window.innerWidth*0.18919}px`;
        }
        if (leg_dash_count_top == 2) {
          leg_dash[leg_dash.length - 1].style.top = `${(canvasBottom - mettatonBottom)*0.3333+mettatonBottom}px`;
        }
      }
    }
  }, leg_dash_transition);

  ten_secs = setTimeout(() => {
    clearInterval(dash_leg);
    clearInterval(intervalId2);
    clearInterval(moveHeartI);
    clearInterval(HP_show);
    player.style.animation = "";
    appear("* Stage lights are blaring");
  }, 20000);
}

//attack 7 bombs
function attack7_bombs(){
  projectile.innerHTML = ``;
  mettatonGIF.style.opacity = "1";
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
      checkCollision(explosion, player, 20, false, false);
      }
      if(bomb !== null){
        checkCollision(bomb, player, 10, true, false);
      }
    }
  }, 10);

  HP_show = setInterval(() => {
    showHP();
  }, 10);

  setTimeout(() => {
    random_bomb = `${randomRange(23,69)}%`;
    projectile.innerHTML += `<img src="img/bomb.gif" style="top: ${(window.innerHeight - window.innerWidth*0.50)/2+window.innerWidth*0.07}px" class="bomb">`;
    setTimeout(() => {
      bomb[bomb.length - 1] = document.querySelectorAll(".bomb");
      bomb[bomb.length - 1].style.left = random_bomb;
      bomb[bomb.length - 1].style.top = `${canvasBottom - window.innerWidth * 0.1355}px`;
      bomb_timeout = setTimeout(() => {
        bomb[bomb.length - 1].src = "img/explosion.gif";
        bomb[bomb.length - 1].classList.remove("bomb");
        bomb[bomb.length - 1].style.top = ``;
        bomb[bomb.length - 1].style.left = `${parseInt(random_bomb) - 5}%`;
        bomb[bomb.length - 1].classList.add("explosion");
        bomb[bomb.length - 1].style.top = `${canvasBottom-window.innerWidth * 0.1495}px`;
        explosion[explosion.length - 1] = bomb[bomb.length - 1];
          setTimeout(() => {
          explosion = document.querySelectorAll(".explosion");
          if (explosion !== null){
          audio.reset(13);
          audio.play(13);
          explosion[explosion.length - 1].classList.add("transition");
          explosion[explosion.length - 1].style.width = "0%";
          explosion[explosion.length - 1].style.top = `${canvasBottom-window.innerWidth*0.056}px`;
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
    projectile.innerHTML += `<img src="img/bomb.gif" style="top: ${(window.innerHeight - window.innerWidth*0.50)/2+window.innerWidth*0.07}px" class="bomb">`;
    setTimeout(() => {
      bomb = document.querySelectorAll(".bomb");
      bomb[bomb.length - 1].style.left = random_bomb;
      bomb[bomb.length - 1].style.top = `${canvasBottom - window.innerWidth * 0.1355}px`;
      bomb_timeout = setTimeout(() => {
        audio.reset(13);
        audio.play(13);
        bomb[bomb.length - 1].src = "img/explosion.gif";
        bomb[bomb.length - 1].classList.remove("bomb");
        bomb[bomb.length - 1].style.top = ``;
        bomb[bomb.length - 1].style.left = `${parseInt(random_bomb) - 5}%`;
        bomb[bomb.length - 1].classList.add("explosion");
        bomb[bomb.length - 1].style.top = `${canvasBottom-window.innerWidth * 0.1495}px`;
        explosion[explosion.length - 1] = bomb[bomb.length - 1];
          setTimeout(() => {
          explosion = document.querySelectorAll(".explosion");
          if (explosion[explosion.length - 1] !== null){
          audio.reset(13);
          audio.play(13);
          explosion[explosion.length - 1].classList.add("transition");
          explosion[explosion.length - 1].style.width = "0%";
          explosion[explosion.length - 1].style.top = `${canvasBottom-window.innerWidth*0.056}px`;
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
    player.style.animation = "";
    appear("* Stage lights are blaring");
  }, 20000);
}

//attack 8 wings,rockets
function attack8_wings(){
  projectile.innerHTML = `<img src="img/wing2.png" class="wing1"><img src="img/wing1.png" class="wing2">`;
  mettatonGIF.style.opacity = "0";
  x = 47;
  y = 31;
  moveX = 0;
  moveY = 0;
  drawHeart(x, y);
  rocket_count_left_move = 0;
  rocket_count_left = 17;

  setTimeout(() => {
    wing1 = document.querySelectorAll(".wing1");
    wing2 = document.querySelectorAll(".wing2");
    wing2[wing2.length - 1].classList.add("wing2_down");
    wing1[wing1.length - 1].classList.add("wing1_down");
  }, 10);
  
  intervalId2 = setInterval(() => {
    wing = document.querySelectorAll(".wing");
    rocket = document.querySelectorAll(".rocket");
    if(t_f_wait === false && rocket.length > 1){
      checkCollision(rocket, player, 20, true, false);
      checkCollision(wing, player, 20, false, false);
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
    projectile.innerHTML += `<img src="img/rocket.gif" class="rocket" style="left: ${rocket_count_left}%; top:-8vw;">`;
    }
    if(rocket_count_left_move == 3){
      clearInterval(rocket_inter2);
      clearInterval(rocket_inter);
      setTimeout(() => {
        rocket.forEach(rocket1 => {
          rocket1.style.top = "100%";
        });
      }, 10);
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
    player.style.animation = "";
    appear("* Stage lights are blaring");
  }, 19000);
}

//attack 9 HEART
function attack9_finale(){
  projectile.innerHTML = `<div class="yellow_heart_anim" style="opacity: 0; top:${window.innerHeight/2 - window.innerWidth*0.25+window.innerWidth*0.109}px"><img src="img/yellowHeart.png" class="heart_yellow"></div><img src="img/yellowHeartBorder.png" class="heart_yellow_border" style="opacity: 1; top: ${window.innerHeight/2 - window.innerWidth*0.25+window.innerWidth*0.12}px">`;
  setTimeout(() => {
    mettatonGIF.style.opacity = "0";
  }, 700);
  x = 47;
  y = 31;
  moveX = 0;
  moveY = 0;
  width_yellow = 4;
  src_yellow = "img/bullet.png";
  ratio_yellow = 42/23;
  drawHeart(x, y);

  setTimeout(() => {
  yellow_heart = document.querySelector(".yellow_heart_anim");
  yellow_heart_out = document.querySelector(".heart_yellow_border");
  yellow_heart.style.opacity = "1";
  yellow_heart_out.style.width = "4.8%"
  yellow_heart_out.style.left = "47.3%"
  yellow_heart_out.style.top = `${window.innerHeight/2 - window.innerWidth*0.25+window.innerWidth*0.108}px`

  setTimeout(() => {
    yellow_heart_out.style.opacity = "0";
    yellow_heart.style.rotate = "90deg";
    yellow_heart.style.left = "82%";
    yellow_heart_red = `${player.getBoundingClientRect().top - window.innerWidth * 0.0152}px`;
    yellow_heart.style.top = yellow_heart_red;
  }, 500);

  setTimeout(() => {
  intervalId2 = setInterval(() => {
    if(t_f_wait === false){
      checkCollision(bullet, player, 20, true, false);
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
      ratio_yellow = 155/83;
      yellow_heart.classList.add("yellow_heart_bc");
    }
    projectile.innerHTML += `<img class="bullet" src="${src_yellow}" style="left:${84 - width_yellow}%; top:${parseInt(yellow_heart_red)+window.innerWidth*0.025-window.innerWidth/100*width_yellow/ratio_yellow/2}px; width:${width_yellow}%">`;
    audio.play(11);

    setTimeout(() => {
      yellow_heart_red = `${player.getBoundingClientRect().top - window.innerWidth * 0.0152}px`;
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
    player.style.animation = "";
    battleSection.style.opacity = "1";
    name.style.opacity = "1";
    lv.style.opacity = "1";
    appear("* Stage lights are blaring");
    }, 1100);
  }, 11500);
}