/*
A left rotation operation on an array shifts each of the array's elements 1 unit to the left. For example, if 2 left rotations are performed on array [1, 2, 3, 4, 5], then the array would become [3, 4, 5, 1, 2].

Given an array a of n integers and a number, d, perform d left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

Function Description

Complete the function rotLeft in the editor below. It should return the resulting array of integers.

rotLeft has the following parameter(s):

An array of integers a.
An integer d, the number of rotations.
Input Format

The first line contains two space-separated integers n and d, the size of a and the number of left rotations you must perform.
The second line contains n space-separated integers a[i].

Constraints

1 <= n <= 10^5
1 <= d <= n
1 <= a[i] <= 10^6

Output Format

Print a single line of n space-separated integers denoting the final state of the array after performing d left rotations.

Sample Input

5 4
1 2 3 4 5
Sample Output

5 1 2 3 4
Explanation

When we perform d = 4 left rotations, the array undergoes the following sequence of changes:

[1, 2, 3, 4, 5] -> [2, 3, 4, 5, 1] -> [3, 4, 5, 1, 2] -> [4, 5, 1, 2, 3] -> [5, 1, 2, 3, 4]
*/
'use strict';

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

// Complete the countSwaps function below.
function countSwaps(a) {

    let count = 0

for (let i = 0; i < a.length; i++) {
    
    for (let j = 0; j < a.length - 1; j++) {
        // Swap adjacent elements if they are in decreasing order
        if (a[j] > a[j + 1]) {
            // swap(a[j], a[j + 1]);
            [a[j], a[j+1]] = [a[j+1], a[j]]
            count++
        }
    }
    
}
console.log(`Array is sorted in ${count} swaps.`)
console.log(`First Element: ${a[0]}`)
console.log(`Last Element: ${a[a.length - 1]}`)


}

function main() {
    const n = parseInt(readLine(), 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    countSwaps(a);
}
