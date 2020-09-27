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
