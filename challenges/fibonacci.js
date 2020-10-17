/*
The Fibonacci Sequence

The Fibonacci sequence appears in nature all around us, in the arrangement of seeds in a sunflower and the spiral of a nautilus for example.

The Fibonacci sequence begins with fiboncci(0) = 0 and fibonnaci(1) = 1 as its first and second terms. After these first two elements, each subsequent element is equal to the sum of the previous two elements.

Programmatically:

fibonacci(0) = 0
fibonacci(1) = 1
fibonacci(n) = fibonacci(n - 1) + fibonacci(n - 2)

Given n, return the nth number in the sequence.

As an example, n = 5. The Fibonacci sequence to 6 is fs = [0, 1, ,1 ,2, 3, 5, 8]. With zero-based indexing, fs[5] = 5.

Function Description

Complete the recursive function fibonacci in the editor below. It must return the nth element in the Fibonacci sequence.

fibonacci has the following parameter(s):

n: the integer index of the sequence to return
Input Format

The input line contains a single integer, n.

Constraints

0 ≤ n ≤ 30

Output Format

Locked stub code in the editor prints the integer value returned by the fibonacci function.

Sample Input

3  
Sample Output

2
Explanation

The Fibonacci sequence begins as follows:








...

We want to know the value of fibonacci(3). In the sequence above, fibonacci(3) evaluates to 2.
*/

function processData(input) {
    var n = parseInt(input);
    console.log(fibonacci(n));
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

function fibonacci(n) {

    let fibArr = []

    for (let i = 0; i < n + 1; i++) {
        if (i === 0) {
            fibArr.push(0)
        } else if (i === 1) {
            fibArr.push(1)
        } else {
            fibArr.push(fibArr[i - 2] + fibArr[i - 1])
        }
    }

return fibArr[fibArr.length - 1]

}
