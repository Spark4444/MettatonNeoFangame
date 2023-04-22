//Initializing variables
// Set initial position
let img_M = document.querySelector(".img_M");
let projectile = document.querySelector(".particles");
let leg1 = document.querySelector(".leg1");
let leg2 = document.querySelector(".leg2");
let flash = false;
let top1 = 19.3;
let left1 = 50;
let top2= 19.3;
let left2 = 50;
let number = 1;
let restarts = 0;
let t_f_wait = false;
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

//Removes the img_M
img_M.remove();

//Draw heart
function drawHeart(x, y) {
  if(canvas_t === true){
  if(flash === false){
  text_placeholder.innerHTML = `<img class="img_M" src="img/heart.png" alt="">`;
  }
  img_M = document.querySelector(".img_M");
  img_M.style.top = `${y}%`;
  img_M.style.left = `${x}%`;
  }
}

//Checks for collision
function checkCollision(element1, element2, damage) {
  if(canvas_t === true){
  const elem2Rect = element2.getBoundingClientRect();
  let count = 0;
  for(let i = 0;element1.length > i;i++){
  const elem1Rect = element1[i].getBoundingClientRect();
  if (elem1Rect.top <= elem2Rect.bottom && elem1Rect.bottom >= elem2Rect.top && elem1Rect.left <= elem2Rect.right && elem1Rect.right >= elem2Rect.left ) {
  if(count == 0){
  audio8.currentTime = "0";
  audio8.play();
  count++;
  t_f_wait = true;
  let hp_hold = parseInt(parseInt(hp_str) - damage);
  hp_str = hp_hold.toString();
  img_M.classList.add("flash");
  flash = true;
  setTimeout(function(){
    flash = false;
    img_M.classList.remove("flash");
    t_f_wait = false;
  }, 1000);
  }
  }
  }
  }
}

//Checks for collision and if it detects it it deletes the element
function checkCollisionDelete(element1, element2, damage) {
  if(canvas_t === true){
  const elem2Rect = element2.getBoundingClientRect();
  let count = 0;
  for(let i = 0;element1.length > i;i++){
  const elem1Rect = element1[i].getBoundingClientRect();
  if (elem1Rect.top <= elem2Rect.bottom && elem1Rect.bottom >= elem2Rect.top && elem1Rect.left <= elem2Rect.right && elem1Rect.right >= elem2Rect.left ) {
  if(count == 0){
  element1[i].remove();
  audio8.currentTime = "0";
  audio8.play();
  clearTimeout(bomb_timeout);
  count++;
  t_f_wait = true;
  let hp_hold = parseInt(parseInt(hp_str) - damage);
  hp_str = hp_hold.toString();
  img_M.classList.add("flash");
  flash = true;
  setTimeout(function(){
    flash = false;
    img_M.classList.remove("flash");
    t_f_wait = false;
  }, 1000);
  }
  }
  }
  }
}

//Checks for collision with one element and if it detects it it deletes the element
function checkCollisionDeleteOne(element1, element2, damage) {
  if(canvas_t === true){
    const elem2Rect = element2.getBoundingClientRect();
    const elem1Rect = element1.getBoundingClientRect();
    if (elem1Rect.top <= elem2Rect.bottom && elem1Rect.bottom >= elem2Rect.top && elem1Rect.left <= elem2Rect.right && elem1Rect.right >= elem2Rect.left ) {
      element1.remove();
      audio8.currentTime = "0";
      audio8.play();
      clearTimeout(bomb_timeout);
      t_f_wait = true;
      let hp_hold = parseInt(parseInt(hp_str) - damage);
      hp_str = hp_hold.toString();
      img_M.classList.add("flash");
      flash = true;
      setTimeout(function(){
        flash = false;
        img_M.classList.remove("flash");
        t_f_wait = false;
      }, 1000);
    }
  }
}


//Cheks for one element
function checkCollisionOne(element, target, damage) {
  if (canvas_t === true) {
    const elemRect = element.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    if (elemRect.top <= targetRect.bottom && elemRect.bottom >= targetRect.top && elemRect.left <= targetRect.right && elemRect.right >= targetRect.left) {
      if (!t_f_wait) {
        audio8.currentTime = "0";
        audio8.play();
        t_f_wait = true;
        let hp_hold = parseInt(parseInt(hp_str) - damage);
        hp_str = hp_hold.toString();
        img_M.classList.add("flash");
        flash = true;
        setTimeout(function() {
          flash = false;
          img_M.classList.remove("flash");
          t_f_wait = false;
        }, 500);
      }
    }
  }
}

