// FUNCTION TO CHECK THE USER'S GUESS AGAINST THE RANDOM NUMBER

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
const userNumExample = 8142;

const result = checkGuess(randomNumExample, userNumExample);
console.log(result); // { wellLocated: 1, misplaced: 3 }
console.log("-".repeat(20));

// --------------------------------------------------
// FUNCTION TO GENERATE A RANDOM 4-DIGIT DIFFERENT NUMBER

// function generateRandomNumber() {
//     let randomNumber = Math.floor(Math.random() * 10000);

//     while (randomNumber < 1000 || hasRepeatedDigits(randomNumber)) {
//         randomNumber = Math.floor(Math.random() * 10000);
//     }

//     return randomNumber;
// }

// const randomNum = generateRandomNumber();
// console.log(randomNum);
// console.log("-".repeat(20));

// // --------------------------------------------------
// // FUNCTION TO CHECK IF THE NUMBER HAS REPEATED DIGITS

// function hasRepeatedDigits(number) {
//     const digits = String(number).split("");

//     const uniqueDigits = digits.filter((digit, index) => {
//         return digits.indexOf(digit) === index;
//     });

//     return digits.length !== uniqueDigits.length;
// }

// const hasRepeated = hasRepeatedDigits(1234);
// const hasRepeatedAgain = hasRepeatedDigits(1224);

// console.log(hasRepeated); // false
// console.log(hasRepeatedAgain); // true

// // --------------------------------------------------
// // FUNCTION TO DISPLAY GAME STATUS
// function displayStatus(userGuess, wellLocated, misplaced, guessesLeft) {
//     console.log(`
//     1. Your guess: ${userGuess}
        
//     2. Well Located: ${wellLocated} | Misplaced: ${misplaced}
        
//     3. Guesses left: ${guessesLeft}
//   `);
// }

// displayStatus(1234, 1, 2, 3);
// console.log("-".repeat(20));
