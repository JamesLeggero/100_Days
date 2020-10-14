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
