//Gets a number from random range
function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Picks a number
function randomPick(num1, num2) {
    if(Math.floor(Math.random() * (2 - 1 + 1)) + 1 == 1){
        return num1;
    }
    else{
        return num2;
    }
}

//Picks a number from 3
function randomPick3(str1, str2, str3) {
  const randomNumber = Math.floor(Math.random() * 3); // Generates a random number between 0 and 2

  if (randomNumber === 0) {
      return str1;
  } else if (randomNumber === 1) {
      return str2;
  } else {
      return str3;
  }
}

//Picks a number from 4
function randomPick4(num1, num2, num3, num4) {
  let randomNumber = Math.floor(Math.random() * 4);
  if (randomNumber === 0) {
      return num1;
  } else if (randomNumber === 1) {
      return num2;
  } else if (randomNumber === 2) {
      return num3;
  } else {
      return num4;
  }
}

//Gets a random number from ranges
function randomMultiRange(range1, range2, range3, range4) {
    const ranges = [[range1, range2], [range3, range4]];
    const rangeIndex = Math.floor(Math.random() * ranges.length);
    const range = ranges[rangeIndex];
    return Math.floor(Math.random() * (range[1] - range[0] + 1)) + range[0];
}

//Calculates the hypotenuse
function calculateHypotenuse(leg1, leg2) {
    const hypotenuse = Math.sqrt(leg1 * leg1 + leg2 * leg2);
    return hypotenuse;
  }

//Calculate the angle of a triangle
function calculateAngle(hypotenuse, leg1) {
    const angleRadians = Math.acos(leg1 / hypotenuse);
    const angleDegrees = angleRadians * (180 / Math.PI);
    return angleDegrees;
}

//Calculates a numbers percantage
function calculatePercentage(number, total) {
    const percentage = (number / total) * 100;
    return percentage.toFixed(0);
}

//Shaking letters function
function shakeLetters(){
  let shake = document.querySelectorAll("#shake-element");
  shake.forEach(shakes => {
    let textInside = shakes.innerHTML;
    shakes.innerHTML = "";
    for(let i = 0;i < textInside.length;i++){
      let letter = textInside[i];
      if(letter == " "){
        shakes.innerHTML += '&nbsp;';
      }
      else{
            shakes.innerHTML += `<div class="word">${letter}</div>`;
      }
    }
  });  
}

setInterval(() => {
  let words = document.querySelectorAll(".word");
  if(words.length != 0){
    if(randomRange(1,2) == 1){
      let random_letter = randomRange(0,words.length-1);
      words[random_letter].style.animation = `shake${randomRange(1,4)} 0.1s infinite`;
      setTimeout(() => {
        words.forEach(word => {
          word.style.animation = "";
        });
      }, 100);
    }
    else{
      let random_letter = randomRange(0,words.length-1);
      let random_letter2 = randomRange(0,words.length-1);
      words[random_letter].style.animation = `shake${randomRange(1,4)} 0.1s infinite`;
        words[random_letter2].style.animation = `shake${randomRange(1,4)} 0.1s infinite`;
      setTimeout(() => {
        words.forEach(word => {
          word.style.animation = "";
        });
      }, 100);
    }
  }
}, randomRange(500,750));

//animate Element function 
function animateElement(element, style, seconds, startValue, endValue) {
  let currentValue = startValue;
  const increment = (endValue - startValue) / (seconds * 60);
  const interval = setInterval(() => {
    if (currentValue >= endValue) {
      clearInterval(interval);
    } else {
      currentValue += increment;
      element.style[style] = currentValue;
    }
  }, 16.67);
}

//animates multiple elements
function animateElements(elements, style, duration, startValue, endValue) {
  var interval = (endendValue - startValue) / (duration * 60); // Calculate the increment value
  var count = 0;

  var animate = function() {
    if (count < duration * 60) {
      count++;
      for (var i = 0; i < elements.length; i++) {
        var currentVal = startValue + interval * count;
        elements[i].style[style] = currentVal;
      }
      requestAnimationFrame(animate);
    }
  };
  animate();
}

//Encrypter
function encrypt(num) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let encryptedString = '';

  while (num > 0) {
    let remainder = (num - 1) % 26;
    encryptedString = alphabet[remainder] + encryptedString;
    num = Math.floor((num - remainder) / 26);
  }

  return encryptedString;
}

//Decrypter
function decrypt(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let decryptedNumber = 0;

  for (let i = 0; i < str.length; i++) {
    let charIndex = alphabet.indexOf(str[i]) + 1;
    decryptedNumber = decryptedNumber * 26 + charIndex;
  }

  return decryptedNumber;
}

//Save
function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

//Get
function get(key) {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : 0;
}