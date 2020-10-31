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

// Complete the freqQuery function below.
function freqQuery(queries) {
    const obj = {}
    const arr = []

    for (let i = 0; i < queries.length; i++) {
        if(queries[i][0] === 1) {
            obj[queries[i][1]] = obj[queries[i][1]] + 1 || 1
        } else if (queries[i][0] === 2) {
            if (obj[queries[i][1]] !== undefined) {
                obj[queries[i][1]] === 1 ? 
                delete obj[queries[i][1]] : 
                obj[queries[i][1]]--
            } else {
                continue
            }
        } else {
            Object.values(obj).includes(queries[i][1]) ?
            arr.push(1) : arr.push(0)
        }
    }

    // return [Object.keys(obj), Object.values(obj)]
    return arr

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    let queries = Array(q);

    for (let i = 0; i < q; i++) {
        queries[i] = readLine().replace(/\s+$/g, '').split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    const ans = freqQuery(queries);

    ws.write(ans.join('\n') + '\n');

    ws.end();
}
