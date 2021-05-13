// Given a range of 2 numbers (i.e) L and R count the number of prime numbers in the range (inclusive of L and R ).
// Input Size : L <= R <= 100000(complexity O(n) read about Sieve of Eratosthenes)
// Sample Testcase :
// INPUT
// 2 5
// OUTPUT
// 3



const readline = require('readline');
const inp = readline.createInterface({
    input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
    userInput.push(data);
});
inp.on("close", () => {

    //start-here
    let n = userInput[0].split(" ").map(Number);
    let a = n[0];
    let b = n[1];
    let count = 0,
        num = 0;
    for (let i = a; i <= b; i++) {
        count = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                count += 1;

            }
        }
        if (count === 2) {
            num += 1;
        }

    }
    console.log(num);
    ///end-here
});