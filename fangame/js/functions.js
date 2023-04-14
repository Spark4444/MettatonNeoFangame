//Gets a random number from ranges
// TODO: unused function
function randomMultiRange(range1, range2, range3, range4) {
    const ranges = [[range1, range2], [range3, range4]];
    const rangeIndex = Math.floor(Math.random() * ranges.length);
    const range = ranges[rangeIndex];
    return Math.floor(Math.random() * (range[1] - range[0] + 1)) + range[0];
}


//Calculate the angle of a triangle
function calculateAngle(hypotenuse, leg1) {
    const angleRadians = Math.acos(leg1 / hypotenuse);
    const angleDegrees = angleRadians * (180 / Math.PI);
    return angleDegrees;
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
            const randomWordIndex = getRandomInteger(0, wordElements.length - 1);
            const randomWordElement = wordElements[randomWordIndex];
            const letterElements = randomWordElement.querySelectorAll('.letter');
            const randomNumber = getRandomInteger(0, 1);

            if (randomNumber === 0) {
                const randomLetterIndex = getRandomInteger(0, letterElements.length - 1);
                const randomLetterElement = letterElements[randomLetterIndex];
                randomLetterElement.style.animation = `shake${getRandomInteger(1, 4)} 0.1s infinite`;
                setTimeout(() => {
                    randomLetterElement.style.animation = '';
                }, 100);
            } else {
                const randomLetterIndex1 = getRandomInteger(0, letterElements.length - 1);
                const randomLetterIndex2 = getRandomInteger(0, letterElements.length - 1);
                const randomLetterElement1 = letterElements[randomLetterIndex1];
                const randomLetterElement2 = letterElements[randomLetterIndex2];
                randomLetterElement1.style.animation = `shake${getRandomInteger(1, 4)} 0.1s infinite`;
                randomLetterElement2.style.animation = `shake${getRandomInteger(1, 4)} 0.1s infinite`;
                setTimeout(() => {
                    randomLetterElement1.style.animation = '';
                    randomLetterElement2.style.animation = '';
                }, 100);
            }
        }, getRandomInteger(250, 500));
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
                const randomWordIndex = getRandomInteger(0, wordElements.length - 1);
                const randomWordElement = wordElements[randomWordIndex];
                const letterElements = randomWordElement.querySelectorAll('.letter');
                const randomNumber = getRandomInteger(0, 1);

                if (randomNumber === 0) {
                    const randomLetterIndex = getRandomInteger(0, letterElements.length - 1);
                    const randomLetterElement = letterElements[randomLetterIndex];
                    randomLetterElement.style.animation = `shake${getRandomInteger(1, 4)} 0.1s infinite`;
                    setTimeout(() => {
                        randomLetterElement.style.animation = '';
                    }, 100);
                } else {
                    const randomLetterIndex1 = getRandomInteger(0, letterElements.length - 1);
                    const randomLetterIndex2 = getRandomInteger(0, letterElements.length - 1);
                    const randomLetterElement1 = letterElements[randomLetterIndex1];
                    const randomLetterElement2 = letterElements[randomLetterIndex2];
                    randomLetterElement1.style.animation = `shake${getRandomInteger(1, 4)} 0.1s infinite`;
                    randomLetterElement2.style.animation = `shake${getRandomInteger(1, 4)} 0.1s infinite`;
                    setTimeout(() => {
                        randomLetterElement1.style.animation = '';
                        randomLetterElement2.style.animation = '';
                    }, 100);
                }
            });
        }, getRandomInteger(250, 500));
    }
}
