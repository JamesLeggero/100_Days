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

// let pairCount = 0
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

// if (ar.length === 0) {
//     return pairCount
//     } else {
//         // return pairCount
//         for (let i = 1; i < ar.length - 1; i++) {
//             if (ar[i] === ar[0]) {
//                 pairCount++
//                 ar.splice(i, 1)
//                 ar.shift()
//                 console.log(`${pairCount} at ${i} len ${ar.length}`)
//                 return sockMerchant(n, ar)
//                 // return `${pairCount} at ${i} len ${ar.length}`
//             }
//         }
//         ar.shift()
//         return sockMerchant(n, ar)
        
//     }

// }

/* we set sock to match at ar[0]
we run a loop that says if you find this value, ar = ar.splice(i, 1).shift()
then you run sockM n,ar with this new array (maybe break after?)
if you get through and dont run it, then you have remaining unmatched socks. sO you can say n - ar.len, gives you the pairs, then divide by 2 */
    ar.sort()
    // let noMatch = 0
    let pairCount = 0
    function checkPair (ar) {
            if (ar.length === 0) {
                return pairCount
            } else if (ar[0] === ar[1]){
                ar.splice(0, 2)
                pairCount++
                checkPair(ar)
            } else {
                ar.splice(0, 1)
                checkPair(ar)
            }

        }
    checkPair(ar)
    return pairCount
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = sockMerchant(n, ar);

    ws.write(result + "\n");

    ws.end();
}
