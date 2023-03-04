//Initializing variables
//ctx
const ctx = canvas.getContext("2d");

// Set canvas size and pixel density
const pixelRatio = window.devicePixelRatio || 1;
const width = 949.22;
const height = 236.22;
canvas.width = width * pixelRatio;
canvas.height = height * pixelRatio;
const img2 = new Image();
img2.src = 'img/heart.png';
// Set initial position
let x = 100;
let y = 100;

// Create heart path
img2.onload = function(){
  ctx.drawImage(img2, x, y);
};

// Draw heart
function drawHeart(x, y) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img2, x, y, 50, 50);
}

// Draw initial heart
drawHeart(x, y);

// Move heart with keyboard
let moveX = 0;
let moveY = 0;
let speed = 4;

document.addEventListener('keydown', e => {
  switch (e.code) {
    case 'KeyA':
    case 'KeyQ':
    case 'ArrowLeft':
      moveX = -speed;
      break;
    case 'KeyD':
    case 'ArrowRight':
      moveX = speed;
      break;
    case 'KeyW':
    case 'KeyZ':
    case 'ArrowUp':
      moveY = -speed;
      break;
    case 'KeyS':
    case 'ArrowDown':
      moveY = speed;
      break;
    default:
      break;
  }
});

document.addEventListener('keyup', e => {
  switch (e.code) {
    case 'KeyA':
    case 'KeyQ':
    case 'ArrowLeft':
      if (moveX < 0) moveX = 0;
      break;
    case 'KeyD':
    case 'ArrowRight':
      if (moveX > 0) moveX = 0;
      break;
    case 'KeyW':
    case 'KeyZ':
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
});

// Check collision with object
let collisionCount = 0;
const objectX = 500;
const objectY = 100;
const objectWidth = 50;
const objectHeight = 50;

function checkCollision() {
  if (x + 50 > objectX && x < objectX + objectWidth && y + 50 > objectY && y < objectY + objectHeight) {
    collisionCount += 12;
  }
}

// Move heart and check collision
function moveHeart() {
  x += moveX;
  y += moveY;

  // Check if heart is out of bounds
  if (x < 0) x = 0;
  if (x + 50 > canvas.width) x = canvas.width - 50;
  if (y < 0) y = 0;
  if (y + 50 > canvas.height) y = canvas.height - 50;

  checkCollision();
  drawHeart(x, y);
}

setInterval(moveHeart, 10);
