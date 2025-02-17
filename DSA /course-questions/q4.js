// Q) There are n friends that are playing a game. 
// The friends are sitting in a circle and are numbered from 1 to n in clockwise order.
// More formally, moving clockwise from the ith friend brings you to the (i+1)th friend for 1 <= i < n,
// and moving clockwise from the nth friend brings you to the 1st friend. 
// The rules of the game are as follows:  Start at the 1st friend.
// Count the next k friends in the clockwise direction including the friend you started at. 
// The counting wraps around the circle and may count some friends more than once. 
// The last friend you counted leaves the circle and loses the game. 
// If there is still more than one friend in the circle, go back to step 2 
// starting from the friend immediately clockwise of the friend who just lost and repeat. 
// Else, the last friend in the circle wins the game.
// Given the number of friends, n, and an integer k, return the winner of the game.


//APPROACH 1 Time=O(n*n) Space=O(n)
// const josephus = (n, k) => {
//     //creating an array with n
//     let arr = Array.from({length:n}, (_,i)=>i+1);
   
//     //Function to remove the element
//     function helper(arr, start) {
//         //base case
//         if (arr.length===1) return arr[0];

//         //recursive case
//         let indexToRemove = (start + k -1) % arr.length;

//         arr.splice(indexToRemove, 1);

//         return helper(arr, indexToRemove)
//     }

//     return helper(arr, 0)
// }

// console.log(josephus(41, 2));


//APPROACH 2 Time=O(n) Space=O(n)

// const josephus = (n, k) => {

//     function helper(n) {
//         //base case
//         if (n===1) return 0;

//         //recursive case
//         return ((helper(n-1, k) + k) % n)
//     }

//     return helper(n) + 1;
   
// }

// console.log(josephus(41,2))


//APPROACH 3 Time=O(n) Space=O(1)

const josephus = (n, k) => {    
    let safeIndex = 0;
    for (let i=1; i<=n; i++) {
        safeIndex = ((safeIndex + k) % i)
    }
    return (safeIndex + 1);
}

console.log(josephus(41, 2));