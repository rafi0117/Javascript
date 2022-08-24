

// **********10th,AUG,PR**********


// 1.
// 0 1 1 2 3 5 8 13 21 . .. ... .... (Fibonacci Series)


// function fibonacci(n){
//     let n1=0;
//     let n2 = 1;
//     let sum=0;
//     output=''
//     for (i=0;i<n;i++){
//         output += `${n1}`
//         sum = n1 + n2;
//         n1 = n2;
//         n2 = sum;
//     }
//     console.log(output)
// }fibonacci(15)

// ********************************


// 2.
// Armstrong/Narcisstic number or not?

// let sum = 0;
// const number = 266;

// // create a temporary variable
// let temp = number;
// while (temp > 0) {
//     // finding the one's digit
//     let remainder = temp % 10;

//     sum += remainder**3;

//     // removing last digit from the number
//     temp = parseInt(temp / 10); // convert float into integer
// }
// // check the condition
// if (sum == number) {
//     console.log(`${number} is an Armstrong number`);
// }
// else {
//     console.log(`${number} is not an Armstrong number.`);
// }

// ******************************


// 3.
// Sum of the digits of given number?


// function getSum(n)
// {
//     var sum = 0;
//     while (n != 0) {
//         sum = sum + n % 10;
//         n = parseInt(n / 10);
//     }
//     return sum;
// }
 
// // Driver code
// var n = 666;
// var result = (getSum(n));
// console.log(result)


// *****************************




