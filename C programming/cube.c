#include<stdio.h>

//Function to calculate the cube of a number that the user provided. 

int main() {
    int n;

    printf("Give n: \n");
    scanf("%d", &n);

    printf("The cube of n is: %d\n", (n*n*n));
    return 0;
}