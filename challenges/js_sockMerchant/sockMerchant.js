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

let pairCount = 0
// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    /*var called paircount
    set var elem at ar[0]
    run for loop that starts at index 1
    
    if a value equals arr[0]
        ar.splice(i,1)
        ar.shift
        psircount ++
        break
        run func again
    else
        return paircount

    */

if (ar.length === 0) {
    return pairCount
    } else {
        // return pairCount
        for (let i = 1; i < ar.length - 1; i++) {
            if (ar[i] === ar[0]) {
                pairCount++
                ar.splice(i, 1)
                ar.shift()
                console.log(`${pairCount} at ${i} len ${ar.length}`)
                return sockMerchant(n, ar)
                // return `${pairCount} at ${i} len ${ar.length}`
            }
        }
        ar.shift()
        return sockMerchant(n, ar)
        
    }

}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = sockMerchant(n, ar);

    ws.write(result + "\n");

    ws.end();
}
