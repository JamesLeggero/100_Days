/*
A prime is a natural number greater than 1 that has no positive divisors other than 1 and itself. Given p integers, determine the primality of each integer and print whether it is Prime or Not prime on a new line.

Note: If possible, try to come up with an O(sqrt(n)) primality algorithm, or see what sort of optimizations you can come up with for an O(n) algorithm. Be sure to check out the Editorial after submitting your code!

Function Description

Complete the primality function in the editor below. It should return Prime if n is prime, or Not prime.

primality has the following parameter(s):

n: an integer to test for primality
Input Format

The first line contains an integer, p, denoting the number of integers to check for primality.
Each of the p subsequent lines contains an integer, n, the number you must test for primality.

Constraints

1 ≤ p ≤ 30
1 ≤ n ≤ 2 x 10^9

Output Format

For each integer, print whether n is Prime or Not prime on a new line.

Sample Input

3
12
5
7
Sample Output

Not prime
Prime
Prime
Explanation

We check the following p = 3 integers for primality:

1. n = 12 is divisible by numbers other than 1 and itself (i.e.: 2, 3, 4, 6), so we print Not prime on a new line.
2. n = 5 is only divisible 1 and itself, so we print Prime on a new line.
3. n = 7 is only divisible 1 and itself, so we print Prime on a new line.
*/

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the primality function below.
function primality(n) {
    let ans = "Prime"
    
    if (n === 0 || n === 1 || (n % 2 === 0 && n !== 2)) {
        ans = "Not prime"
    }
    if (n % Math.sqrt(n) === Math.sqrt(n)) {
        ans = "Not prime"
    }
    for (let i = 3; i < Math.ceil(Math.sqrt(n)); i += 2) {
        if (n % i === 0) {
            ans = "Not prime"
            break
            
        }
    }
    
    return ans
    
   
       
    
    


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const p = parseInt(readLine(), 10);

    for (let pItr = 0; pItr < p; pItr++) {
        const n = parseInt(readLine(), 10);

        const result = primality(n);

        ws.write(result + '\n');
    }

    ws.end();
}
