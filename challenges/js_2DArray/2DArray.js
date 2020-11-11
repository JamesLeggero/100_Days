
/*
Given a 6x6 2D Array, arr:

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
An hourglass in A is a subset of values with indices falling in this pattern in 's graphical representation:

a b c
  d
e f g
There are 16 hourglasses in arr. An hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in arr, then print the maximum hourglass sum. The array will always be 6x6.

Example


-9 -9 -9  1 1 1 
 0 -9  0  4 3 2
-9 -9 -9  1 2 3
 0  0  8  6 6 0
 0  0  0 -2 0 0
 0  0  1  2 4 0
The 16 hourglass sums are:

-63, -34, -9, 12, 
-10,   0, 28, 23, 
-27, -11, -2, 10, 
  9,  17, 25, 18
The highest hourglass sum is 28 from the hourglass beginning at row 1, column 2:

0 4 3
  1
8 6 6
Note: If you have already solved the Java domain's Java 2D Array challenge, you may wish to skip this challenge.

Function Description

Complete the function hourglassSum in the editor below.

hourglassSum has the following parameter(s):

int arr[6][6]: an array of integers
Returns

int: the maximum hourglass sum
Input Format

Each of the 6 lines of inputs arr[i] contains 6 space-separated integers arr[i][j].

Constraints

-9 <= arr[i][j] <= 9
0 <= i,j <= 5

Output Format

Print the largest (maximum) hourglass sum found in arr.

Sample Input

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 2 4 4 0
0 0 0 2 0 0
0 0 1 2 4 0
Sample Output

19
Explanation

arr contains the following hourglasses:

image

The hourglass with the maximum sum (19) is:

2 4 4
  2
1 2 4
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

// Complete the hourglassSum function below.
function hourglassSum(arr) {

// let numList = [
//   1, 2, 3, 4, 5, 6, 
//   7, 8, 9, 10, 11, 12,
//   13, 14, 15, 16, 17, 18, 
//   19, 20, 21, 22, 23, 24,
//   25, 26, 27, 28, 29, 30, 
//   31, 32, 33, 34, 35, 36
//   ]

const arrSums = []

const makeArr2D = a => {
  let newArr = []
  for (let i = 0; i < 6; i++){
      newArr.push(a.splice(0,6))
  }
  return newArr
}

const makeHGSquare = a => {
  const sqArr = []
  for (let i = 0; i < 4; i++){
    for (let j = 0; j < 4; j++) {
      let singleArr = []
      for (let k = 0; k < 1; k++) {
        singleArr.push(
          a[k+i][j], a[k+i][j+1], a[k+i][j+2],
          a[k+ 1 + i][j+1],
          a[k+2 + i][j], a[k+2 + i][j+1], a[k+2 +i][j+2]
        )

      }
      sqArr.push(singleArr)
    }
  }
  return sqArr
}

const getSum = (total, num) => {
  return total + num
}

// const arr2D = makeArr2D(arr)

const hgSquare = makeHGSquare(arr)

const makeArrSums = a => {
  for (let i = 0; i < a.length; i++) {
    const newSum = a[i].reduce(getSum, 0)
    arrSums.push(newSum)
  }
  return arrSums
}

const final = Math.max(...makeArrSums(hgSquare))

let ans = []

for(let i = 0; i < arr.length; i++) {
    ans.push(arr[i])
}

return final


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    let result = hourglassSum(arr);

    ws.write(result + "\n");

    ws.end();
}
