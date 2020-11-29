/*
You are given  queries. Each query is of the form two integers described below:
- 1 x : Insert x in your data structure.
- 2 y : Delete one occurence of y from your data structure, if present.
- 3 z : Check if any integer is present whose frequency is exactly z. If yes, print 1 else 0.

The queries are given in the form of a 2-D array queries of size q where queries[i][0] contains the operation, and queries[i][1] contains the data element. For example, you are given array queries = [(1,1), (2,2) (3,2) (1,1), (1,1), (2,1), (3,2)]. The results of each operation are:

Operation   Array   Output
(1,1)       [1]
(2,2)       [1]
(3,2)                   0
(1,1)       [1,1]
(1,1)       [1,1,1]
(2,1)       [1,1]
(3,2)                   1
Return an array with the output: [0, 1].

Function Description

Complete the freqQuery function in the editor below. It must return an array of integers where each element is a 1 if there is at least one element value with the queried number of occurrences in the current array, or 0 if there is not.

freqQuery has the following parameter(s):

queries: a 2-d array of integers
Input Format

The first line contains of an integer q, the number of queries.
Each of the next  qlines contains two integers denoting the 2-d array queries.

Constraints

1 ≤ 10^5
1 ≤ x, y, z ≤ 10^9 
All queries[i][0] ε {1,2,3}
1 ≤ queries[i][1] ≤ 10^9


Output Format

Return an integer array consisting of all the outputs of queries of type 3.

Sample Input 0

8
1 5
1 6
3 2
1 10
1 10
1 6
2 5
3 2
Sample Output 0

0
1
Explanation 0

For the first query of type 3, there is no integer whose frequency is 2 (array = [5,6]). So answer is 0.
For the second query of type 3, there are two integers in array = [6, 10, 10, 6] whose frequency is 2 (integers = 6 and 10). So, the answer is 1.

Sample Input 1

4
3 4
2 1003
1 16
3 1
Sample Output 1

0
1
Explanation 1

For the first query of type 3, there is no integer of frequency 4. The answer is 0. For the second query of type 3, there is one integer, 16 of frequency 1 so the answer is 1.

Sample Input 2

10
1 3
2 3
3 2
1 4
1 5
1 5
1 4
3 2
2 4
3 2
Sample Output 2

0
1
1
Explanation 2

When the first output query is run, the array is empty. We insert two 4's and two 5's before the second output query, arr=[4, 5, 5, 4] so there are two instances of elements occurring twice. We delete a 4 and run the same query. Now only the instances of 5 satisfy the query.

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

// Complete the freqQuery function below.
function freqQuery(queries) {
    const obj = {}
    const arr = []

    for (let i = 0; i < queries.length; i++) {
        if(queries[i][0] === 1) {
            obj[queries[i][1]] = obj[queries[i][1]] + 1 || 1
        } else if (queries[i][0] === 2) {
            if (obj[queries[i][1]] !== undefined) {
                obj[queries[i][1]] === 1 ? 
                delete obj[queries[i][1]] : 
                obj[queries[i][1]]--
            } else {
                continue
            }
        } else {
            Object.values(obj).includes(queries[i][1]) ?
            arr.push(1) : arr.push(0)
        }
    }

    // return [Object.keys(obj), Object.values(obj)]
    return arr

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    let queries = Array(q);

    for (let i = 0; i < q; i++) {
        queries[i] = readLine().replace(/\s+$/g, '').split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    const ans = freqQuery(queries);

    ws.write(ans.join('\n') + '\n');

    ws.end();
}
