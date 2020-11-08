'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the whatFlavors function below.
function whatFlavors(cost, money) {
    cost.unshift(0)
    const flavors = []
    for (let i = 1; i < cost.length; i++){
        for (let j = 1; j < cost.length; j++) {
            if (i === j) {continue}
            else if (cost[i] + cost[j] === money){
            flavors.push(i)
            flavors.push(j)
            flavors.sort((a, b) => {return a - b})
            break
            }
        }
    }
    
    console.log(flavors[1], flavors[3])


}

function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const money = parseInt(readLine(), 10);

        const n = parseInt(readLine(), 10);

        const cost = readLine().split(' ').map(costTemp => parseInt(costTemp, 10));

        whatFlavors(cost, money);
    }
}
