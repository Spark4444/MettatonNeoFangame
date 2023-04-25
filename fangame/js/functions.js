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

//Makes the animation for letters
function shakeLetters() {
  const shakeElement = document.querySelector('#shake-element');
  letterId = 0;
  clearInterval(intervalL);
  if (shakeElement) {
    const originalText = shakeElement.textContent;
    const words = originalText.split(' ');
    shakeElement.textContent = '';

    words.forEach((word, wordIndex) => {
      const wordElement = document.createElement('div');
      wordElement.className = 'word';
      
      word.split('').forEach((letter, letterIndex) => {
        if (letter === ' ') {
          const spaceElement = document.createElement('div'); // Create a <div> element for space
          spaceElement.innerHTML = '&nbsp;'; // Set the content to a non-breaking space
          wordElement.appendChild(spaceElement); // Append <div> element to wordElement
        } else {
          const letterElement = document.createElement('div');
          letterElement.className = 'letter';
          letterElement.textContent = letter;
          letterElement.id = `letter${letterId++}`;
          wordElement.appendChild(letterElement);
        }
      });

      shakeElement.appendChild(wordElement);
      if (wordIndex < words.length - 1) {
        const spaceElement = document.createElement('div'); // Create a <div> element for space
        spaceElement.innerHTML = '&nbsp;'; // Set the content to a non-breaking space
        shakeElement.appendChild(spaceElement);
      }
    });

    intervalL = setInterval(() => {
      const wordElements = document.querySelectorAll('.word');
      const randomWordIndex = randomRange(0, wordElements.length - 1);
      const randomWordElement = wordElements[randomWordIndex];
      const letterElements = randomWordElement.querySelectorAll('.letter');
      const randomNumber = randomRange(0, 1);
      
      if (randomNumber === 0) {
        const randomLetterIndex = randomRange(0, letterElements.length - 1);
        const randomLetterElement = letterElements[randomLetterIndex];
        randomLetterElement.style.animation = `shake${randomRange(1,4)} 0.1s infinite`;
        setTimeout(() => {
          randomLetterElement.style.animation = '';
        }, 100);
      } else {
        const randomLetterIndex1 = randomRange(0, letterElements.length - 1);
        const randomLetterIndex2 = randomRange(0, letterElements.length - 1);
        const randomLetterElement1 = letterElements[randomLetterIndex1];
        const randomLetterElement2 = letterElements[randomLetterIndex2];
        randomLetterElement1.style.animation = `shake${randomRange(1,4)} 0.1s infinite`;
        randomLetterElement2.style.animation = `shake${randomRange(1,4)} 0.1s infinite`;
        setTimeout(() => {
          randomLetterElement1.style.animation = '';
          randomLetterElement2.style.animation = '';
        }, 100);
      }
    }, randomRange(250,500));
  }
}

//Makes the animation for letters for an array
function shakeLettersArr() {
  const shakeElements = document.querySelectorAll('#shake-element'); // Select all elements with id 'shake-element'
  
  clearInterval(intervalL);
  
  if (shakeElements.length > 0) {
    shakeElements.forEach(shakeElement => {
      const originalText = shakeElement.textContent;
      const words = originalText.split(' ');
      shakeElement.textContent = '';
      
      words.forEach((word, wordIndex) => {
        const wordElement = document.createElement('div');
        wordElement.className = 'word';
        
        word.split('').forEach((letter, letterIndex) => {
          if (letter === ' ') {
            const spaceElement = document.createElement('div'); // Create a <div> element for space
            spaceElement.innerHTML = '&nbsp;'; // Set the content to a non-breaking space
            wordElement.appendChild(spaceElement); // Append <div> element to wordElement
          } else {
            const letterElement = document.createElement('div');
            letterElement.className = 'letter';
            letterElement.textContent = letter;
            letterElement.id = `letter${letterId++}`;
            wordElement.appendChild(letterElement);
          }
        });
        
        shakeElement.appendChild(wordElement);
        if (wordIndex < words.length - 1) {
          const spaceElement = document.createElement('div'); // Create a <div> element for space
          spaceElement.innerHTML = '&nbsp;'; // Set the content to a non-breaking space
          shakeElement.appendChild(spaceElement);
        }
      });
    });
    
    intervalL = setInterval(() => {
      shakeElements.forEach(shakeElement => {
        const wordElements = shakeElement.querySelectorAll('.word');
        const randomWordIndex = randomRange(0, wordElements.length - 1);
        const randomWordElement = wordElements[randomWordIndex];
        const letterElements = randomWordElement.querySelectorAll('.letter');
        const randomNumber = randomRange(0, 1);
        
        if (randomNumber === 0) {
          const randomLetterIndex = randomRange(0, letterElements.length - 1);
          const randomLetterElement = letterElements[randomLetterIndex];
          randomLetterElement.style.animation = `shake${randomRange(1,4)} 0.1s infinite`;
          setTimeout(() => {
            randomLetterElement.style.animation = '';
          }, 100);
        } else {
          const randomLetterIndex1 = randomRange(0, letterElements.length - 1);
          const randomLetterIndex2 = randomRange(0, letterElements.length - 1);
          const randomLetterElement1 = letterElements[randomLetterIndex1];
          const randomLetterElement2 = letterElements[randomLetterIndex2];
          randomLetterElement1.style.animation = `shake${randomRange(1,4)} 0.1s infinite`;
          randomLetterElement2.style.animation = `shake${randomRange(1,4)} 0.1s infinite`;
          setTimeout(() => {
            randomLetterElement1.style.animation = '';
            randomLetterElement2.style.animation = '';
          }, 100);
        }
      });
    }, randomRange(250,500));
  }
}

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
