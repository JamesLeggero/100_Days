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

/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
    // Write your code here
    /*we could have a true false case for over or under sea level
    U is ++, D is -- from seaLevel (sL)
    we need to see what the previous step was

    new
    we only need to track when our elevation is bleow zero
    if our prev elevation was below zero and our current is at zero, we add one to valley count
    for loop. if U, elev ++, if D, elev --
    problem is element 0
    */

    let elevation = 0
    let vCount = 0
    for (let i = 0; i < steps; i++){
        if (path[i] === "U") {
            elevation++
            if (elevation === 0) {
                vCount++
            }
        } else {
            elevation--
        }
    }
    return vCount


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const steps = parseInt(readLine().trim(), 10);

    const path = readLine();

    const result = countingValleys(steps, path);

    ws.write(result + '\n');

    ws.end();
}
