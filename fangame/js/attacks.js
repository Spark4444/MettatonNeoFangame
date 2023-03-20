let HP_show;
let intervalId2;
let intervalId;
let ten_secs;
let moveHeartI;
let number_lightning;
let lightningElem;
let lightning;

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
  drawHeart(x, y);
  setTimeout(() => {
    document.querySelector(".smoke").style.opacity = "1";
  },10);
  number_lightning = 0;
      lightning = setInterval(function(){
      number_lightning++;
      if(number_lightning == 10){
        number_lightning = 1;
      }
      projectile.innerHTML += `<img src="img/lightning.png" id="${number_lightning}" class="lightning" alt="" style="left:${randomRange(0,97)}%; top:${randomRange(0,48)}%;">`;
      img_M.style.animation = "beam 0.5s infinite";
      setTimeout(() => {
      if(number_lightning < 11){
      lightningElem = document.querySelector(`#\\3${number_lightning}`);
      }
      lightningElem.style.left = `${randomRange(24,73)}%`;
      lightningElem.style.top = `${randomRange(57,74)}%`;
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
      appear("* Stage lights are blaring");
    }, 11900);
  }
  //attack 3 left hand lasers shows them(theyre long whole map) random
  //attack 4 heart on the chest gets up and follows the heart there mid-fast
  //attack 5 the wings one blocks one attacks reverse and then they attack together