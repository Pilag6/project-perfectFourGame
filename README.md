<div align="center"> 
    <img src="./perfectFour.png">
</div>

## Try to guess the 4-digit number.

This documentation provides an overview of the Perfect Four game code, explaining its functions and how the game operates.

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
