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

// Complete the checkMagazine function below.
function checkMagazine(magazine, note) {

    function inMag(word) {
        for (let i = 0; i < magazine.length; i++) {
        if (word === magazine[i]) {
            return i
            }
            
        }
        return false
    }

    function noteTest(words) {

        for (let i = 0; i < words.length; i++){
            if (inMag(words[i]) === false) {
                // console.log(words[i], 'not found in mag')
                console.log('No')
                return
            } else {
                magazine.splice(inMag(words[i]), 1)
            }
            
        }
            console.log('Yes')
        return

    }

    noteTest(note)

}

function main() {
    const mn = readLine().split(' ');

    const m = parseInt(mn[0], 10);

    const n = parseInt(mn[1], 10);

    const magazine = readLine().split(' ');

    const note = readLine().split(' ');

    checkMagazine(magazine, note);
}
