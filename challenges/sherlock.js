/*

Sherlock considers a string to be valid if all characters of the string appear the same number of times. It is also valid if he can remove just 1 character at 1 index in the string, and the remaining characters will occur the same number of times. Given a string s, determine if it is valid. If so, return YES, otherwise return NO.

Example

s = abc

This is a valid string because frequencies are {a: 1, b: 1, c: 1}.

s = abcc


This is a valid string because we can remove one c and have 1 of each character in the remaining string.

s = abccc

This string is not valid as we can only remove 1 occurrence of c. That leaves character frequencies of {a: 1, b: 1, c: 2}.

Function Description

Complete the isValid function in the editor below.

isValid has the following parameter(s):

string s: a string
Returns

string: either YES or NO
Input Format

A single string s.

Constraints

1 ≤ |s| ≤ 10^5

Each character s[i] eps ascii[a-z]
Sample Input 0

aabbcd
Sample Output 0

NO
Explanation 0

Given s = "aabbcd", we would need to remove two characters, both c and d -> aabb or a and b -> abcd, to make it valid. We are limited to removing only one character, so s is invalid.

Sample Input 1

aabbccddeefghi
Sample Output 1

NO
Explanation 1

Frequency counts for the letters are as follows:

{'a': 2, 'b': 2, 'c': 2, 'd': 2, 'e': 2, 'f': 1, 'g': 1, 'h': 1, 'i': 1}

There are two ways to make the valid string:

Remove 4 characters with a frequency of 1: {fghi}.
Remove 5 characters of frequency 2: {abcde}.
Neither of these is an option.

Sample Input 2

abcdefghhgfedecba
Sample Output 2

YES
Explanation 2

All characters occur twice except for e which occurs 3 times. We can delete one instance of e to have a valid string.
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

// Complete the isValid function below.
function isValid(s) {

    const map = {}
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = (map[s[i]] || 0) + 1
    }

    const OVM = Object.values(map)

    OVM.sort((a,b)=>a-b)
    if (OVM[0] === OVM[OVM.length - 1]) {
        return 'YES'
    } else if (OVM[1] === OVM[OVM.length - 1]) {
        if (OVM[0] + 1 === OVM[1] || OVM[0] === 1) {
            return 'YES'
        }
    } else if (OVM[0] === OVM[OVM.length - 2]) {
        if (OVM[OVM.length - 2] + 1 === OVM[OVM.length - 1]) {
            return 'YES'
        }
    }


    return 'NO'

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = isValid(s);

    ws.write(result + "\n");

    ws.end();
}
