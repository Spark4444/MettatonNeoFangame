//Initializing variables
// Set initial position
let img_M = document.querySelector(".img_M");
let projectile = document.querySelector(".particles");
let leg1 = document.querySelector(".leg1");
let leg2 = document.querySelector(".leg2");
let top1 = 19.3;
let left1 = 24;
let top2= 19.3;
let left2 = 68;
let number = 0;
let t_f_wait = false;
img_M.remove();
let x = 35;
let y = 47;
// Check collision with object
let damage = 0;
let damage_t = 0;
let objectX = 500;
let objectY = 100;
let speedX = 0.25;
let speedY = 1;
const objectWidth = 50;
const objectHeight = 50;
//Move heart with keyboard
let moveX = 0;
let moveY = 0;

//Draw heart
function drawHeart(x, y) {
  if(canvas_t === true){
  text_placeholder.innerHTML = `<img class="img_M" src="img/heart.png" alt="">`
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
  count++;
  t_f_wait = true;
  let hp_hold = parseInt(parseInt(hp_string) - damage);
  hp_string = hp_hold.toString();
  img_M.classList.add("flash");
  setTimeout(function(){
    img_M.classList.remove("flash");
    t_f_wait = false;
  }, 500);
  }
  }
  }
  }
}

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
  // Check if heart is out of bounds
  if(canvas_t === true){
  check_out_of_bounds();
  x += moveX;
  y += moveY;
  drawHeart(x, y);
  }
}

//AWSD keys listeners
document.addEventListener('keydown', e => {
  if(canvas_t === true){
  switch (e.code) {
    case 'KeyA':
    case 'ArrowLeft':
      moveX = -speedX;
      moveHeart();
      break;
    case 'KeyD':
    case 'ArrowRight':
      moveX = speedX;
      moveHeart();
      break;
    case 'KeyW':
    case 'ArrowUp':
      moveY = -speedY;
      moveHeart();
      break;
    case 'KeyS':
    case 'ArrowDown':
      moveY = speedY;
      moveHeart();
      break;
    default:
      break;
  }
}
});

document.addEventListener('keyup', e => {
  if(canvas_t === true){
  switch (e.code) {
    case 'KeyA':
    case 'ArrowLeft':
      if (moveX < 0) moveX = 0;
      break;
    case 'KeyD':
    case 'ArrowRight':
      if (moveX > 0) moveX = 0;
      break;
    case 'KeyW':
    case 'ArrowUp':
      if (moveY < 0) moveY = 0;
      break;
    case 'KeyS':
    case 'ArrowDown':
      if (moveY > 0) moveY = 0;
      break;
    default:
      break;
  }
}
});