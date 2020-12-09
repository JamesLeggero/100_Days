/*
The Utopian Tree goes through 2 cycles of growth every year. Each spring, it doubles in height. Each summer, its height increases by 1 meter.

A Utopian Tree sapling with a height of 1 meter is planted at the onset of spring. How tall will the tree be after n growth cycles?

For example, if the number of growth cycles is n = 5, the calculations are as follows:

Period  Height
0          1
1          2
2          3
3          6
4          7
5          14
Function Description

Complete the utopianTree function in the editor below.

utopianTree has the following parameter(s):

int n: the number of growth cycles to simulate
Returns

int: the height of the tree after the given number of cycles
Input Format

The first line contains an integer, t, the number of test cases.
t subsequent lines each contain an integer, n, the number of cycles for that test case.

Constraints



Sample Input

3
0
1
4
Sample Output

1
2
7
Explanation

There are 3 test cases.

In the first case (n = 0), the initial height (H = 1) of the tree remains unchanged.

In the second case (n = 1), the tree doubles in height and is 2 meters tall after the spring cycle.

In the third case (n = 4), the tree doubles its height in spring (n = 1, H = 2), then grows a meter in summer (, ), then doubles after the next spring (n = 2, H = 3), and grows another meter after summer (n = 3, H = 6). Thus, at the end of 4 cycles, its height is 7 meters.
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

// Complete the utopianTree function below.
function utopianTree(n) {

    let height = 1
    //two cycles always 2*height +1
    for (let i = 0; i < Math.floor(n/2); i++) {
        height = (2 * height) + 1 
    }
    //checking if we need to double one more time (in case n/2 was odd when we floored)
    n % 2 === 1 ? height *= 2 : height = height
    return height

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        let result = utopianTree(n);

        ws.write(result + "\n");
    }

    ws.end();
}
