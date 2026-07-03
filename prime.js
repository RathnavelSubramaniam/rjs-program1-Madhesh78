/**
 * Checks if a number is a prime number.
 * @param {number} num - The number to check.
 * @returns {boolean} True if prime, false otherwise.
 */
const isPrime = (num) => {
    // Handle numbers less than or equal to 1
    if (num <= 1) {
        return false;
    }
    // Handle the number 2
    if (num === 2) {
        return true;
    }
    // Eliminate even numbers greater than 2
    if (num % 2 === 0) {
        return false;
    }
    // Check for factors up to the square root of the number
    const limit = Math.sqrt(num);
    for (let i = 3; i <= limit; i += 2) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};
const number = 17;

if (isPrime(number)) {
    console.log(number + " is a Prime Number");
} else {
    console.log(number + " is Not a Prime Number");
}

// Export the function for the test cases
module.exports = isPrime;
