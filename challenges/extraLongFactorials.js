/*
The factorial of the integer n, written n!, is defined as:

n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1

Calculate and print the factorial of a given integer.

For example, if n = 30, we calculate 30 * 29 * 28 * ... * 3 * 2 * 1 and get 265252859812191058636308480000000.

Function Description

Complete the extraLongFactorials function in the editor below. It should print the result and return.

extraLongFactorials has the following parameter(s):

n: an integer
Note: Factorials of n > 20 can't be stored even in a 64-bit long long variable. Big integers must be used for such calculations. Languages like Java, Python, Ruby etc. can handle big integers, but we need to write additional code in C/C++ to handle huge values.

We recommend solving this challenge using BigIntegers.

Input Format

Input consists of a single integer n

Constraints

1 ≤ 100


Output Format

Print the factorial of n.

Sample Input

25

Sample Output

15511210043330985984000000

Explanation

25! = 25 * 24 * 23 * ... * 3 * 2 * 1
*/

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the extraLongFactorials function below.
function extraLongFactorials(n) {
    
    let newN = BigInt(n)
    

    for (let i = newN - BigInt(1); i > 0; i--) {
        newN *= i
    }
    
    console.log(newN.toString().slice(newN.length - 1))
    
}

function main() {
    const n = parseInt(readLine(), 10);

    extraLongFactorials(n);
}
