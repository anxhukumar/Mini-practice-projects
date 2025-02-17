# include<stdio.h>

// function to calculate the perimeter of rectangle after taking sides from user. 
int main() {
    int a,b;
    
    printf("Give the side a: \n");
    scanf("%d", &a);
    
    printf("Give the side b: \n");
    scanf("%d", &b);
    
    printf("The perimeter is: %d \n", 2*(a+b));
    
    return 0;
}