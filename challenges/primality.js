'use strict';

const fs = require('fs');

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

// Complete the primality function below.
function primality(n) {
    let ans = "Prime"
    
    if (n === 0 || n === 1 || (n % 2 === 0 && n !== 2)) {
        ans = "Not prime"
    }
    if (n % Math.sqrt(n) === Math.sqrt(n)) {
        ans = "Not prime"
    }
    for (let i = 3; i < Math.ceil(Math.sqrt(n)); i += 2) {
        if (n % i === 0) {
            ans = "Not prime"
            break
            
        }
    }
    
    return ans
    
   
       
    
    


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const p = parseInt(readLine(), 10);

    for (let pItr = 0; pItr < p; pItr++) {
        const n = parseInt(readLine(), 10);

        const result = primality(n);

        ws.write(result + '\n');
    }

    ws.end();
}
