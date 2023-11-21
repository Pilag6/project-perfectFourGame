<div align="center"> 
    <img src="./perfectFour.png">
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

The function returns an object with two properties:

-   `wellLocated`: The count of digits that are correctly located in both position and value.
-   `misplaced`: The count of digits that are present in the user's guess but located in the wrong position compared to the random number.

## 2. `generateRandomNumber` Function

This function generates a random 4-digit number with unique digits.

-   It uses `Math.random()` to generate a random number between 0 and 1, then scales and rounds it to obtain a 4-digit number.
-   The generated number is checked to ensure it is greater than or equal to 1000 and has no repeated digits using the `hasRepeatedDigits` function.

## 3. `hasRepeatedDigits` Function

This function checks if a given number has repeated digits.

-   It converts the number to a string and then creates an array of its digits.
-   The array is filtered to include only unique digits, and the function returns `true` if the length of the original array is not equal to the length of the unique digits array.

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
