/*
You are given a string containing characters A and B only. Your task is to change it into a string such that there are no matching adjacent characters. To do this, you are allowed to delete zero or more characters in the string.

Your task is to find the minimum number of required deletions.

For example, given the string s = AABAAB, remove an A at positions 0 and 3 to make s = ABAB in 2 deletions.

Function Description

Complete the alternatingCharacters function in the editor below. It must return an integer representing the minimum number of deletions to make the alternating string.

alternatingCharacters has the following parameter(s):

s: a string
Input Format

The first line contains an integer q, the number of queries.
The next q lines each contain a string s.

Constraints

Each string  will consist only of characters A and B
1 <= q <= 10
1 <= |s| <= 10^5

Output Format

For each query, print the minimum number of deletions required on a new line.

Sample Input

5
AAAA
BBBBB
ABABABAB
BABABA
AAABBB
Sample Output

3
4
0
0
4
Explanation

The characters marked red are the ones that can be deleted so that the string doesn't have matching consecutive characters.

A(AAA) -> 3
B(BBBB) -> 4
ABABABABA -> 0
BABABA -> 0
A(AA)B(BB) -> 4
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

// Complete the alternatingCharacters function below.
function alternatingCharacters(s) {

    let count = 0
    // const newArr = s.split('')
    // for (let i = 0; i < newArr.length; i++) {
    //     if (newArr[i] === newArr[i - 1]){
    //         newArr.splice(newArr[i], 1)
    //     }

    // }

    // return newArr.join('')

    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i+1]) count++
    }

    return count


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = alternatingCharacters(s);

        ws.write(result + "\n");
    }

    ws.end();
}
