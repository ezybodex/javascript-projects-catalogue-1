// Write a function to print each digit in reverse order

// const num = 314

function printDigits(num) {
    num = String(num); // converts to string
    let result = [];
    console.log("The length of num is:", num.length);
    for (let i = num.length - 1; i >= 0; i -= 1) {
        console.log(num[i]);
        result.push(Number(num[i]));
    }
    console.log(result);
}

printDigits(314);


