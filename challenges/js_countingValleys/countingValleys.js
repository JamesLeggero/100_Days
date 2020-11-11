/*
Counting Valleys

An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly STEPS steps, for every step it was noted if it was an uphill, U, or a downhill, D step. Hikes always start and end at sea level, and each step up or down represents a 1 unit change in altitude. We define the following terms:

A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.

Example

STEPS = 8
PATH = [D,D,U,U,U,U,D,D]

The hiker first enters a valley 2 units deep. Then they climb out and up onto a mountain 2 units high. Finally, the hiker returns to sea level and ends the hike.

Function Description

Complete the countingValleys function in the editor below.

countingValleys has the following parameter(s):

int steps: the number of steps on the hike
string path: a string describing the path
Returns

int: the number of valleys traversed
Input Format

The first line contains an integer STEPS, the number of steps in the hike.
The second line contains a single string PATH, of STEPS characters that describe the path.

Constraints

2 <= STEPS <= 10^6
path[i] ∈ {U,D}

Sample Input

8
UDDDUDUU
Sample Output

1
Explanation

If we represent _ as sea level, a step up as /, and a step down as \, the hike can be drawn as:

_/\      _
   \    /
    \/\/
The hiker enters and leaves one valley.
*/

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
