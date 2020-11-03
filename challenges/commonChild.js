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

// Complete the commonChild function below.
function commonChild(s1, s2) {
    let s1Nulled = s1.split('')
    let s2Nulled = s2.split('')
    let s1Reduced = []
    let s2Reduced = []
    
    for (let i = 0; i < s1.length; i++) {
        if (s2.includes(s1[i])) {
            continue
        } else {
            s1Nulled[i] = null
        }
    }
    
    for (let i = 0; i < s2.length; i++) {
        if (s1.includes(s2[i])) {
            continue
        } else {
            s2Nulled[i] = null
        }
    }
    
    const arrMaker = (nulledArr, reducedArr) => {
        for (let i = 0; i < nulledArr.length; i++){
            if (nulledArr[i]) {reducedArr.push(nulledArr[i])}
        }
    }
    
    arrMaker(s1Nulled, s1Reduced)
    arrMaker(s2Nulled, s2Reduced)

    return [s1Reduced, s2Reduced]

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s1 = readLine();

    const s2 = readLine();

    let result = commonChild(s1, s2);

    ws.write(result + "\n");

    ws.end();
}
