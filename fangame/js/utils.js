// Helper functions
// ~~ is bitwise operator that perform as faster version of function Math.floor()

/**
 * Get a collection of arguments and return one of them
 * @param  {...any} args 
 * @returns {any} argument
 */
function getRandomArgument(...args) {
    let index = ~~(Math.random() * args.length);
    return args[index];
}

/**
 * Get random integer number in range (min, max included)
 * @param {number} min 
 * @param {number} max 
 * @returns {number} result between min and max
 */
function getRandomInteger(min, max) {
    return ~~(Math.random() * (max - min + 1)) + min;
}

/**
 * Calculate percentage and return integer number
 * TODO: not sure if formula is correct
 * @param {number} value 
 * @param {number} total 
 * @returns {number} result
 */
function calculatePercentage(value, total) {
    return ~~(value / total) * 100;
}

