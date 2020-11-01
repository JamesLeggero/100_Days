'use strict';

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

// Complete the minimumBribes function below.
function minimumBribes(q) {

    let swapCount = 0
    q.unshift(0)
    for (let i = 1; i <= q.length; i++) {
        if (q[i] - i > 2) {
            console.log('Too chaotic')
            // console.log(i)
            break
        } else {
            if (q[i] - i > 0) {
                swapCount += (q[i] - i)
            } 
            
        }
    }
        console.log(swapCount)          
    
    // console.log(q)

}

function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        const q = readLine().split(' ').map(qTemp => parseInt(qTemp, 10));

        minimumBribes(q);
    }
}
