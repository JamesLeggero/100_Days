/*
We define super digit of an integer x using the following rules:

Given an integer, we need to find the super digit of the integer.

If x has only 1 digit, then its super digit is x.
Otherwise, the super digit of x is equal to the super digit of the sum of the digits of x.
For example, the super digit of 9875 will be calculated as:

	super_digit(9875)   	9+8+7+5 = 29 
	super_digit(29) 	2 + 9 = 11
	super_digit(11)		1 + 1 = 2
	super_digit(2)		= 2  
You are given two numbers n and k. The number p is created by concatenating the string  n k times. Continuing the above example where n = 9875, assume your value k = 4. Your initial  p = 9875 9875 9875 9875 (spaces added for clarity).

    superDigit(p) = superDigit(9875987598759875)
                  5+7+8+9+5+7+8+9+5+7+8+9+5+7+8+9 = 116
    superDigit(p) = superDigit(116)
                  1+1+6 = 8
    superDigit(p) = superDigit(8)
All of the digits of p sum to 116. The digits of 116 sum to 8.  8 is only one digit, so it's the super digit.

Function Description

Complete the function superDigit in the editor below. It must return the calculated super digit as an integer.

superDigit has the following parameter(s):

n: a string representation of an integer
k: an integer, the times to concatenate n to make p
Input Format

The first line contains two space separated integers, n and k.

Constraints

1 ≤ n < 10^100000
1 ≤ k 10^5

Output Format

Return the super digit of p, where p is created as described above.

Sample Input 0

148 3
Sample Output 0

3
Explanation 0

Here n = 148 and k = 3, so P = 148148148.

super_digit(P) = super_digit(148148148) 
               = super_digit(1+4+8+1+4+8+1+4+8)
               = super_digit(39)
               = super_digit(3+9)
               = super_digit(12)
               = super_digit(1+2)
               = super_digit(3)
               = 3.
Sample Input 1

9875 4
Sample Output 1

8
Sample Input 2

123 3
Sample Output 2

9
Explanation 2

Here n = 123 and k = 3, so P = 123123123.

super_digit(P) = super_digit(123123123) 
               = super_digit(1+2+3+1+2+3+1+2+3)
               = super_digit(18)
               = super_digit(1+8)
               = super_digit(9)
               = 9

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

// Complete the digitSum function below.
function superDigit(n, k) {
    
    let numString = ''
    for (let i = 0; i < k; i++) {
        numString += `${n}`
    }
    
    let cattedNum = parseInt(numString)
    let finalSum = 0

    const digitSum = digit => {
        if (cattedNum < 10) {
        return finalSum + cattedNum
        } else {
            finalSum = finalSum + (cattedNum % 10)
            cattedNum = Math.floor(cattedNum / 10)
            return digitSum(cattedNum)
            // return [Math.floor(cattedNum / 10), finalSum]
            
        }
    }
    
    
    return digitSum(cattedNum)
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = nk[0];

    const k = parseInt(nk[1], 10);

    const result = superDigit(n, k);

    ws.write(result + '\n');

    ws.end();
}
