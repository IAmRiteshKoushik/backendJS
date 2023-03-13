const num1 = 5;
const num2 = 10;

function addValues() {
    console.log(`the sum is: ${num1 + num2}`)

}

// If we create a funciton that is being invoked
// in the script of the module
// then that can be imported directly 
// by using the reuqire function.
addValues()