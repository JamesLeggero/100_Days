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
