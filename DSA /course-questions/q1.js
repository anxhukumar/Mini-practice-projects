// Q) You are given an array of Integers in which each subsequent value is not less than the previous value.
//  Write a function that takes this array as an input and returns a new array with the squares of each number sorted in ascending order.



// Brute force method of solving this problem, the time complexity in this case is O(nlogn) and space is O(n).
const arr = [-5, 0, 1, 1, 3];
// const squaredArray = (inputArray) => {
//     let finalArray = new Array(inputArray.length).fill(0); //This way of creating array is more optimised that let arr = []; as it takes fix memory.
//     for(let i=0; i<inputArray.length; i++) {
//         let squared = (inputArray[i] * inputArray[i]);
//         finalArray[i] = (squared);
//     }
//     finalArray.sort((a,b) => a-b)

//     return finalArray;   
// }

// const output = squaredArray(arr);
// console.log(output);



// The most optimized solution that has Time = O(n) Space = O(n)
const squaredArray = (inputArray) => {
    let finalArray = new Array(inputArray.length).fill(0);
    
    let leftPointer = 0;
    let rightPointer = inputArray.length - 1;

    for (let i=finalArray.length-1; i>=0; i--) {

        let leftSquaredElement = inputArray[leftPointer] * inputArray[leftPointer] ;
        const rightSquaredElement = inputArray[rightPointer] * inputArray[rightPointer];

        if(leftSquaredElement < rightSquaredElement) {
            finalArray[i] = rightSquaredElement;
            rightPointer--;
        }else {
            finalArray[i] = leftSquaredElement;
            leftPointer++;
        }

    }

    return finalArray;
}

const output = squaredArray(arr);
console.log(output);
