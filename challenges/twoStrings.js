/*
Given two strings, determine if they share a common substring. A substring may be as small as one character.

For example, the words "a", "and", "art" share the common substring a. The words "be" and "cat" do not share a substring.

Function Description

Complete the function twoStrings in the editor below. It should return a string, either YES or NO based on whether the strings share a common substring.

twoStrings has the following parameter(s):

s1, s2: two strings to analyze .
Input Format

The first line contains a single integer p, the number of test cases.

The following p pairs of lines are as follows:

The first line contains string s1.
The second line contains string s2.
Constraints

s1 and s2 consist of characters in the range ascii[a-z].
1 <= p <= 10
1 <= |s1|,|s2| <= 10^5
Output Format

For each pair of strings, return YES or NO.

Sample Input

2
hello
world
hi
world
Sample Output

YES
NO
Explanation

We have p = 2 pairs to check:

s1 = 'hello', s2 = 'world'. The substrings 'o'  and 'l' are common to both strings.
a = 'hi', b = 'world'. s1 and s2 share no common substrings.
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

// Complete the twoStrings function below.
function twoStrings(s1, s2) {

    // const arr1 = s1.split('').sort()
    // const arr2 = s2.split('').sort()
    //     for (let i = 0; i < arr1.length; i++){
    //         for (let j = 0; j < arr2.length; j++) {
    //             if (arr1[i] === arr2[j]){
    //                 return 'YES'
    //             }
    //         }
    //     }
    //     return 'NO'

    for (let i = 0; i < s2.length; i++) {
        if (s2.indexOf(s1[i]) === -1){
            continue
        }
        return 'YES'
    }
    return 'NO'
        

   

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s1 = readLine();

        const s2 = readLine();

        let result = twoStrings(s1, s2);

        ws.write(result + "\n");
    }

    ws.end();
}
