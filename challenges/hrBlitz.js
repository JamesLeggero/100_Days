/*
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to 10^-4 are acceptable.

Example

arr = [1, 1, 0, -1, -1]

There are n = 5 elements, two positive, two negative and one zero. Their ratios are 2/5, 2/5 and 1/5. Results are printed as:

0.400000
0.400000
0.200000
Function Description

Complete the plusMinus function in the editor below.

plusMinus has the following parameter(s):

int arr[n]: an array of integers
Print
Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with  digits after the decimal. The function should not return a value.

Input Format

The first line contains an integer, n, the size of the array.
The second line contains n space-separated integers that describe arr[n].

Constraints

0 < n ≤ 100
-100 ≤ arr[i] <100

Output Format

Print the following 3 lines, each to 6 decimals:

1. proportion of positive values
2. proportion of negative values
3. proportion of zeros
Sample Input

6
-4 3 -9 0 4 1         
Sample Output

0.500000
0.333333
0.166667
Explanation

There are 3 positive numbers, 2 negative numbers, and 1 zero in the array.
The proportions of occurrence are positive: 3/6, negative: 2/6 and zeros: 1/6.
*/

'use strict';

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

// Complete the plusMinus function below.
function plusMinus(arr) {

    const arrLen = arr.length
    let posArr = 0
    let negArr = 0
    let zeroArr = 0

   for (let i = 0; i < arrLen; i++) {
       if (arr[i] > 0) {
           posArr++
       } else if (arr[i] < 0) {
           negArr++
       } else {
           zeroArr++
       }
   }

    console.log(posArr/arrLen)
    console.log(negArr/arrLen)
    console.log(zeroArr/arrLen)


}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}


/*
Staircase detail

This is a staircase of size n = 4:

   #
  ##
 ###
####
Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size .

Function Description

Complete the staircase function in the editor below.

staircase has the following parameter(s):

int n: an integer
Print

Print a staircase as described above.

Input Format

A single integer, , denoting the size of the staircase.

Constraints

0 ≤ 100 .

Output Format

Print a staircase of size n using # symbols and spaces.

Note: The last line must have 0 spaces in it.

Sample Input

6 
Sample Output

     #
    ##
   ###
  ####
 #####
######
Explanation

The staircase is right-aligned, composed of # symbols and spaces, and has a height and width of n = 6.
*/

'use strict';

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

// Complete the staircase function below.
function staircase(n) {

    for (let i = 0; i < n; i++) {
        // console.log(" ".(n-1) + "#"*(i + 1))
        console.log(`${" ".repeat(n - i - 1)}${"#".repeat(i + 1)}`)
        
    }


}

function main() {
    const n = parseInt(readLine(), 10);

    staircase(n);
}

/*
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

Example

arr = [1, 3, 5, 7, 9]

The minimum sum is 1 + 3 + 5 + 7 = 16 and the maximum sum is 3 + 5 + 7 + 9 = 24. The function prints

16 24
Function Description

Complete the miniMaxSum function in the editor below.

miniMaxSum has the following parameter(s):

arr: an array of 5 integers
Print

Print two space-separated integers on one line: the minimum sum and the maximum sum of 4 of 5 elements.

Input Format

A single line of five space-separated integers.

Constraints

1 ≤ arr[i] ≤ 10^9

Output Format

Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

Sample Input

1 2 3 4 5
Sample Output

10 14
Explanation

The numbers are 1, 2, 3, 4, and 5. Calculate the following sums using four of the five integers:

Sum everything except 1, the sum is 14.
Sum everything except 2, the sum is 13.
Sum everything except 3, the sum is 12.
Sum everything except 4, the sum is 11.
Sum everything except 5, the sum is 10.
Hints: Beware of integer overflow! Use 64-bit Integer.
*/

'use strict';

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

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {

    const adder = (a, b) => {
        return a + b
    }

    

    console.log(
        arr.reduce(adder) - Math.max(...arr),
        arr.reduce(adder) - Math.min(...arr)
        )

}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
