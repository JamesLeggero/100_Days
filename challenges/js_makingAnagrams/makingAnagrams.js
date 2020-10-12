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

// Complete the makeAnagram function below.
function makeAnagram(a, b) {
    // const arrA = a.split('')
    // const arrB = b.split('')
    // const newArr = arrA.concat(arrB).sort()
    // let dupeCount = 0
    // let i = 0
    // while (i < newArr.length) {
    //     if(newArr[i] === newArr[i+1]){
    //         dupeCount++
    //         i += 2
    //     } else {
    //         i++
    //     } 
    // }

    const arrA = [...a]
    const arrB = [...b]
    const extraA = []
    const extraB = []

    for (let i = 0; i < arrA.length; i++) {
        if (!arrB.includes(arrA[i])){
            // arrA.splice(arrA[i], 1)
            // arrB.splice(arrB.indexOf(arrA[i]), 1)
            extraA.push(arrA[i])
        }
    }

    for (let i = 0; i < arrB.length; i++) {
        if (!arrA.includes(arrB[i])){
            // arrA.splice(arrA[i], 1)
            // arrB.splice(arrB.indexOf(arrA[i]), 1)
            extraB.push(arrB[i])
        }
    }

    return extraA.length + extraB.length

    


    


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine();

    const b = readLine();

    const res = makeAnagram(a, b);

    ws.write(res + '\n');

    ws.end();
}
