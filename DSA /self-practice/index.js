// Q) Write a recursive function called sumToN that takes a positive integer n as input and returns the sum of all integers from 1 to n.

// function sumToN(n) {
//     //base case
//     if(n===1) return 1;
//     //recursive case
//     return (sumToN(n-1) + n)
// }

// console.log(sumToN(3));

// Q) Write a recursive function called countDown that takes a positive integer n and returns an array counting down from n to 1.

// function countDown(n) {
//     //base case
//     if(n===1) return [1];
//     //recursive case
//     return [n, ...countDown(n-1)];
// }

// console.log(countDown(5));


// Q) Write a recursive function factorial that calculates the factorial of a number n.

function factorial(n) {
    //base case
    if(n===1) return 1;
    //recursive case
    return (factorial(n-1) * n)
}

console.log(factorial(5));

// T = O(n) as the number of operations * number of nodes is equal to n and S = O(n) as the depth of the tree is equal to n as well

// Q) Write a recursive function fibonacci that returns the nth number in the Fibonacci sequence.

function fibonacci(n) {
    // base case
    if(n<=2) return 1;
    //recursive case
    return (fibonacci(n-1) + fibonacci(n-2))
}

console.log(fibonacci(9));


// Q) Write a recursive function reverseString that reverses a string.

function reverseString(str) {
    //base case
    if(str.length<=1) return str;
    //recursive case
    return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("apple"))

//"apple" => "elppa"

// Q) Write a recursive function arraySum that adds up all numbers in an array.

function arraySum(arr) {
   //base case
    if(arr.length===0) return 0;
   //recursive case
    return (arr[0] + arraySum(arr.slice(1)))
}

console.log(arraySum([1,2, 3, 4]))
