#include<stdio.h>

int factorial(int n){
    return factorial(n) * factorial(n-1); 
};

int main(){


    int a = 5; int b= 10;

    int sum = a+b;

    printf("%d", sum);

    return 0;

    factorial(5);
}


