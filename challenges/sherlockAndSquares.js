/*
Watson likes to challenge Sherlock's math ability. He will provide a starting and ending value that describe a range of integers, inclusive of the endpoints. Sherlock must determine the number of square integers within that range.

Note: A square integer is an integer which is the square of an integer, e.g. 1, 4, 9, 16, 25.

Example

a = 24
b = 49

There are three square integers in the range: 25, 36 and 49. Return .

Function Description

Complete the squares function in the editor below. It should return an integer representing the number of square integers in the inclusive range from a to b.

squares has the following parameter(s):

int a: the lower range boundary
int b: the upper range boundary
Returns

int: the number of square integers in the range
Input Format

The first line contains q, the number of test cases.
Each of the next q lines contains two space-separated integers, a and b, the starting and ending integers in the ranges.

Constraints

1 ≤ q ≤ 100
1 ≤ a ≤ b ≤ 10^9

Sample Input

2
3 9
17 24
Sample Output

2
0
Explanation

Test Case #00: In range [3, 9], 4 and 9 are the two square integers.
Test Case #01: In range [17, 24], there are no square integers.
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

//timeout version

/*
function squares(a, b) {
    let squareCount = 0
    for (let i = a; i <= b; i ++) {
        if (Number.isInteger(Math.sqrt(i)) === true) {
            squareCount++
        }
    }
    return squareCount
}
*/

//all passed version
function squares(a, b) {
    let squareCount = 0
    
    //make square numbers UP TO B
    const squareArray = []
    let i = 0
    while ((i + 1)**2 <= b) {
        squareArray.push((i + 1)**2)
        i ++
    }
    
    //remove anything lower than a
    i = 0
    
    while (squareArray[i] < a) {
        squareArray.shift()
    }
    return squareArray.length
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const ab = readLine().split(' ');

        const a = parseInt(ab[0], 10);

        const b = parseInt(ab[1], 10);

        let result = squares(a, b);

        ws.write(result + "\n");
    }

    ws.end();

