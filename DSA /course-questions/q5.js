// Q) The tower of Hanoi is a famous puzzle where we have three rods and N disks. The objective of the puzzle is to move the entire stack to another rod. You are given the number of discs N. Initially, these discs are in the rod 1. You need to print all the steps of discs movement so that all the discs reach the 3rd rod. Also, you need to find the total moves.
// Note: The discs are arranged such that the top disc is numbered 1 and the bottom-most disc is numbered N. Also, all the discs have different sizes and a bigger disc cannot be put on the top of a smaller disc. Refer the provided link to get a better clarity about the puzzle.



function toh(n, fromRod, toRod, auxiliaryRod) {
    
    let count = 0;
    
    function helper(n, fromRod, toRod, auxiliaryRod) {
        if (n===1) {
            count++;
        console.log(`move disk ${n} from rod ${fromRod} to ${toRod}`);
        return;
        }
    
        helper(n-1, fromRod, auxiliaryRod, toRod);
        count++;
        console.log(`move disk ${n} from rod ${fromRod} to ${auxiliaryRod}`);
        helper(n-1, auxiliaryRod, toRod, fromRod)
        
    }
    
    helper(n, fromRod, toRod, auxiliaryRod);
    return count;
}