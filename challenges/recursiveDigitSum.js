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

// Complete the digitSum function below.
function superDigit(n, k) {
    
    let numString = ''
    for (let i = 0; i < k; i++) {
        numString += `${n}`
    }
    
    let cattedNum = parseInt(numString)
    let finalSum = 0

    const digitSum = digit => {
        if (cattedNum < 10) {
        return finalSum + cattedNum
        } else {
            finalSum = finalSum + (cattedNum % 10)
            cattedNum = Math.floor(cattedNum / 10)
            return digitSum(cattedNum)
            // return [Math.floor(cattedNum / 10), finalSum]
            
        }
    }
    
    
    return digitSum(cattedNum)
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = nk[0];

    const k = parseInt(nk[1], 10);

    const result = superDigit(n, k);

    ws.write(result + '\n');

    ws.end();
}
