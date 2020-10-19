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

// Complete the isValid function below.
function isValid(s) {

    const map = {}
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = (map[s[i]] || 0) + 1
    }

    const OVM = Object.values(map)

    // if (s.length % OVM.length === 0 || (s.length - 1) % OVM.length === 0) return 'YES'
    // return 'NO'
    

    // const theSame = val => val === OVM[0]

    // if (OVM.every(theSame)) {
    //     return 'YES'
    // } else if ( OVM.reduce((a, b)=>{return a+b}) % OVM.length === 1)  {
    //     return 'YES'
    // } else {
    //     return 'NO'
    // }

    // const OVMCheck = () => {
    //     return OVM.reduce((a, b)=>{return a+b}) % OVM.length
    // }
    // const OVMCheckMinusOne = () => {
    //     return (OVM.reduce((a, b)=>{return a+b}) - 1) % OVM.length
    // }
    // if (OVMCheck() === 0 || OVMCheckMinusOne() === 0) {
    //     return 'YES'
    // } else {
    //     return 'NO'
    // }

    // return OVMCheckMinusOne()

    // return s.length % OVM.length

    // let removedChar = 0
    // const freq = OVM[0]
    // if (OVM.length === 1 | OVM.length === 0) return 'YES'
    // for (let i = 0; i < OVM.length; i++) {
    //     if (removedChar > 1) {
    //         return 'NO'
    //     } else if (OVM[i] !== freq) {
    //         if (OVM[i] - 1 === freq) {
    //             removedChar++
    //         } else {
    //             return 'NO'
    //         }
    //     }
    // }

    OVM.sort((a,b)=>a-b)
    if (OVM[0] === OVM[OVM.length - 1]) {
        return 'YES'
    } else if (OVM[1] === OVM[OVM.length - 1]) {
        if (OVM[0] + 1 === OVM[1]) {
            return 'YES'
        }
    } else if (OVM[0] === OVM[OVM.length - 2]) {
        if (OVM[OVM.length - 2] + 1 === OVM[OVM.length - 1]) {
            return 'YES'
        }
    }


    return 'NO'

    // return OVM
    



}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = isValid(s);

    ws.write(result + "\n");

    ws.end();
}
