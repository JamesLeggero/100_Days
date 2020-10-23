/*
Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example

s = '12:01:00PM'


Return '12:01:00'.

s = '12:01:00AM'

Return '00:01:00'.

Function Description

Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

string s: a time in 12 hour format
Returns

string: the time in 24 hour format
Input Format

A single string s that represents a time in 12-hour clock format (i.e.: hh:mm:ssAM or hh:mm:ssPM).

Constraints

All input times are valid
Sample Input 0

07:05:45PM
Sample Output 0

19:05:45
*/

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
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {

    // let sArrH = 0
    // if (s[0]) {
    //     sArrH = ((parseInt(s[0]) * 10) + parseInt(s[1]))
    // } else {
    //     sArrH = parseInt(s[1])
    // }


    let sArrH = s[0] + s[1]
    const sArrM = s[3] + s[4]
    const sArrS = s[6] + s[7]
    let newH = 0
    
    if (s[8] === 'P') newH = parseInt(sArrH) + 12
    if (s[8] === 'A' && sArrH === '12') return `00:${sArrM}:${sArrS}`
    if (newH > 0){
        if (newH === 24) return `12:${sArrM}:${sArrS}`
        return `${newH}:${sArrM}:${sArrS}`
    }
    return `${sArrH}:${sArrM}:${sArrS}`

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
