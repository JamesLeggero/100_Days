/*Given an array of integers and a positive integer k, determine the number of (i,j) pairs where i < j and ar[i] + ar[j] is divisible by k.

Example

ar = [1, 2, 3, 4, 5, 6]

Three pairs meet the criteria: [1,4], [2,3] and [4,6].

Function Description

Complete the divisibleSumPairs function in the editor below.

divisibleSumPairs has the following parameter(s):

int n: the length of array ar
int ar[n]: an array of integers
int k: the integer divisor
Returns
- int: the number of pairs

Input Format

The first line contains 2 space-separated integers, n and k.
The second line contains n space-separated integers, each a value of ar[i].

Constraints

2 ≤ n ≤ 100
1 ≤ k ≤ 100
1 ≤ ar[i] ≤ 100

Sample Input

STDIN           Function
-----           --------
6 3             n = 6, k = 3
1 3 2 6 1 2     ar = [1, 3, 2, 6, 1, 2]
Sample Output

 5
Explanation

Here are the 5 valid pairs when k = 3:

(0, 2) -> ar[0] + ar[2] = 1 + 2 = 3
ar[0] + ar[5] = 1 + 2 = 3
ar[1] + ar[3] = 3 + 6 = 9
ar[2] + ar[4] = 2 + 1 = 3
ar[4] + ar[5] = 1 + 2 = 3
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

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the divisibleSumPairs function below.
function divisibleSumPairs(n, k, ar) {
    let total = 0
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i < j && (ar[i] + ar[j]) % k === 0){
                
                    total++
                
            }
        }
    }
    return total

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = divisibleSumPairs(n, k, ar);

    ws.write(result + "\n");

    ws.end();
}
