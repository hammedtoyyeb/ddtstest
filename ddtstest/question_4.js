// initiate the function "maxConsecutiveOnes" that takes consecutive binary numbers
function maxConsecutiveOnes (num) {
    // declaring some useful variables
    let counter = 1;
    let result = 1;
    // converting the input parameter into a string and then an array
    let newNum = num.toString().split('');
    // looping through the newly created array
    for (let i = 0; i < newNum.length; i++) {
        // using conditional statement to check whether child arrays are consecutive
        if (newNum[i] === newNum[i + 1]) {
            // using conditional statement to reset the counter should the next child array is zero
            if (newNum[i + 1] === 0) {
                counter = 1;
                result = 1;
                return result;
            } else {
                // increase the counter and the result if the above condition is false
                counter += 1;
                result = result + 1;
                return result;
            }
        
        }    
            

    }
    
}
// invoke the function with binary numbers of any combinations of 1's and 0's
maxConsecutiveOnes (000100);