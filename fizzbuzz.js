

// Here, we create our main function.
function fizzbuzz() {
    
    console.log('Welcome to FizzBuzz!');

    // Put your code here...
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log(`${i} - FizzBuzz`);
        } else if (i % 5 == 0) {
            console.log(`${i} - Buzz`);
        } else if (i % 3 == 0) {
            console.log(`${i} - Fizz`);
        } else {
            console.log(`${i}`);
        }
    }
    
}

// Now we run the main function...
fizzbuzz();
