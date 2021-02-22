/*
Given an array of strings of digits, try to find the occurrence of a given pattern of digits. In the grid and pattern arrays, each string represents a row in the grid. For example, consider the following grid:

1234567890  
0987654321  
1111111111  
1111111111  
2222222222  
The pattern array is:

876543  
111111  
111111
The pattern begins at the second row and the third column of the grid and continues in the following two rows. The pattern is said to be present in the grid. The return value should be YES or NO, depending on whether the pattern is found. In this case, return YES.

Function Description

Complete the gridSearch function in the editor below. It should return YES if the pattern exists in the grid, or NO otherwise.

gridSearch has the following parameter(s):

string G[R]: the grid to search
string P[r]: the pattern to search for
Input Format

The first line contains an integer t, the number of test cases.

Each of the t test cases is represented as follows:
The first line contains two space-separated integers R and C, the number of rows in the search grid G and the length of each row string.
This is followed by R lines, each with a string of C digits that represent the grid G.
The following line contains two space-separated integers, r and c, the number of rows in the pattern grid P and the length of each pattern row string.
This is followed by r lines, each with a string of c digits that represent the pattern grid P.

Returns

string: either YES or NO
Constraints

1 ≤ t ≤ 5
1 ≤ R, r C, c ≤ 1000
1 ≤ r ≤ R
1 ≤ c ≤ C

Sample Input

2
10 10
7283455864
6731158619
8988242643
3830589324
2229505813
5633845374
6473530293
7053106601
0834282956
4607924137
3 4
9505
3845
3530
15 15
400453592126560
114213133098692
474386082879648
522356951189169
887109450487496
252802633388782
502771484966748
075975207693780
511799789562806
404007454272504
549043809916080
962410809534811
445893523733475
768705303214174
650629270887160
2 2
99
99
Sample Output

YES
NO
Explanation

The first test in the input file is:

10 10
7283455864
6731158619
8988242643
3830589324
2229505813
5633845374
6473530293
7053106601
0834282956
4607924137
3 4
9505
3845
3530
The pattern is present in the larger grid as marked in bold below.

7283455864  
6731158619  
8988242643  
3830589324  
2229505813  
5633845374  
6473530293  
7053106601  
0834282956  
4607924137  
The second test in the input file is:

15 15
400453592126560
114213133098692
474386082879648
522356951189169
887109450487496
252802633388782
502771484966748
075975207693780
511799789562806
404007454272504
549043809916080
962410809534811
445893523733475
768705303214174
650629270887160
2 2
99
99
The search pattern is:

99
99
This pattern is not found in the larger grid.

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
        // .map(line => line.replace(/\r/g,''))
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the gridSearch function below.
function gridSearch(G, P) {
    
/*
    //let's concat the entire string and see if the first number exists in there
    
    let concatG = ''
    for (let i = 0; i < G.length; i++) {
        concatG += G[i]
    }
    
    
    //if it does, we want to do the following:
    if (concatG.includes(P[0])) {
        
    
    //let's get rid if the concatG characters up front we don't need. for a string it's substring, array is splice
        const beginning = concatG.indexOf(P[0])
        const end = beginning + ((G[0].length + P[0].length) * P.length)
        
        concatG = concatG.substring(beginning, end)
        
    //then we'll see if, as we got through the concatG, if iterating by the length of the P strings, we match the P string to its position in concatG.
    //so, for example, we check if concatG.substring(0, 4) equals P[0], which is 4 characters. assuming it is, we iterate by the G row length and check again.
    //if it ever DOESN'T match, we return NO. If we get through the whole while loop, we return YES
        // const compareArr = []
        let i = 0
        let j = 0
        while (j < P.length) {
            const checkedSubstring = concatG.substring(i, i + P[0].length)
            if (checkedSubstring !== P[j]) {
                return 'NO'
            } else {
                i += G[0].length
                j++
            }
            // const arr = [checkedSubstring, P[j]]
            // compareArr.push(arr)
            // i += G[0].length
            // j++
        
        }
        return 'YES'
        // return compareArr
    }
    
    // return concatG
    return 'NO'
    
    //that gives us 10/16 working. let's try approach 2
    */
    
    //let's first check when P[0] appears
    //to do this, whe could ask a while loop to iter through the G arr until it includes P[0]
    let i = 1
    let j = 0
    while (i <= G.length) {
        if (G[i - 1].includes(P[0])) {
            j = i
        }
        i++
    }
    if (j === 0) { //maybe if(!j) works as a falsy here
        return 'NO'
    }
    G.splice(0, j - 1)
    // return G
    
    /*
    
    //so now we have the starting row of G to correspond with P[0].
    //we want to see how many characters in P[0] starts w/r/t G[0]
    
    const reducedGFront = G[0].substring(0, G[0].indexOf(P[0]))
    // return reducedGFront
    
    //then the same for the end:
    const reducedGBack = G[0].substring(G[0].indexOf(P[0]) + P[0].length) //actually not needed
    // return reducedGBack
    
    //then the opposite of those 2:
    const snippedG = G[0].slice(reducedGFront.length, reducedGFront.length + P[0].length)
    return snippedG
    
    */
    
    //ok, we'll rewrite this in a for loop and check if something goes wrong
    
    for (let i = 0; i < P.length; i++) {
        const reducedGFront = G[i].substring(0, G[i].indexOf(P[i]))
        const snippedG = G[i].slice(reducedGFront.length, reducedGFront.length + P[0].length)
        if (snippedG !== P[i]) {
            return 'NO'
        }
    }
    return 'YES'
    
    //now only 8 cases pass. boo!
    
    
    
    
    
    
    
    
   


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const RC = readLine().split(' ');

        const R = parseInt(RC[0], 10);

        const C = parseInt(RC[1], 10);

        let G = [];

        for (let i = 0; i < R; i++) {
            const GItem = readLine();
            G.push(GItem);
        }

        const rc = readLine().split(' ');

        const r = parseInt(rc[0], 10);

        const c = parseInt(rc[1], 10);

        let P = [];

        for (let i = 0; i < r; i++) {
            const PItem = readLine();
            P.push(PItem);
        }

        let result = gridSearch(G, P);

        ws.write(result + "\n");
    }

    ws.end();
}
