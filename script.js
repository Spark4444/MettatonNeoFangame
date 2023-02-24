let audio = document.querySelector("#audio");
// Wait for the document to finish loading
document.addEventListener("DOMContentLoaded", function() {

  // Add an event listener for when the user scrolls
  window.addEventListener("scroll", function() {
    // Do something when the user scrolls
    audio.play()
  });

  // Add an event listener for when the user clicks
  document.addEventListener("click", function() {
    // Do something when the user clicks
    audio.play()
  });

  // Add an event listener for when the user types
  document.addEventListener("keydown", function(event) {
    // Do something when the user types
    audio.play()
  });

});

// Select all buttons and images
const buttons = document.querySelectorAll('.button');
const img = document.querySelectorAll('.but');

// Set initial values for variables
let num = -1;
let first = 0;
let num_st = 0;
// Define function to change image and button class
function classA(){
  console.log(num + ' and ' + first);
  console.log(num);
  // Cycle through images and buttons if limit is reached
  if(num == false){
    return;
  }
  if(num >= 4){
    num = 0;
  }
  if(num <= -1){
    num = 3;
  }
  
  // Remove yellow class from buttons depending on current state
  if (first == 1){
    buttons[0].classList.remove('yellow');
    buttons[3].classList.remove('yellow');
  }
  if(first >= 2){
    buttons[0].classList.remove('yellow');
    buttons[1].classList.remove('yellow');
    buttons[2].classList.remove('yellow');
    buttons[3].classList.remove('yellow');
  }

  // Change image source depending on current state
  if(num == 0){
    img[1].src = "img/act.png";
    img[2].src = "img/item.png";
    img[3].src = "img/mercy.png";
  }
  if(num == 1){
    img[0].src = "img/fight.png";
    img[2].src = "img/item.png";
    img[3].src = "img/mercy.png";
  }
  if(num == 2){
    img[0].src = "img/fight.png";
    img[1].src = "img/act.png";
    img[3].src = "img/mercy.png";
  }
  if(num == 3){
    img[0].src = "img/fight.png";
    img[1].src = "img/act.png";
    img[2].src = "img/item.png";
  }

  // Set current image and add yellow class to current button
  img[num].src = "img/heart.png";
  buttons[num].classList.add('yellow');

  // Output current values of num and first to console
}

// Add event listener for left arrow key and 'a' key
document.addEventListener('keyup', e => {
  const key = e.key;
  switch (key) {
    case 'ArrowLeft':
    case 'a': 
    case 'A':
      if(num !== false){
        num--;
      }
      classA();
      first+=1;
      break;
    default:
      return;
  }
});

// Add event listener for right arrow key and 'd' key
document.addEventListener('keyup', e => {
  const key = e.key;
  switch (key) {
    case 'ArrowRight':
    case 'd':
    case 'D':
      if(num !== false){
        num++;
      }
      classA();
      first+=1;
      break;
    default:
      return;
  }
});

// Define function to make text appear letter by letter
const text = "* Mettaton NEO blocks the way!";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    document.querySelector(".text").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 40); // Adjust the time delay as needed
  }
}

// Call function to make text appear letter by letter
typeWriter();
document.addEventListener('keyup', e => {
  const key = e.key;
  switch (key) {
    case 'Enter':
    case 'z':
    case 'Z':
      num_st = num;
      num = false;
      console.log("ENTER!!!")
      break;
    case 'x':
    case 'X':
      num = num_st;
      console.log("x");
      break;
    default:
      return;
  }
});