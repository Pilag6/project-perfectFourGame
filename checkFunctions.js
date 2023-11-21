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