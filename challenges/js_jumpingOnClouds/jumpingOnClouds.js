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

// Complete the jumpingOnClouds function below.

/* We care about 2 things, the location of thunderheads and the jumpcount.
We want to go 2 steps as much as we possibly can. The ONLY time we can't go 2 moves if a thunderhead is 2 spots away - in that case we only want to go 1 move. Since we can assume 2 thunderheads aen't next to each other, once we go one, we can jump over the t-head.

in other words, we want a for loop or while loop, but with control over the incermretation of i. a while loop with an if would work well.

Then we just need a count to go up every time we go through the loop.

*/




function jumpingOnClouds(c) {
    let count = 0
    let i = 0
    while (i < c.length - 1) {
        count ++
        if (c[i + 2] === 1) {
            i += 1
        } else {
            i += 2
        }
    }
    return count


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    let result = jumpingOnClouds(c);

    ws.write(result + "\n");

    ws.end();
}
