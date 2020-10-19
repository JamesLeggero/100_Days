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

// Complete the isValid function below.
function isValid(s) {

    const map = {}
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = (map[s[i]] || 0) + 1
    }

    const OVM = Object.values(map)

    OVM.sort((a,b)=>a-b)
    if (OVM[0] === OVM[OVM.length - 1]) {
        return 'YES'
    } else if (OVM[1] === OVM[OVM.length - 1]) {
        if (OVM[0] + 1 === OVM[1] || OVM[0] === 1) {
            return 'YES'
        }
    } else if (OVM[0] === OVM[OVM.length - 2]) {
        if (OVM[OVM.length - 2] + 1 === OVM[OVM.length - 1]) {
            return 'YES'
        }
    }


    return 'NO'

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = isValid(s);

    ws.write(result + "\n");

    ws.end();
}
