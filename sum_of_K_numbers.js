// Write a program to print the sum of the first K natural numbers.
// Input Size : n <= 100000
// Sample Testcase :
// INPUT
// 3
// OUTPUT
// 6

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
    let n = userInput.map(Number);
    let count = 0;
    for (let i = 1; i <= n; i++) {
        count += i;
    }
    console.log(count);
    ///end-here
});