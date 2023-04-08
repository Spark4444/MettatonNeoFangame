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