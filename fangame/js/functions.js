//gets a number from random range
function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//gets a random number from ranges
function randomMultiRange(range1, range2, range3, range4) {
    const ranges = [[range1, range2], [range3, range4]];
    const rangeIndex = Math.floor(Math.random() * ranges.length);
    const range = ranges[rangeIndex];
    return Math.floor(Math.random() * (range[1] - range[0] + 1)) + range[0];
  }