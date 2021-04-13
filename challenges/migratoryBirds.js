/*
Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids.

Example

arr= [1, 2, 3, 4, 5]

There are two each of types 1 and 2, and one sighting of type 3. Pick the lower of the two types seen twice: type 1.

Function Description

Complete the migratoryBirds function in the editor below.

migratoryBirds has the following parameter(s):

int arr[n]: the types of birds sighted
Returns

int: the lowest type id of the most frequently sighted birds
Input Format

The first line contains an integer, n, the size of arr.
The second line describes arr as n space-separated integers, each a type number of the bird sighted.

Constraints
5 ≤ n ≤ 2 x 10^5

It is guaranteed that each type is 1, 2, 3, 4, or 5.
Sample Input 0

6
1 4 4 4 5 3
Sample Output 0

4
Explanation 0

The different types of birds occur in the following frequencies:

Type 1: 1 bird
Type 2: 0 birds
Type 3: 1 bird
Type 4: 3 birds
Type 5: 1 bird
The type number that occurs at the highest frequency is type 4, so we print 4 as our answer.

Sample Input 1

11
1 2 3 4 5 4 3 2 1 3 4
Sample Output 1

3
Explanation 1

The different types of birds occur in the following frequencies:

Type 1: 2
Type 2: 2
Type 3: 3
Type 4: 4
Type 5: 1
Two types have a frequency of 3, and the lower of those is type 3.
*/

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

// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
    
    let counterArr = []
    let maxArr = [0, 0]
    
    
    const counter = {}
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i]
        // counter[num] ? counter[num]++ : counterArr[num] = 1
        counter[num] = (counter[num] || 0 ) + 1
    }
    
    
    for (const num in counter){
        counterArr.push([num, counter[num]])
    }
    
    for (let i = 0; i < counterArr.length; i++) {
        // counterArr[i][1] >= maxArr[1] ? maxArr = counterArr[i] : ''
        if (counterArr[i][1] > maxArr[1]) {
            // let tied = [counterArr[i], maxArr]
            // tied = tied.sort(function (a,b) {return a[1]-b[1]})
            // maxArr = tied[0]
            maxArr = counterArr[i]
            
        } else if (counterArr[i][1] === maxArr[1]) {
            maxArr[0] = Math.min(counterArr[i][0], maxArr[0])
        }
    }
    
    return maxArr[0]


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}
