// Given 2 numbers N and K followed by N elements,print the number of repetition of K otherwise print '-1' if the element not found.
// Sample Testcase :
// INPUT
// 6 2
// 1 2 3 5 7 8
// OUTPUT
// 0


// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {
    //start-here

    let a = userInput[0].split(" ").map(Number);
    let b = userInput[1].split(" ").map(Number);
    let size = a[0];
    let k = a[1];
    let count = 0;
    for (let i = 0; i < size; i++) {
        if (k === b[i]) {
            count += 1;
        }
    }
    console.log(count - 1);
    //end-here
});