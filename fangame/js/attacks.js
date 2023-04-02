let HP_show;
let intervalId2;
let intervalId;
let ten_secs;
let moveHeartI;
let number_lightning;
let lightningElem;
let lightning;
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
//Attack 1(legs)
function attack1_legs(){ 
    moveHeartI = setInterval(moveHeart, 10);
    x = 47;
    y = 31;
    drawHeart(x, y);
    projectile.innerHTML = `<img src="img/leg1.png" style="left:${left1}% top:${top1}%" class="leg1 legs" alt=""><img src="img/leg2.png" style="left:${left2}% top:${top2}%" class="leg2 legs" alt="">`
    mettaton_gif.style.opacity = "0";
    leg1 = document.querySelector(".leg1");
    leg2 = document.querySelector(".leg2");
    legs = document.querySelectorAll(".legs");
  
    //Moves the legs
    function legs_move() {
      if(number%3 === 1){
        if(restarts == 0){
          left1 = randomRange(23,71);
          left2 = randomRange(23,71);
        }
        if(number > 1 && restarts > 0){
          left1 = randomRange(23,71);
          left2 = randomRange(23,71);
        }
      }
      else if(number%3 === 2){
        top1 = 44;
        top2 = 44;
      }
      else if(number%3 === 0 && number != 0){
        top1 = 19.3;
        top2 = 19.3;
      }
      number++;
      leg1.style.top = `${top1}%`;
      leg2.style.top = `${top2}%`;
      leg1.style.left = `${left1}%`;
      leg2.style.left = `${left2}%`;
    }
    intervalId = setInterval(legs_move, 333);
    intervalId2 = setInterval(() => {
      if(t_f_wait === false){
      checkCollision(legs, img_M, 20);
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
  mettaton_gif.style.filter = "brightness(50%)";
  drawHeart(x, y);
  setTimeout(() => {
    document.querySelector(".smoke").style.opacity = "1";
  },10);
  number_lightning = 0;
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
      projectile.innerHTML += `<img src="img/lightning.png" id="${number_lightning}" class="lightning" alt="" style="left:${point1.x}; top:${point1.y}; rotate:${findAngle(startX, startY, endX, endY)}deg">`;
      img_M.style.animation = "beam 0.5s infinite";
      setTimeout(() => {
      if(number_lightning < 11){
      lightningElem = document.querySelector(`#\\3${number_lightning}`);
      }
      lightningElem.style.left = `${point2.x}`;
      lightningElem.style.top = `${point2.y}`;
      }, 10);
      setTimeout(() => {
        lightningElem.remove();
        }, 500);
    },600);
    HP_show = setInterval(() => {
      showHP();
    }, 10);
    moveHeartI = setInterval(moveHeart, 10);
    intervalId2 = setInterval(() => {
      if(t_f_wait === false){
        checkCollisionOne(lightningElem, img_M, 15);
    }
    }, 10);
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
    },10);
  }
  else{
    randomNum = randomRange(44,65);
    projectile.innerHTML = `<img src="img/hand.png" class="hand1" style="opacity:0; top:${randomNum}%; left:90%; rotate:90deg;">`;
    setTimeout(() => {
      hand = document.querySelector(".hand1");
      hand.style.opacity = "1";
    },10);
  }
  mettaton_gif.style.opacity = "0";
  x = 47;
  y = 31;
  moveX = 0;
  moveY = 0;
  count_laser = 0;
  laser = 0;
  drawHeart(x, y);
  laser_num = randomRange(1,2);
  intervalId2 = setInterval(() => {
    if(t_f_wait === false){
      laser = document.querySelectorAll(".laser");
      checkCollisionLaser(laser, img_M, 30);
    }
  }, 10);
  HP_show = setInterval(() => {
    showHP();
  }, 10);
  moveHeartI = setInterval(moveHeart, 10);
  laser_time = setInterval(function(){
    count_laser += 1;
    if(count_laser > 4){
      laser_num = 0;
    }
    if(count_laser == 1){
      laser_num = 1;
    }
    if(count_laser == 2){
      laser_num = 1;
    }
    if(count_laser == 3){
      laser_num = 2;
    }
    if(count_laser == 4){
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
        projectile.innerHTML += `<div class="laser" id="l${laser_num}" style="top: 31%; left:${randomNum + 2.3}%"></div>`;
        setTimeout(() => {
          laser = document.querySelectorAll(".laser");
          laser[laser.length-1].style.height = "69%";
        },10);
        }, 500);
        }, 10);
      }
      else{
        setTimeout(() => {
        projectile.innerHTML += `<div class="laser" id="l${laser_num}" style="top: ${randomNum + 15}%; left:86%"></div>`;
        setTimeout(() => {
          laser = document.querySelectorAll(".laser");
          laser[laser.length-1].style.width = "86.5%"; 
          laser[laser.length-1].style.left = "0%"; 
        },10);
        }, 500);
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
        projectile.innerHTML += `<div class="laser" id="l${laser_num}" style="top: ${randomNum + 15}%; left:86%"></div>`;
        setTimeout(() => {
          laser = document.querySelectorAll(".laser");
          laser[laser.length-1].style.width = "86.5%"; 
          laser[laser.length-1].style.left = "0%"; 
        },10);
        }, 500);
        }, 10);
      }
      else{
        setTimeout(() => {
        projectile.innerHTML += `<div class="laser" id="l${laser_num}" style="top: 31%; left:${randomNum + 2.3}%"></div>`;
        setTimeout(() => {
          laser = document.querySelectorAll(".laser");
          laser[laser.length-1].style.height = "69%";
        },10);
        }, 500);
      }
    }
  }, 1000);
  ten_secs = setTimeout(() => {
    clearInterval(laser_time);
    clearInterval(intervalId2);
    clearInterval(moveHeartI);
    clearInterval(HP_show);
    img_M.style.animation = "";
    appear("* Stage lights are blaring");
  }, 12000);
} 

//Attack 4 hand
function attack4_hand(){
  projectile.innerHTML = `<img src="img/hand2.png" class="hand2";" style="left: 40%;">`;
  setTimeout(() => {
    hand2 = document.querySelector(".hand2");
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
      laser = document.querySelectorAll(".laser");
      checkCollisionOne(hand2, img_M, 30);
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
      hand2.style.top = "58%";
    }
    if(count_hand2 % 3 === 2){
      hand2.style.top = "";
    }
    if(count_hand2 % 3 === 0){
      hand2.style.left = `${img_M.getBoundingClientRect().left - 137}px`;
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

  //attack 4 heart on the chest gets up and follows the heart there mid-fast
  //attack 5 the wings one blocks one attacks reverse and then they attack together