<div align="center"> 
    <img src="./img/perfectFour.png">
</div>

## Try to guess the 4-digit number.

This documentation provides an overview of the Perfect Four game code, explaining its functions and how the game operates.

# Installation

1. Clone the repository to your local machine.

    ```javascript
    git clone https://github.com/Pilag6/project-perfectFourGame.git
    ```

2. Navigate to the project directory.

    ```javascript
    cd project-perfectFourGame/
    ```

3. Install the dependencies.

    ```javascript
    npm install
    ```

4. Run the game.

    ```javascript
    node play
    ```

# Rules and Instructions

Welcome to the Perfect Four game! This game challenges you to guess a randomly generated 4-digit number with unique digits. Here are the rules and instructions:

1. **Objective:** Guess the correct 4-digit number within 8 attempts.

2. **Game Start:**

    - The game will generate a random 4-digit number with unique digits. For example: 2574
    - You have 8 attempts to guess this number.

3. **Guessing Rules:**

    - Enter a 4-digit number when prompted.
    - Digits must be different within your guess.
    - _Example:_

    ```
    Valid guess - 1369;
    Invalid guess - 1123.
    ```

4. **Feedback:**

    - After each guess, you will receive feedback on the correctness of your digits.
    - "Well Located" indicates the number of digits correctly positioned and valued.
    - "Misplaced" indicates the number of digits present but in the wrong position.
    - _Example:_

    ```
    If your guess is 1275 and the random number is 1574,
    feedback might be "Well Located: 2 | Misplaced: 1."
    ```

    <div align="center"> 
        <img src="./img/guessRandom.jpg">
    </div>

5. **Repeated Digits:**

    - If you enter a number with repeated digits, you'll be prompted to enter a different one.
    - Repeated digit entries will result in a deduction of attempts.
    - _Example:_

    ```
    If your guess is 1123,
    you'll be prompted to enter a different number
    because you are repeating the number "1".
    ```

    - The same will happen if you enter a number with more or less than 4 digits.
    - More or less than 4 digits will result in a deduction of attempts.
    - _Example:_

    ```
    If your guess is 123,
    you'll be prompted to enter a different number
    because you are missing a digit.

    If your guess is 12345,
    you'll be prompted to enter a different number
    because you have an extra digit.
    ```

6. **Winning:**

    - If you correctly guess all 4 digits in their correct positions, you win!
    - The game will congratulate you on your victory.

7. **Losing:**

    - You have 8 attempts. If you don't guess correctly within these attempts, you lose.
    - The correct number will be revealed upon losing.

8. **Game Display:**

    - The game will display your current guess, well-located and misplaced digits, and the remaining number of guesses after each attempt.
    - _Example:_ After a guess, the display might be:

    ```
     1. Your guess: 1369
     2. Well Located: 1 | Misplaced: 2
     3. Guesses left: 6
    ```
    - The game will also display the correct number upon losing.

Good luck and enjoy the Perfect Four game!

---

---

---

---

# Code Overview

## 1. `checkGuess` Function

This function takes two parameters, `randomNumber` and `userGuess`, and compares them to determine how well the user's guess matches the randomly generated number.

-   `randomNumber`: A randomly generated 4-digit number with unique digits.
-   `userGuess`: The user's input, a 4-digit number.

### Function Logic

1. **Convert Numbers to Arrays:**

- `randomNumberDigits`: Convert the randomNumber to a string and then split it into an array of individual digits.
- `userGuessDigits`: Convert the userGuess to a string and then split it into an array of individual digits.

2. **Initialize Counters:**

- `wellLocated`: Counter for digits that are correctly located in both position and value.
- `misplaced`: Counter for digits that are present in the user's guess but located in the wrong position compared to the random number.

3. **Check Well-Located Digits:**

- Iterate through each digit of the guess using a for loop.
- If the digit at the current position in `randomNumberDigits` is equal to the digit at the same position in `userGuessDigits`, increment the `wellLocated` counter.

4. **Check Misplaced Digits:**

If a digit in `userGuessDigits` is not well-located (checked in the previous step) but exists in `randomNumberDigits`, increment the `misplaced` counter.

5. **Return Results:**

Return an object containing the counts of well-located and misplaced digits: `{ wellLocated, misplaced }`.

Example

```javascript
const randomNumExample = 7021;
const userNumExample = 7142;

const result = checkGuess(randomNumExample, userNumExample);
console.log(result); // { wellLocated: 1, misplaced: 2 }
```	
In this example, the function compares the digits at each position in the `randomNumber` and `userGuess`. One digit is well-located (digit 7), and two digits are misplaced (digits 1 and 2). The result object reflects these counts.

## 2. `generateRandomNumber` Function

This function generates a random 4-digit number with unique digits.

-   It uses `Math.random()` to generate a random number between 0 and 1, then scales and rounds it to obtain a 4-digit number.
-   The generated number is checked to ensure it is greater than or equal to 1000 and has no repeated digits using the `hasRepeatedDigits` function.

## 3. `hasRepeatedDigits` Function

This function is designed to check whether a given number has repeated digits. It's a crucial part of the Perfect Four game as having repeated digits in a guess is against the game rules. Here's a breakdown of how the function works:

Explanation:
1. **Conversion to String:**

`const digits = String(number).split("");`
- The function starts by converting the given number to a string and then splitting it into an array of individual digits.

2. **Filtering Unique Digits:**

`const uniqueDigits = digits.filter((digit, index) => { return digits.indexOf(digit) === index; });`

- The function uses the `filter` method to create an array (`uniqueDigits`) containing only the unique digits. The filter function checks if the index of the current digit is equal to its first occurrence in the array.

3. **Comparison of Lengths:**

`return digits.length !== uniqueDigits.length;`

- Finally, the function compares the length of the original array of digits with the length of the array containing unique digits. If they are not equal, it indicates that there are repeated digits in the original number, and the function returns `true`.

Example:
```javascript
const hasRepeated = hasRepeatedDigits(1234); // Returns false (no repeated digits)
const hasRepeatedAgain = hasRepeatedDigits(1224); // Returns true (repeated digit: 2)
```	
In the Perfect Four game, this function is used to ensure that the user's guess doesn't contain repeated digits. If a repeated digit is detected, the game prompts the user to enter a different 4-digit number.

## 4. `displayStatus` Function

This function displays the current game status, including the user's guess, well-located and misplaced digits, and the remaining number of guesses.

-   It takes four parameters: `userGuess`, `wellLocated`, `misplaced`, and `guessesLeft`.
-   The information is logged to the console in a formatted manner.

## 5. `perfectFour` Function

This is the main game function that orchestrates the Perfect Four game.

-   It calls `generateRandomNumber` to get a random number and initializes the number of remaining guesses.
-   The game welcomes the player and provides the rules.
-   It then enters a loop where the user is prompted to input their guess.
-   The input is validated for length and repeated digits.
-   The game calls `checkGuess` to evaluate the guess and updates the display using `displayStatus`.
-   The game continues until the user correctly guesses the number or runs out of guesses.

## 6. Running the Game

The last line of code calls the `perfectFour` function to start the game.

**Note:** The line `console.log(randomNumber); // DELETE THIS LINE AFTER TESTING` is included for testing purposes and should be removed once testing is complete.

## 7. Sources

-   [readline-sync](https://www.npmjs.com/package/readline-sync)
-   [Getting Started with readline-sync: Building Command-Line Applications in Node.js](https://bit.ly/47Mf7mZ)
-   [How to change node.js's console font color?](https://bit.ly/49QdkPB)
-   [ASCII Art](https://bit.ly/40ODPB1)
