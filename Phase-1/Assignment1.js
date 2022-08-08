// 1. Accept only numbers, Make a number always positive though given negative? With & without builtin function?

// var n=-20
// n=Math.abs(n)
// console.log(n)

// // Without function
// var n=-6
// if (n>=0)
// {
//     n*=1
//     console.log(n)
// }
// else if (n<0){
//     n*=(-1)
//     console.log(n)
// }

// 2. A shop will give discount of 10% only if you purchase more than 1000 rupees.
// Any item costs exactly 100 rupees. inputs = quantity of items.
// Result must be Final bill prize

// q=1000
// c=100
// a= (q*c)
// if (a>1000){
//    console.log(a*10/100)
//    console.log(a-(a*10/100))
// }
// else if (a<=1000){
//    console.log(a)
// }

// 3.check if its a triangle first and then Check whether a triangle is a scalene/isosceles/equilateral triangle?
// i) if directly lengths are given,
// ii) Take coordinates as input.

// var a=12, b=12, c=1
// if ((a+b>c)&&(b+c>a)&&(c+a>b)){
//     console.log("It is a triangle")
// }
// else  
//      console.log("its not a triangle")

// if(a!=b!=!a){
//     console.log("it is a scalene triangle")
// }
// else if(a==b||b==c||c==a){
//     console.log("it is a isoceles triangle")
// }
// else if(a==b && b==c && c==a){
//  console.log("it is a equilateral triangle")
// }

// 4.Build Mini calculator having functionalities - *, /, +, - , %, squareroot, exponentiation, floor, ceil

// var a=5,b=8,operator ='%'
// if (operator =='-'){
//     c = a-b
//     console.log(c)
// }
// else if (operator =='+'){
//     c = a+b
//     console.log(c)
// }
// else if (operator == '/'){
//     c = a/b
//     console.log(c)
// }
// else if (operator == '*'){
//     c = a*b
//     console.log(c)
// }
// else if (operator == '%'){
//     c = a%b
//     console.log(c)
// }

// 5.roots of quadratic equation, nature of roots 

// With function
// var a=7,b=6,c=1
// D=b*b-4*a*c
//  if (D>0){
//     console.log((-b)+(Math.sqrt(D))/2*a)
//     console.log((-b)-(Math.sqrt(D))/2*a)
//     console.log("Roots are Real")
//  }
//  else if (D<0){
//     console.log((-b)+(Math.sqrt(-D))/2*a)
//     console.log((-b)-(Math.sqrt(-D))/2*a)
//     console.log("Roots are imaginary")
//  }
//  else{
//       console.log("equal roots")
//  }