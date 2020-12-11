/*
Given the time in numerals we may convert it into words, as shown below:

5:00 -> five o' clock
5:01 -> one minute past five
5:10 -> ten minutes past five
5:15 -> quarter past five
5:30 -> half past five
5:40 -> twenty minutes to six
5:45 -> quarter to six
5:47 -> thirteen minutes to six
5:28 -> twenty eight minutes past five

At minutes = 0, use o' clock. For 1 ≤ minutes ≤ 30, use past, and for 30 < minutes use to. Note the space between the apostrophe and clock in o' clock. Write a program which prints the time in words for the input given in the format described.

Function Description

Complete the timeInWords function in the editor below.

timeInWords has the following parameter(s):

int h: the hour of the day
int m: the minutes after the hour
Returns

string: a time string as described
Input Format

The first line contains h, the hours portion The second line contains m, the minutes portion

Constraints

1 ≤ h ≤ 12
0 ≤ m ≤ 60

Sample Input 0

5
47
Sample Output 0

thirteen minutes to six
Sample Input 1

3
00
Sample Output 1

three o' clock
Sample Input 2

7
15
Sample Output 2

quarter past seven
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
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the timeInWords function below.
function timeInWords(h, m) {
    
    const numberToWord = num => {
        switch (num) {
            case 0:
                return 'twelve';
                break;
            case 1:
                return 'one';
                break;
            case 2:
                return 'two';
                break;
            case 3:
                return 'three';
                break;
            case 4:
                return 'four';
                break;
            case 5:
                return 'five';
                break;
            case 6:
                return 'six';
                break;
            case 7:
                return 'seven';
                break;
            case 8:
                return 'eight';
                break;
            case 9:
                return 'nine';
                break;
            case 10:
                return 'ten';
                break;
            case 11:
                return 'eleven';
                break;
            case 13:
                return 'thirteen';
                break;
             case 14:
                return 'fourteen';
                break;
            case 15:
                return 'quarter';
                break;
            case 16:
                return 'sixteen';
                break;
            case 17:
                return 'seventeen';
                break;
             case 18:
                return 'eighteen';
                break;
            case 19:
                return 'nineteen';
                break;
            case 20:
                return 'twenty';
                break;
            case 21:
                return 'twenty one';
                break;
            case 22:
                return 'twenty two';
                break;
             case 23:
                return 'twenty three';
                break;
            case 24:
                return 'twenty four';
                break;
            case 25:
                return 'twenty five';
                break;
            case 26:
                return 'twenty six';
                break;
            case 27:
                return 'twenty seven';
                break;
             case 28:
                return 'twenty eight';
                break;
            case 29:
                return 'twenty nine';
                break;
            case 30:
                return 'half';
                break;
          
                
        }
    }
    if (m === 0) {
        return `${numberToWord(h)} o' clock`
    } else if (m === 1) {
        return `${numberToWord(m)} minute past ${numberToWord(h)}`
    } else if (m === 15) {
        return `quarter past ${numberToWord(h)}`
    } else if (m === 30) {
        return `half past ${numberToWord(h)}`
    } else if (m === 45) {
        if (h === 12) {
            return `quarter to one`
        } else {
            return `quarter to ${numberToWord(h + 1)}` 
        }   
    } else if (m === 59) {
        if (h === 12) {
            return `one minute to one`
        } else {
            return `one minute to ${h + 1}`
        }
    } else if (m > 2 && m < 30) {
        return `${numberToWord(m)} minutes past ${numberToWord(h)}`
    } else {
        if (h === 12) {
            return `${numberToWord(60 - m)} minutes to one`
        } else {
            return `${numberToWord(60 - m)} minutes to ${numberToWord(h + 1)}`
        }
    }
    

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const h = parseInt(readLine(), 10);

    const m = parseInt(readLine(), 10);

    let result = timeInWords(h, m);

    ws.write(result + "\n");

    ws.end();
}
