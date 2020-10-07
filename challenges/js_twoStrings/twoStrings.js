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
