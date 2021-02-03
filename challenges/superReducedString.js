/*
Reduce a string of lowercase characters in range ascii[‘a’..’z’]by doing a series of operations. In each operation, select a pair of adjacent letters that match, and delete them.

Delete as many characters as possible using this method and return the resulting string. If the final string is empty, return Empty String

Example.

s = 'aab'


aab shortens to b in one operation: remove the adjacent a characters.

s = 'abba'


Remove the two 'b' characters leaving 'aa'. Remove the two 'a' characters to leave ''. Return 'Empty String'.

Function Description

Complete the superReducedString function in the editor below.

superReducedString has the following parameter(s):

string s: a string to reduce
Returns

string: the reduced string or Empty String
Input Format

A single string, .

Constraints

1 ≤ length of s ≤ 100

Sample Input 0

aaabccddd
Sample Output 0

abd
Explanation 0

Perform the following sequence of operations to get the final string:

aaabccddd → abccddd → abddd → abd
Sample Input 1

aa
Sample Output 1

Empty String
Explanation 1

aa → Empty String
Sample Input 2

baab
Sample Output 2

Empty String
Explanation 2

baab → bb → Empty String
*/

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the superReducedString function below.
function superReducedString(s) {

    let sArr = s.split('')
    
    while (sArr.length >= 0) {
        if (sArr.length === 0) {
            return 'Empty String'
        }
        let reductionCount = 0
        for (let i = 0; i < sArr.length; i++) {
            if (sArr[i] === sArr[i + 1]) {
                sArr.splice(i, 2)
                reductionCount++
            }
        }
        if (reductionCount === 0) {
            return sArr.join('')
        }
    }

    // function recursiveReduction(str) {
    //     let strArg = str.toString().split('')
    //     if (strArg.length === 0) {
    //         return 'Empty String'
    //     } else {
    //         let spliceCount = 0
    //         for (let i = 0; i < strArg.length; i++) {
    //             if (strArg[i] === strArg[i + 1]) {
    //                 strArg.splice(i, 2)
    //                 spliceCount++
    //             }
    //         }
    //         if (spliceCount === 0) {
    //             return strArg.join('')
    //         } else {
                
    //         recursiveReduction(strArg)
    //         }
    //     }
    //     // return strArg.join('')
    // }
    // return recursiveReduction(s)




}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = superReducedString(s);

    ws.write(result + '\n');

    ws.end();
}
