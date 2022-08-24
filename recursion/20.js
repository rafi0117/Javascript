// Write program for fibanocci series using recursions
// function fib(n){
// if (n<=1) return n;
// console.log(n)
// return fib((n-1)+(n-2));
// }
// console.log(fib(10));

// function sum(n){
// if (n<=1) 
// return n;
// console.log(n)
// return sum(n+1);
// }console.log(sum(n))


// function sum(num) 
// {
//     if(num > 0) {
//         return num + sum(num - 1);
//     }
//     else {
//         return num;
//     }
//  }console.log(sum(5))



// find n digit using recursion
// function Sum(num) 
//  {
//     if(num < 10){
//        return num;
//     }
//     return Sum((num % 10) + Math.floor(num / 10));
//  }
//  console.log(Sum(123));

// let sum = (n) =>
// {
//     if (n<0)
//         return ;
//     console.log(sum(n))
//     return sum((n-1))
// }


 tab = (m,n) =>
{for (m=1;m<=5;m++)
    if (n==11)
        return ;
        
    console.log(`${m}x${n}=${m*n}`)
    return tab(m,n+1);

}
(tab(1,1))   