//Cheks for laser collision
function checkCollisionLaser(elements, target, damage) {
  if (canvas_t === true) {
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      const elemRect = element.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
      if (elemRect.top <= targetRect.bottom && elemRect.bottom >= targetRect.top && elemRect.left <= targetRect.right && elemRect.right >= targetRect.left) {
        const id = element.id;
        if (!t_f_wait) {
          let hp_hold;
          if (id === 'l0') {
            t_f_wait = true;
            hp_hold = parseInt(parseInt(hp_str) - damage);
            hp_str = hp_hold.toString();
            audio8.currentTime = "0";
            audio8.play();
            img_M.classList.add("flash");
            flash = true;
            setTimeout(function() {
              flash = false;
              img_M.classList.remove("flash");
              t_f_wait = false;
            }, 250);
          } else if (id === 'l2') {
            if (player_moving) {
              clearTimeout(orangeLaserTimer);
              continue;
            } else {
              if (!t_f_wait) {
                t_f_wait = true;
                orangeLaserTimer = setTimeout(function() {
                  hp_hold = parseInt(parseInt(hp_str) - damage);
                  hp_str = hp_hold.toString();
                  audio8.currentTime = "0";
                  audio8.play();
                  img_M.classList.add("flash");
                  flash = true;
                  setTimeout(function() {
                    flash = false;
                    img_M.classList.remove("flash");
                    t_f_wait = false;
                  }, 500);
                }, 250);
              }
            }
          } else if (id === 'l1') {
            if (player_moving) {
              t_f_wait = true;
              hp_hold = parseInt(parseInt(hp_str) - damage);
              hp_str = hp_hold.toString();
              audio8.currentTime = "0";
              audio8.play();
              img_M.classList.add("flash");
              flash = true;
              setTimeout(function() {
                flash = false;
                img_M.classList.remove("flash");
                t_f_wait = false;
              }, 500);
            } else {
              continue; // Player avoids damage by not moving
            }
          }
        }
      }
    }
  }
}

// Checks for laser collision with a single target element
function checkCollisionLaserOne(element, target, damage) {
  if (canvas_t === true) {
    const elemRect = element.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    if (elemRect.top <= targetRect.bottom && elemRect.bottom >= targetRect.top && elemRect.left <= targetRect.right && elemRect.right >= targetRect.left) {
      const id = element.id;
      if (!t_f_wait) {
        let hp_hold;
        if (id === 'l0') {
          t_f_wait = true;
          hp_hold = parseInt(parseInt(hp_str) - damage);
          hp_str = hp_hold.toString();
          audio8.currentTime = 0; // Changed from "0" to 0
          audio8.play();
          img_M.classList.add("flash");
          flash = true;
          setTimeout(function() {
            flash = false;
            img_M.classList.remove("flash");
            t_f_wait = false;
          }, 250);
        } else if (id === 'l2') {
          if (player_moving) {
            clearTimeout(orangeLaserTimer);
            return; // Changed from continue to return
          } else {
            if (!t_f_wait) {
              t_f_wait = true;
              orangeLaserTimer = setTimeout(function() {
                hp_hold = parseInt(parseInt(hp_str) - damage);
                hp_str = hp_hold.toString();
                audio8.currentTime = 0; // Changed from "0" to 0
                audio8.play();
                img_M.classList.add("flash");
                flash = true;
                setTimeout(function() {
                  flash = false;
                  img_M.classList.remove("flash");
                  t_f_wait = false;
                }, 500);
              }, 250);
            }
          }
        } else if (id === 'l1') {
          if (player_moving) {
            t_f_wait = true;
            hp_hold = parseInt(parseInt(hp_str) - damage);
            hp_str = hp_hold.toString();
            audio8.currentTime = 0; // Changed from "0" to 0
            audio8.play();
            img_M.classList.add("flash");
            flash = true;
            setTimeout(function() {
              flash = false;
              img_M.classList.remove("flash");
              t_f_wait = false;
            }, 500);
          } else {
            return; // Player avoids damage by not moving
          }
        }
      }
    }
  }
}

//Checks if the heart is out of bounds
function check_out_of_bounds() {
  if(canvas_t === true){
  if((moveX == 0.25 || moveX == -0.25) &&(moveY == 1 || moveY == -1)){
    if(98 < x && 82 < y){
      x = 98;
      y = 82;
    }
    else if(98 < x && y < -17){
      x = 98;
      y = -17;
    }
    else if(-2 > x && 82 < y){
      x = -2;
      y = 82;
    }
    else if(-2 > x && y < -17){
      x = -2;
      y = -17;
    }
  }
  if(98 < x){
    x = 98;
  }
  else if(-2 > x){
    x = -2;
  }
  else if(82 < y){
    y = 82;
  }
  else if(y < -17){
    y = -17;
  }
}
}

// Move heart and check collision
function moveHeart() {
  if(pressed_continue){
  // Check if heart is out of bounds
  if(canvas_t === true){
  check_out_of_bounds();
  x += moveX;
  y += moveY;
  drawHeart(x, y);
  }
  }
}

//Checks if the player is moving
setInterval(() => {
  if(canvas_t === true){
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
  if (canvas_t === true){
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
  if (canvas_t === true){
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
