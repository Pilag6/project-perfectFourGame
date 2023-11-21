// Function to check the user's guess against the random number
function checkGuess(randomNumber, userGuess) {
    const randomNumberDigits = randomNumber.toString().split("");
    // console.log(randomNumberDigits)

    const userGuessDigits = userGuess.toString().split("");
    // console.log(userGuessDigits)

    let wellLocated = 0;
    let misplaced = 0;

    for (let i = 0; i < 4; i++) {
        if (randomNumberDigits[i] === userGuessDigits[i]) {
            wellLocated++;
        } else if (randomNumberDigits.includes(userGuessDigits[i])) {
            misplaced++;
        }
    }

    // console.log("Well Located", wellLocated, "Misplaced", misplaced)

    return { wellLocated, misplaced };
}

const randomNumExample = 7021;
const userNumExample = 7142;

const result = checkGuess(randomNumExample, userNumExample);
console.log(result); // { wellLocated: 1, misplaced: 3 }
console.log("-".repeat(20));

// --------------------------------------------------

// Function to check if the number has repeated digits

function hasRepeatedDigits(number) {
    const digits = String(number).split("");

    const uniqueDigits = digits.filter((digit, index) => {
        return digits.indexOf(digit) === index;
    });

    return digits.length !== uniqueDigits.length;
}

const hasRepeated = hasRepeatedDigits(1234); 
const hasRepeatedAgain = hasRepeatedDigits(1224);

console.log(hasRepeated); // false
console.log(hasRepeatedAgain); // true