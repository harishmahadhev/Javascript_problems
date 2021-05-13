// Given 2 numbers N and M add both the numbers and check whether the sum is odd or even.
// Sample Testcase :
// INPUT
// 9 2
// OUTPUT
// odd



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
    let n = userInput[0].split(" ");
    for (i = 0; i < n.length; i++) {
        n[i] = +n[i];
    }
    let s1 = n[0];
    let s2 = n[1];
    let sum = s1 + s2;
    if (sum % 2 == 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
    //end-here
});