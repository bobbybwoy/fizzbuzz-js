

// Here, we create our main function.
function fizzbuzz() {

    console.log('Welcome to FizzBuzz!');

    // Put your code here...
    for (let i = 1; i <= 10000; i++) {
        let result = "";

        if (i % 3 === 0) result = "Fizz";
        if (i % 13 === 0) result += "Fezz";
        if (i % 5 === 0) result += "Buzz";
        if (i % 7 === 0) result += "Bang";
        if (i % 11 === 0)
            if (result === "Fezz")
                result += "Bong";
            else result = "Bong";
        if (i % 17 == 0) {
            if (result.length === 12) {

            } else {
                
            }
            console.log(`17: ${i} ${result}`);
        }

        // result == "" ? console.log(i) : console.log(result);
    }

}

// Now we run the main function...
fizzbuzz();
