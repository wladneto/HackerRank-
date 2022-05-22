'use strict';

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

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    var totalNumbers = arr.length  
    var negativeNumbers = 0
    var positiveNumbers = 0
    var zeroNumbers = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0){
            zeroNumbers++
        }
        if(arr[i] > 0){
            positiveNumbers++
        }
        if(arr[i] < 0){
            negativeNumbers++
        }
    }
    
    var positives = positiveNumbers/totalNumbers
    var negatives = negativeNumbers/totalNumbers
    var zeros = zeroNumbers/totalNumbers

    console.log(positives.toFixed(6))
    console.log(negatives.toFixed(6))
    console.log(zeros.toFixed(6))
    
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
