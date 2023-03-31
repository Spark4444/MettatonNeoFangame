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

//Finds the angle between angles that are in %
function findAngle(x1, y1, x2, y2) {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
    const angleRadians = Math.atan2(deltaY, deltaX);
    return angleRadians * (180 / Math.PI) + 45;
} 