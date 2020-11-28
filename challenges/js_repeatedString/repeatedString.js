/*
Lilah has a string, s, of lowercase English letters that she repeated infinitely many times.

Given an integer, n, find and print the number of letter a's in the first  letters of Lilah's infinite string.

For example, if the string s='abcac' and n=10, the substring we consider is abcacabcac, the first 10 characters of her infinite string. There are 4 occurrences of a in the substring.

Function Description

Complete the repeatedString function in the editor below. It should return an integer representing the number of occurrences of a in the prefix of length  in the infinitely repeating string.

repeatedString has the following parameter(s):

s: a string to repeat
n: the number of characters to consider

Input Format

The first line contains a single string, s.
The second line contains an integer, n.

Constraints

1 <= |s| <= 100
1 <= n <= 10^12
For 25% of the test cases, n <= 10^6.

Output Format

Print a single integer denoting the number of letter a's in the first n letters of the infinite string created by repeating s infinitely many times.

Sample Input 0

aba
10
Sample Output 0

7
Explanation 0
The first n=10 letters of the infinite string are abaabaabaa. Because there are 7 a's, we print  on a new line.

Sample Input 1

a
1000000000000
Sample Output 1

1000000000000
Explanation 1
Because all of the first n = 1000000000000 letters of the infinite string are a, we print 1000000000000 on a new line.
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

// Complete the repeatedString function below.
function repeatedString(s, n) {
    /*while the string length is less than n, we want to concatenate the string on itself
    then we want to slice it at n
    then we make a new array and slice on each letter
    then we have an aCount and a for loop that says if array[i] === 'a' then aCount incerments
    then we return aCount
    */

    /*second way...
    do the loop first, see what a count is
    divide n by sting.length
    multiply by aCount?
    */

    
    let aCount = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'a')
        aCount++
    }

    let aOver = s.slice(n % s.length) //this gets a substring with "leftover" string parts
    
    let aOverCount = 0
    for (let i = 0; i < aOver.length; i++) {
        if (aOver[i] === 'a')
        aOverCount++
    }
    if (n % s.length === 0) return aCount * (n / s.length)
    return aCount * Math.ceil(n / s.length) - aOverCount
    

    // while (s.length < n) {
    //     s = s.concat(s)
        
    // }
    // s = s.slice(0, n)
    // let aCount = 0
    // for (let i = 0; i < n; i++) {
    //     if (s[i] === 'a')
    //     aCount++
    // }

    // return aCount
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine(), 10);

    let result = repeatedString(s, n);

    ws.write(result + "\n");

    ws.end();
}
