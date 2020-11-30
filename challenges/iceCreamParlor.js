/*
Sunny and Johnny like to pool their money and go to the ice cream parlor. Johnny never buys the same flavor that Sunny does. The only other rule they have is that they spend all of their money.

Given a list of prices for the flavors of ice cream, select the two that will cost all of the money they have.

For example, they have m = 6 to spend and there are flavors costing cost = [1,3,4,5,6]. The two flavors costing 1 and 5 meet the criteria. Using 1-based indexing, they are at indices 1 and 4.

Function Description

Complete the icecreamParlor function in the editor below. It should return an array containing the indices of the prices of the two flavors they buy, sorted ascending.

icecreamParlor has the following parameter(s):

m: an integer denoting the amount of money they have to spend
cost: an integer array denoting the cost of each flavor of ice cream
Input Format

The first line contains an integer, t, denoting the number of trips to the ice cream parlor. The next t sets of lines each describe a visit. Each trip is described as follows:

The integer m, the amount of money they have pooled.
The integer n, the number of flavors offered at the time.
n space-separated integers denoting the cost of each flavor: cost[cost[1], cost[2],...,cost[n].
Note: The index within the cost array represents the flavor of the ice cream purchased.

Constraints

1 ≤ t ≤ 50
2 ≤ m ≤ 10^4
2 ≤ n ≤ 10^4
1 ≤cost[i] ≤ 10^4, ∀i ε [1,n]
There will always be a unique solution.
Output Format

For each test case, print two space-separated integers denoting the indices of the two flavors purchased, in ascending order.

Sample Input

2
4
5
1 4 5 3 2
4
4
2 2 4 3
Sample Output

1 4
1 2
Explanation

Sunny and Johnny make the following two trips to the parlor:

The first time, they pool together m = 4 dollars. Of the five flavors available that day, flavors 1 and 4 have a total cost of 1 + 3 = 4.
The second time, they pool together m = 4 dollars. TOf the four flavors available that day, flavors 1 and 2 have a total cost of 2 + 2 = 4.
*/

'use strict';

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

// Complete the whatFlavors function below.
function whatFlavors(cost, money) {
    cost.unshift(0)
    const flavors = []
    for (let i = 1; i < cost.length; i++){
        for (let j = 1; j < cost.length; j++) {
            if (i === j) {continue}
            else if (cost[i] + cost[j] === money){
            flavors.push(i)
            flavors.push(j)
            flavors.sort((a, b) => {return a - b})
            break
            }
        }
    }
    
    console.log(flavors[1], flavors[3])


}

function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const money = parseInt(readLine(), 10);

        const n = parseInt(readLine(), 10);

        const cost = readLine().split(' ').map(costTemp => parseInt(costTemp, 10));

        whatFlavors(cost, money);
    }
}
