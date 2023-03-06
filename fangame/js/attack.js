//Initializing variables
// Set initial position
let img_M = document.querySelector(".img_M");
let projectile = document.querySelector(".particles");
img_M.remove();
let x = 35;
let y = 47;
// Check collision with object
let damage = 0;
let damage_t = 0;
let objectX = 500;
let objectY = 100;
const objectWidth = 50;
const objectHeight = 50;
// Move heart with keyboard
let moveX = 0;
let moveY = 0;

// Draw heart
function drawHeart(x, y) {
  if(canvas_t === true){
    if(text_placeholder.innerHTML != `<img class="img_M" src="img/heart.png">`){
      text_placeholder.innerHTML = `<img class="img_M" src="img/heart.png" alt="">`
    }
  img_M = document.querySelector(".img_M");
  img_M.style.top = `${y}%`;
  img_M.style.left = `${x}%`;
  }
}

function checkCollision() {
  if (x > objectX && x < objectX + objectWidth && y > objectY && y < objectY + objectHeight) {
    damage += damage_t;
  }
}

function check_out_of_bounds() {
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
// Move heart and check collision
function moveHeart() {
  // Check if heart is out of bounds
  if(canvas_t === true){
  check_out_of_bounds();
  //Add the %
  x += moveX;
  y += moveY;

  checkCollision();
  drawHeart(x, y);
  }
}

//AWSD keys listeners
document.addEventListener('keydown', e => {
  check_out_of_bounds()
  switch (e.code) {
    case 'KeyA':
    case 'ArrowLeft':
      moveX = -+0.25;
      moveHeart();
      break;
    case 'KeyD':
    case 'ArrowRight':
      moveX = 0.25;
      moveHeart();
      break;
    case 'KeyW':
    case 'ArrowUp':
      moveY = -1;
      moveHeart();
      break;
    case 'KeyS':
    case 'ArrowDown':
      moveY = 1;
      moveHeart();
      break;
    default:
      break;
  }
  check_out_of_bounds()
});

document.addEventListener('keyup', e => {
  check_out_of_bounds()
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
  check_out_of_bounds()
});

setInterval(moveHeart, 10);
