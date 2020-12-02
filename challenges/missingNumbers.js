/*
Numeros the Artist had two lists that were permutations of one another. He was very proud. Unfortunately, while transporting them from one exhibition to another, some numbers were lost out of the first list. Can you find the missing numbers?

As an example, the array with some numbers missing, arr= [7, 2, 5, 3, 5, 3]. The original array of numbers brr = [7, 2, 5, 4, 6, 3, 5, 3]. The numbers missing are [4, 6].

Notes

If a number occurs multiple times in the lists, you must ensure that the frequency of that number in both lists is the same. If that is not the case, then it is also a missing number.
You have to print all the missing numbers in ascending order.
Print each missing number once, even if it is missing multiple times.
The difference between maximum and minimum number in the second list is less than or equal to .
Function Description

Complete the missingNumbers function in the editor below. It should return a sorted array of missing numbers.

missingNumbers has the following parameter(s):

arr: the array with missing numbers
brr: the original array of numbers
Input Format

There will be four lines of input:

n - the size of the first list, 
The next line contains n space-separated integers arr[i]
m - the size of the second list, 
The next line contains m space-separated integers brr[i]

Constraints

1 ≤ n, m ≤ 2 x 10^5
n ≤ m
1 ≤ brr[i] ≤ 10^4
Mmax - Xmin < 101

Output Format

Output the missing numbers in ascending order.

Sample Input

10
203 204 205 206 207 208 203 204 205 206
13
203 204 204 205 206 207 205 208 203 206 205 206 204
Sample Output

204 205 206
Explanation

204 is present in both arrays. Its frequency in arr is 2, while its frequency in brr is 3. Similarly, 205 and 206 occur twice in arr, but three times in brr. The rest of the numbers have the same frequencies in both lists.

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

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the missingNumbers function below.
function missingNumbers(arr, brr) {
    
    //all but one
    
    // const finArr = []

    // arr.sort((a,b)=>{return a-b})
    // brr.sort((a,b)=>{return a-b})
    
    // let i = 0
    // while (i < brr.length) {
    //     if (arr[i] !== brr[i]) {
    //         const toFin = brr.splice(i, 1)
    //         finArr.push(toFin)
    //     }
    //     else {
    //         i++
    //     }
    // }
    
    // return finArr.sort((a, b) => {return a - b})
    
    const compareArr = []
    for (let i = 0; i < 10001; i++) {
        compareArr.push(0)
    }
    
    for (let i = 0; i < arr.length; i++) {
        compareArr[arr[i]]--
    }
    
    for (let i = 0; i < brr.length; i++) {
        compareArr[brr[i]]++
    }
    
    const finalArr = []
    for (let i = 0; i < 10001; i++) {
        if (compareArr[i] > 0) {
            finalArr.push(i)
        }
    }
    
    return finalArr

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const m = parseInt(readLine(), 10);

    const brr = readLine().split(' ').map(brrTemp => parseInt(brrTemp, 10));

    const result = missingNumbers(arr, brr);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
