/*
Sam's house has an apple tree and an orange tree that yield an abundance of fruit. Using the information given below, determine the number of apples and oranges that land on Sam's house.

In the diagram below:

The red region denotes the house, where s is the start point, and t is the endpoint. The apple tree is to the left of the house, and the orange tree is to its right.
Assume the trees are located on a single point, where the apple tree is at point a, and the orange tree is at point b.
When a fruit falls from its tree, it lands d units of distance from its tree of origin along the x-axis. *A negative value of d means the fruit fell d units to the tree's left, and a positive value of d means it falls d units to the tree's right. *

Given the value of d for m apples and n oranges, determine how many apples and oranges will fall on Sam's house (i.e., in the inclusive range |s, t|)?

For example, Sam's house is between s = 7 and t = 10. The apple tree is located at a = 4 and the orange at b = 12. There are m = 3 apples and n = 3 oranges. Apples are thrown apples = [2, 3, -4] units distance from a, and oranges = [3, -2, 4] units distance. Adding each apple distance to the position of the tree, they land at [4 + 2, 4 + 3, 4 + -4] = [6, 7, 0]. Oranges land at [12 + 3, 12 + -2, 12 + -4] = [15, 10, 8]. One apple and two oranges land in the inclusive range 7-1= so we print

1
2

Function Description

Complete the countApplesAndOranges function in the editor below. It should print the number of apples and oranges that land on Sam's house, each on a separate line.

countApplesAndOranges has the following parameter(s):

s: integer, starting point of Sam's house location.
t: integer, ending location of Sam's house location.
a: integer, location of the Apple tree.
b: integer, location of the Orange tree.
apples: integer array, distances at which each apple falls from the tree.
oranges: integer array, distances at which each orange falls from the tree.
Input Format

The first line contains two space-separated integers denoting the respective values of s and t.
The second line contains two space-separated integers denoting the respective values of a and b.
The third line contains two space-separated integers denoting the respective values of m and n.
The fourth line contains m space-separated integers denoting the respective distances that each apple falls from point a.
The fifth line contains n space-separated integers denoting the respective distances that each orange falls from point b.

Constraints

1 ≤ s, t, a, b, m, n ≤ 10^5
-10^5 ≤ d ≤ 10^5
a < s < t < b

Output Format

Print two integers on two different lines:

The first integer: the number of apples that fall on Sam's house.
The second integer: the number of oranges that fall on Sam's house.
Sample Input 0

7 11
5 15
3 2
-2 2 1
5 -6
Sample Output 0

1
1
Explanation 0

The first apple falls at position 5 - 2 = 3.
The second apple falls at position 5 + 2 = 7.
The third apple falls at position 5 + 1 = 6.
The first orange falls at position 15 + 5 = 20.
The second orange falls at position 15 - 6 = 9.
Only one fruit (the second apple) falls within the region between 7 and 11, so we print 1 as our first line of output.
Only the second orange falls within the region between 7 and 11, so we print 1 as our second line of output.
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

// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {

    let landedApples = 0
    let landedOranges = 0

    for (let i = 0; i < apples.length; i++) {
        if (apples[i] + a >= s && apples[i] + a <= t) landedApples++
    }

    for (let i = 0; i < oranges.length; i++) {
        if (oranges[i] + b >= s && oranges[i] + b <= t) landedOranges++
    }
    

    console.log(landedApples)
    console.log(landedOranges)


}

function main() {
    const st = readLine().split(' ');

    const s = parseInt(st[0], 10);

    const t = parseInt(st[1], 10);

    const ab = readLine().split(' ');

    const a = parseInt(ab[0], 10);

    const b = parseInt(ab[1], 10);

    const mn = readLine().split(' ');

    const m = parseInt(mn[0], 10);

    const n = parseInt(mn[1], 10);

    const apples = readLine().split(' ').map(applesTemp => parseInt(applesTemp, 10));

    const oranges = readLine().split(' ').map(orangesTemp => parseInt(orangesTemp, 10));

    countApplesAndOranges(s, t, a, b, apples, oranges);
}


/*
You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).

The first kangaroo starts at location x1 and moves at a rate of v1 meters per jump.
The second kangaroo starts at location x2 and moves at a rate of v2 meters per jump.
You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO.

For example, kangaroo 1 starts at x1 = 2 with a jump distance v1 = 1 and kangaroo 2 starts at x2 = 1 with a jump distance of v2 = 2. After one jump, they are both at x = 3, (x1 + v1 = 2 + 1, x2 + v2 = 1 + 2), so our answer is YES.

Function Description

Complete the function kangaroo in the editor below. It should return YES if they reach the same position at the same time, or NO if they don't.

kangaroo has the following parameter(s):

x1, v1: integers, starting position and jump distance for kangaroo 1
x2, v2: integers, starting position and jump distance for kangaroo 2
Input Format

A single line of four space-separated integers denoting the respective values of x1, v1, x2, and v2.

Constraints

0 ≤ x1 < x2 ≤ 10000
1 ≤ v1 ≤ 10000
1 ≤ v2 ≤ 10000

Output Format

Print YES if they can land on the same location at the same time; otherwise, print NO.

Note: The two kangaroos must land at the same location after making the same number of jumps.

Sample Input 0

0 3 4 2
Sample Output 0

YES
Explanation 0

The two kangaroos jump through the following sequence of locations:

From the image, it is clear that the kangaroos meet at the same location (number 12 on the number line) after same number of jumps (4 jumps), and we print YES.

Sample Input 1

0 2 5 3
Sample Output 1

NO
Explanation 1

The second kangaroo has a starting location that is ahead (further to the right) of the first kangaroo's starting location (i.e., x2 > x1). Because the second kangaroo moves at a faster rate (meaning v2 > v1) and is already ahead of the first kangaroo, the first kangaroo will never be able to catch up. Thus, we print NO.
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

// Complete the kangaroo function below.
function kangaroo(x1, v1, x2, v2) {

    // let jumpCount = 0
    let positionA = x1
    let positionB = x2
    if (v2 >= v1) {
        return 'NO'
    } else {

        while (positionA <= positionB) {
            positionA += v1
            positionB += v2
            if (positionA === positionB) return 'YES'
            // jumpCount++
        }
        return 'NO'
    }



}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const x1V1X2V2 = readLine().split(' ');

    const x1 = parseInt(x1V1X2V2[0], 10);

    const v1 = parseInt(x1V1X2V2[1], 10);

    const x2 = parseInt(x1V1X2V2[2], 10);

    const v2 = parseInt(x1V1X2V2[3], 10);

    let result = kangaroo(x1, v1, x2, v2);

    ws.write(result + "\n");

    ws.end();
}
