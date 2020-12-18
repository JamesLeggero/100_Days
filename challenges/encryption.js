/*
An English text needs to be encrypted using the following encryption scheme.
First, the spaces are removed from the text. Let L be the length of this text.
Then, characters are written into a grid, whose rows and columns have the following constraints:

floor sqrt L ≤ row ≤ column ≤ ceil sqrt L

Example

s = if man was to stay on the groun god would have given us roots

After removing spaces, the string is 54 characters long. sqrt 54 is between 7 and 8, so it is written in the form of a grid with 7 rows and 8 columns.

ifmanwas  
meanttos          
tayonthe  
groundgo  
dwouldha  
vegivenu  
sroots

Ensure that rows * columns ≥ L
If multiple grids satisfy the above conditions, choose the one with the minimum area, i.e. rows * columns.
The encoded message is obtained by displaying the characters of each column, with a space between column texts. The encoded message for the grid above is:

imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau

Create a function to encode a message.

Function Description

Complete the encryption function in the editor below.

encryption has the following parameter(s):

string s: a string to encrypt
Returns

string: the encrypted string
Input Format

One line of text, the string s

Constraints
1 ≤ length of s ≤ 81

s contains characters in the range ascii[a-z] and space, ascii(32).

Sample Input

haveaniceday
Sample Output 0

hae and via ecy
Explanation 0

L = 12, sqrt 12 is between 3 and 4.
Rewritten with 3 rows and 4 columns:

have
anic
eday
Sample Input 1

feedthedog    
Sample Output 1

fto ehg ee dd
Explanation 1

L = 10, sqrt 10 is between 3 and 4.
Rewritten with  rows and  columns:

feed
thed
og
Sample Input 2

chillout
Sample Output 2

clu hlt io
Explanation 2

L = 8, sqrt 8 is between 2 and 3.
Rewritten with 3 columns and 3 rows (2 * 3 = 6 < 8 so we have to use 3 x 3.)

chi
llo
ut
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

// Complete the encryption function below.
function encryption(s) {
    const rowLen = Math.ceil(Math.sqrt(s.length))
    const splitS = s.split('')
    const newArr = []
    let i = 0
    while (splitS.length > 0){
        let newString = ''
        for (let i = 0; i < splitS.length; i += rowLen){
            newString += splitS[i]
        }
        newArr.push(newString)
        splitS.shift()
    }
    const finalArr = newArr.slice(0, rowLen)
    return finalArr.join(' ')

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = encryption(s);

    ws.write(result + "\n");

    ws.end();
}
