// initiate the function "threeByThree" that takes any number
function threeByThree (num) {
    // conditional statement to check if the number is divisible by 3
    if (num % 3 === 0) {
        // display the number is divisible by 3 if the condition is true
        return num, 'is divisible by 3';
    } else {
        // display the number is not divisible by 3 if the condition is false
        return num, 'is not divisible by 3';
        }
};

// invoke the function to check if the function work or not
threeByThree (6);