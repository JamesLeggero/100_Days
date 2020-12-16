/*
Flatland is a country with a number of cities, some of which have space stations. Cities are numbered consecutively and each has a road of 1km length connecting it to the next city. It is not a circular route, so the first city doesn't connect with the last city. Determine the maximum distance from any city to it's nearest space station.

For example, there are n = 3 cities and m = 1 of them has a space station, city 1. They occur consecutively along a route. City 2 is 2-1 = 1 unit away and city 3 is 3 - 1 = 2 units away. City 1 is 0 units from its nearest space station as one is located there. The maximum distance is 2.

Function Description

Complete the flatlandSpaceStations function in the editor below. It should return an integer that represents the maximum distance any city is from a space station.

flatlandSpaceStations has the following parameter(s):

n: the number of cities
c: an integer array that contains the indices of cities with a space station, 1-based indexing
Input Format

The first line consists of two space-separated integers, n and m.
The second line contains m space-separated integers, the indices of each city having a space-station. These values are unordered and unique.

Constraints

1 ≤ n ≤ 10^5
1 ≤ m ≤ n

There will be at least 1 city with a space station.
No city has more than one space station.
Output Format

Print an integer denoting the maximum distance that an astronaut in a Flatland city would need to travel to reach the nearest space station.

Sample Input 0

5 2
0 4
Sample Output 0

2
Explanation 0

This sample corresponds to following graphic:

hreasy(5).png

The distance to the nearest space station for each city is listed below:

c[0] has distance 0, as it contains a space station.
c[1] has distance 1 to the space station in c[0].
c[2] has distance 2 to the space stations in c[0] and c[4].
c[3] has distance 1 to the space station in c[4].
c[4] has distance 0, as it contains a space station.
We then take max(0, 1, 2, 1, 0) = 2.

Sample Input 1

6 6
0 1 2 4 3 5
Sample Output 1

0
Explanation 1

In this sample, n = m so every city has space station and we print 0 as our answer.
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

// Complete the flatlandSpaceStations function below.
function flatlandSpaceStations(n, c) {
    //three numbers: |highest number - length| which is distance from largest to end of list
    // |lowest number - 0|, so lowest
    // |highest - lowest| / 2, the equal distant of the furthest two stations
    //then we take the max of those three numbers
    
    const firstNumber = (n - 1) - Math.max(...c)
    const secondNumber = Math.min(...c)
    let thirdNumber = 0
    const newC = c.sort((a,b)=> {return a - b})
    for (let i = 0; i < newC.length; i++) {
        const temp = newC[i] - newC[i - 1]
        if ( temp > thirdNumber){
            thirdNumber = temp
        }
        
    }
    thirdNumber = Math.floor(thirdNumber/2)
    
    
    return Math.max(firstNumber, secondNumber, thirdNumber)
    
    


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    let result = flatlandSpaceStations(n, c);

    ws.write(result + "\n");

    ws.end();
}
