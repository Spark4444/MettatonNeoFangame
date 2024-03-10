//Initializing variables
let player = document.querySelector(".player");
let projectile = document.querySelector(".particles");
let leg1 = document.querySelector(".leg1");
let leg2 = document.querySelector(".leg2");
let flash = false;
let top1 = 19.3;
let left1 = 50;
let top2= 19.3;
let left2 = 50;
let number = 1;
let t_f_wait = false;
// Set initial position
let yMax;
let x = 35;
let y = 47;
let damage = 0;
let damage_t = 0;
let objectX = 500;
let objectY = 100;
let speedX = 0.25;
let speedY = 1;
const objectWidth = 50;
const objectHeight = 50;
let moveX = 0;
let moveY = 0;
let player_moving = false;
let orangeLaserTimer;

//Removes the player
player.remove();

//Draw heart
function drawHeart(x, y) {
  if(playerFighting === true){
  if(flash === false){
  playerMovementBox.innerHTML = `<img class="player" src="img/heart.png" alt="">`;
  }
  player = document.querySelector(".player");
  player.style.top = `${y}%`;
  player.style.left = `${x}%`;
  }
}

//Cheks for laser collision
function checkCollision(elements, target, damage, delete1, obw) {
  if (playerFighting === true) {
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      const elemRect = element.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
      if (elemRect.top <= targetRect.bottom && elemRect.bottom >= targetRect.top && elemRect.left <= targetRect.right && elemRect.right >= targetRect.left) {
        const id = element.id.toLowerCase();
        if (!t_f_wait) {
          let hp_hold;
          if (id === 'white' || obw == false) {
            if(delete1 == true){
              element.remove();
              clearInterval(bomb_timeout);
            }
            t_f_wait = true;
            hp_hold = parseInt(parseInt(playersHPString) - damage);
            damageTaken += damage;
            damageTakenTimes++;
            playersHPString = hp_hold.toString();
            audio.reset(8);
            audio.play(8);
            player.classList.add("flash");
            flash = true;
            setTimeout(function() {
              flash = false;
              player.classList.remove("flash");
              t_f_wait = false;
            }, 500);
          } 
          else if (id === 'orange') {
            if (player_moving) {
              clearTimeout(orangeLaserTimer);
              continue;
            }
            else {
              if (!t_f_wait) {
                if(delete1 == true){
                  element.remove();
                  clearInterval(bomb_timeout);
                }
                t_f_wait = true;
                orangeLaserTimer = setTimeout(function() {
                  hp_hold = parseInt(parseInt(playersHPString) - damage);
                  damageTaken += damage;
                  damageTakenTimes++;
                  playersHPString = hp_hold.toString();
                  audio.reset(8);
                  audio.play(8);
                  player.classList.add("flash");
                  flash = true;
                  setTimeout(function() {
                    flash = false;
                    player.classList.remove("flash");
                    t_f_wait = false;
                  }, 250);
                }, 250);
              }
            }
          } else if (id === 'blue') {
            if (player_moving) {
              if(delete1 == true){
                element.remove();
                clearInterval(bomb_timeout);
              }
              t_f_wait = true;
              hp_hold = parseInt(parseInt(playersHPString) - damage);
              damageTaken += damage;
              damageTakenTimes++;
              playersHPString = hp_hold.toString();
              audio.reset(8);
              audio.play(8);
              player.classList.add("flash");
              flash = true;
              setTimeout(function() {
                flash = false;
                player.classList.remove("flash");
                t_f_wait = false;
              }, 500);
            } 
            else {
              continue; // Player avoids damage by not moving
            }
          }
        }
      }
    }
  }
}

//Checks if the heart is out of bounds
function check_out_of_bounds() {
  if(playerFighting === true){
  yMax = 100-(player.offsetWidth*100)/(playerMovementBox.offsetHeight);
  if((moveX == 0.25 || moveX == -0.25) &&(moveY == 1 || moveY == -1)){
    if(96 < x && yMax < y){
      x = 96;
      y = yMax;
    }
    else if(96 < x && y < 0){
      x = 96;
      y = 0;
    }
    else if(0 > x && yMax < y){
      x = 0;
      y = yMax;
    }
    else if(0 > x && y < 0){
      x = 0;
      y = 0;
    }
  }
  if(96 < x){
    x = 96;
  }
  else if(0 > x){
    x = 0;
  }
  else if(yMax < y){
    y = yMax;
  }
  else if(y < 0){
    y = 0;
  }
}
}

// Move heart and check collision
function moveHeart() {
  if(pressed_continue){
  // Check if heart is out of bounds
  if(playerFighting === true){
  check_out_of_bounds();
  x += moveX;
  y += moveY;
  drawHeart(x, y);
  }
  }
}

//Checks if the player is moving
setInterval(() => {
  if(playerFighting === true){
  if(moveX == 0 || moveY == 0){
    player_moving = false;
  }
  if(moveX > 0 || moveY > 0 || moveY < 0 || moveX < 0){
    player_moving = true;
  }
  }
},10);

//AWSD keys listener
document.addEventListener('keydown', e => {
  if (playerFighting === true){
    switch (e.keyCode) {
      case 65: // A
      case 37: // ArrowLeft
        moveX = -speedX;
        moveHeart();
        break;
      case 68: // D
      case 39: // ArrowRight
        moveX = speedX;
        moveHeart();
        break;
      case 87: // W
      case 38: // ArrowUp
        moveY = -speedY;
        moveHeart();
        break;
      case 83: // S
      case 40: // ArrowDown
        moveY = speedY;
        moveHeart();
        break;
      default:
        break;
    }
  }
});

//AWSD keys listeners
document.addEventListener('keyup', e => {
  if (playerFighting === true){
    switch (e.keyCode) {
      case 65: // A
      case 37: // ArrowLeft
        if (moveX < 0) moveX = 0;
        break;
      case 68: // D
      case 39: // ArrowRight
        if (moveX > 0) moveX = 0;
        break;
      case 87: // W
      case 38: // ArrowUp
        if (moveY < 0) moveY = 0;
        break;
      case 83: // S
      case 40: // ArrowDown
        if (moveY > 0) moveY = 0;
        break;
      default:
        break;
    }
  }
});
