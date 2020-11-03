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

// Complete the activityNotifications function below.
function activityNotifications(expenditure, d) {
    
    let notice = 0
    const noticeArr = []
    for (let i = d; i < expenditure.length; i++) {
        let medianArr = expenditure.slice(i - 1 - d, i - 1).sort((a, b) => {return a - b})
        let median = 0
        if (medianArr.length % 2 === 1) {
            median = medianArr[Math.floor(medianArr.length / 2)]
        } else {
            median = medianArr[(Math.floor(medianArr.length / 2) + Math.ceil(medianArr.length / 2)) / 2]   
        }
        
        // if (expenditure[i] >= median * 2) noticeArr.push(expenditure[i])
        if (expenditure[i] >= median * 2) notice++
    }
    // return expenditure.slice(6-d -1, 6-1).sort((a, b) => {return a - b})
    return notice
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nd = readLine().split(' ');

    const n = parseInt(nd[0], 10);

    const d = parseInt(nd[1], 10);

    const expenditure = readLine().split(' ').map(expenditureTemp => parseInt(expenditureTemp, 10));

    let result = activityNotifications(expenditure, d);

    ws.write(result + "\n");

    ws.end();
}
