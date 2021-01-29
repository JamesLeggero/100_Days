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

// Complete the superReducedString function below.
function superReducedString(s) {
    function recursiveReduction(str) {
        let strArg = str.toString().split('')
        if (strArg.length === 0) {
            return 'Empty String'
        } else {
            let spliceCount = 0
            for (let i = 0; i < strArg.length; i++) {
                if (strArg[i] === strArg[i + 1]) {
                    strArg.splice(i, 2)
                    spliceCount++
                }
            }
            if (spliceCount === 0) {
                return strArg.join('')
            } else {
                
            recursiveReduction(strArg)
            }
        }
        // return strArg.join('')
    }
    return recursiveReduction(s)


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = superReducedString(s);

    ws.write(result + '\n');

    ws.end();
}
