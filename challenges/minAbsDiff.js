/*
Alice is taking a cryptography class and finding anagrams to be very useful. We consider two strings to be anagrams of each other if the first string's letters can be rearranged to form the second string. In other words, both strings must contain the same exact letters in the same exact frequency For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.

Alice decides on an encryption scheme involving two large strings where encryption is dependent on the minimum number of character deletions required to make the two strings anagrams. Can you help her find this number?

Given two strings, a and b, that may or may not be of the same length, determine the minimum number of character deletions required to make a and b anagrams. Any characters can be deleted from either of the strings.

For example, if a=cde and b=dcf, we can delete e from string a and f from string b so that both remaining strings are cd and dc which are anagrams.

Function Description

Complete the makeAnagram function in the editor below. It must return an integer representing the minimum total characters that must be deleted to make the strings anagrams.

makeAnagram has the following parameter(s):

a: a string
b: a string
Input Format

The first line contains a single string, a.
The second line contains a single string, b.

Constraints

1 <= |a|, |b| <= 10^4

The strings a and b consist of lowercase English alphabetic letters ascii[a-z].
Output Format

Print a single integer denoting the number of characters you must delete to make the two strings anagrams of each other.

Sample Input

cde
abc
Sample Output

4
Explanation

We delete the following characters from our two strings to turn them into anagrams of each other:

Remove d and e from cde to get c.
Remove a and b from abc to get c.
We must delete 4 characters to make both strings anagrams, so we print 4 on a new line.
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

// Complete the minimumAbsoluteDifference function below.
function minimumAbsoluteDifference(arr) {
    
    arr.sort(function (a,b) {return a - b})


    let diff = Math.abs(arr[1] - arr[0])
    for (let i = 0; i < arr.length; i++) {
        if (Math.abs(arr[i + 1] - arr[i]) < diff) {
            diff = Math.abs(arr[i + 1] - arr[i])
        }
    }


    //BAD O - works for all but 2
    // let diff = Infinity
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = 0; j < arr.length; j++) {
    //         if (Math.abs(arr[i] - arr[j]) !== 0 && Math.abs(arr[i] - arr[j]) < diff) {
    //             diff = Math.abs(arr[i] - arr[j])
    //         }
    //     }
    // }




return diff

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = minimumAbsoluteDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
