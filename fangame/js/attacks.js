


//attack 1(legs)
let HP_show;
let intervalId2;
let intervalId;
let ten_secs;
let moveHeartI;

//Attack 1
function attack1(){ 
    moveHeartI = setInterval(moveHeart, 10);
    x = 35;
    y = 47;
    drawHeart(x, y)
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