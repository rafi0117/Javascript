// write a program to decide a given order is a positive/nagative/zero
//  var a=1
// if (a<0)
// {
//     console.log('negative')
// }

// else if (a > 0)
// {
// console.log('positive')
// }
// else
// {
//     console.log('zero')
// }



// write a program to decide given number is odd/even number

// var a = 3      //division by 2 and remainder should be 0

// if ((a%2)==0)
// {
//     console.log('even')
// }
// else 
// {
//     console.log('odd')
// }


//Write a program to decide which number is greater

// var a=7,b=7
// if (a>b)
// {
//     console.log(`${a}a is big`)
// }
// else if (a<b)
// {
//     console.log(`${b}b is big`)
// }
// else
// {
//     console.log(`${a} and ${b}`)
// }

//Bonus - Find the greatest number amoung 3 inputs

// Multiple of 3 --> hi
// multiple of 5 --> hello

// var a=16

// if ((a%3)==0)
// {
//     console.log('multiple of 3')
// }
// if ((a%5)==0)
// {
//     console.log('multiple of 5')
// }
// if (((a%3)!=0) && ((a%5)!=0))
// {
//     console.log('Not a multiple of 3 and 5')
// }

var a=15

if ((a%3)==0)
{
    console.log('multiple of 3')
}
else if ((a%5)==0)
{
    console.log('multiple of 5')
}
else if (((a%3)==0) && ((a%5)==0))
{
    console.log('multiple of 3 and 5')
}
else
{
    console.log('Not a multiple of 3 and 5')
}