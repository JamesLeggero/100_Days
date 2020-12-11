/*
John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

For example, there are n = 7 socks with colors ar = [1, 2, 1, 2, 1, 3, 2]. There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.

Function Description

Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.

sockMerchant has the following parameter(s):

n: the number of socks in the pile
ar: the colors of each sock
Input Format

The first line contains an integer n, the number of socks represented in ar.
The second line contains n space-separated integers describing the colors ar[i] of the socks in the pile.

Constraints
1 <= n <= 100

1<= ar[1] <= 100 where 0 <= i < n

Output Format

Return the total number of matching pairs of socks that John can sell.

Sample Input

9
10 20 20 10 10 30 50 10 20
Sample Output

3
Explanation


John can match three pairs of socks.
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

// let pairCount = 0
// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    /*var called paircount
    set var elem at ar[0]
    run for loop that starts at index 1
    
    if a value equals arr[0]
        ar.splice(i,1)
        ar.shift
        psircount ++
        break
        run func again
    else
        return paircount

    */

// if (ar.length === 0) {
//     return pairCount
//     } else {
//         // return pairCount
//         for (let i = 1; i < ar.length - 1; i++) {
//             if (ar[i] === ar[0]) {
//                 pairCount++
//                 ar.splice(i, 1)
//                 ar.shift()
//                 console.log(`${pairCount} at ${i} len ${ar.length}`)
//                 return sockMerchant(n, ar)
//                 // return `${pairCount} at ${i} len ${ar.length}`
//             }
//         }
//         ar.shift()
//         return sockMerchant(n, ar)
        
//     }

// }

/* we set sock to match at ar[0]
we run a loop that says if you find this value, ar = ar.splice(i, 1).shift()
then you run sockM n,ar with this new array (maybe break after?)
if you get through and dont run it, then you have remaining unmatched socks. sO you can say n - ar.len, gives you the pairs, then divide by 2 */
    ar.sort()
    // let noMatch = 0
    let pairCount = 0
    function checkPair (ar) {
            if (ar.length === 0) {
                return pairCount
            } else if (ar[0] === ar[1]){
                ar.splice(0, 2)
                pairCount++
                checkPair(ar)
            } else {
                ar.splice(0, 1)
                checkPair(ar)
            }

        }
    checkPair(ar)
    return pairCount
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = sockMerchant(n, ar);

    ws.write(result + "\n");

    ws.end();
}
