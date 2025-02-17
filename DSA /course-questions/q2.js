// Q) An array is monotonic if it is either monotone increasing or monotone decreasing. 
// An array is monotone increasing if all its elements from left to right are non-decreasing. 
// An array is monotone decreasing if all  its elements from left to right are non-increasing.
//  Given an integer array return true if the given array is monotonic, or false otherwise.

const arr1 = [1, 2, 2, 5]; //true
const arr2 = [2, 2, 5, 6]; //true
const arr3  = [1, 1, 1]; // true


const ifMonotonic = (inputArray) => {

    if(inputArray.length<=1) return true;

    let first = inputArray[0];
    let last = inputArray[inputArray.length-1];

    if(first === last) {
        for(let i=0; i<inputArray.length - 1; i++) {
            if (inputArray[i] != inputArray[i + 1]) {
                return false;
            }
        }
        
        
    }else if(first > last) {
        for(let i=0; i<inputArray.length - 1; i++) {
            if (inputArray[i] < inputArray[i + 1]) {
                return false;
            }
        }
        
    }else {
        for(let i=0; i<inputArray.length - 1; i++) {
            if (inputArray[i] > inputArray[i + 1]) {
                return false;
            }
        }
    }
    return true;
}

const output = ifMonotonic(arr3);
console.log(output)