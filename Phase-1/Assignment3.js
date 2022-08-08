
// 1.Find the cube root of a number ?
// function findCube(numb) {
    
//     numb = (numb ** 1/3)
//     return numb;
// }
// console.log(findCube(5))
// _______________________________________________________________________
// 2.Write a  program that will accept the base and height of a triangle and compute the area?
// function areaOfT(h, b) {
//     area = (h * b) / 2
//     return area;
// }
// console.log(areaOfT(5,6))
// _______________________________________________________________________
// 3.Write a  program to compute the distance between the points (x1, y1) and (x2, y2)?
// a=[4,6]
// b=[4,6]
// function dis(d) {
    
//     d = ((a[1] - a[0]) ** 2 + (b[0] - b[1]) ** 2) ** (1 / 2)
//     return d;
// }
// console.log(dis())
// // _______________________________________________________________________
// 4.Write a  program to calculate body mass index?
// BMI weight/height**2
// function bmi (w, h) { //height in metres and weight in kilograms.
//     result = w / (h) ** 2
//     return result
// }
// console.log(bmi(65, 1.5))//please enter height in m and weight in kilograms.

// _______________________________________________________________________
// 5.Write a  program to filter the positive numbers from a list?

// let numArr = [-5, 10, -3, 12, -9, -5, 90, 0, 1];
// final=''
// for(i=0;i<=numArr.length;i++){
//     if(numArr[i]>=0){
//     final=final+numArr[i]+` `
//     }
// }
//     console.log(final)



// _______________________________________________________________________
// 6.Write a  program to test whether a passed letter is a vowel or not? (edited)


// function vowels(v){
// if(v == 'a' || v == 'e' || v == 'i' || v == 'o' || v == 'u' || v == 'A' || v == 'E' || d == 'I' || d == 'O' || d == 'U' )
//     console.log(v + " is Vowel");
// else
//     console.log(v + " is Consonant");
// return v;
// }

// vowels("i")

















// 1.
// * * * * *
// * * * *
// * * *
// * *
// *





// a=''
// for (i = 5; i >= 1; i--){
//     a = ''
//     for (j = i; j >= 1; j--){
//         a= a+'* '
//     }console.log(a)
// }
// console.log("hello")
// ________________________________________________
// 2.
// a = ''
// n=5
// for (i = 4; i >= 1; i--){
//     a =a+'*'
//     console.log(a)
// }

// n = 5
// s = ''
// for (i = 1; i <= n; i++){
//     for (j = i; j <= n; j++)
//     {
//         s+=' '
//     }`
//     for (j = 1; j <= i; j++){
//         s+='*'
//     }
//     s+='\n'
    
// }
// console.log(s)


//     *
//    **
//   ***
//  ****
// *****
// _________________________________________________

// 3.
// n = 5
// s = ''
// for (i = 1; i <= n; i++){
//     for (j = i; j <= n; j++){
//         s+=' '
//     }for (j = 1; j <= i; j++){
//         s+='*'
//     } for (j = 1; j < i; j++){
//         s+='*'
//     }
//      s += '\n'
// }    console.log(s)
//     *
//    ***
//   *****
//  *******
// *********
// _________________________________________________
//4.
// n = 5
// a = ''
// for (let i = n; i >= 1; i--){
//     a =''
//     for (let j = i; j <= 4; j++){
//         a = a + ' '
//     }for (let j = 1; j <= i; j++){
//         a =  a+' *'
//         //console.log("hello")
//     }
//      console.log(a)
// }

// *********
//  *******
//   *****
//    ***
//     *
// _________________________________________________
// 5.
// a = ''
// for (i = 1; i <= 5; i++){
//     a = a + '1'
//     console.log(a)
// }
// 1
// 11
// 111
// 1111
// 11111
// _________________________________________________
// 6.
// a = ''
// for (i = 1; i <= 8; i++){
//     a = a + i
//     console.log(a)
// }
// 1
// 12
// 123
// 1234
// 12345
// 123456
// 1234567
// 12345678
// _________________________________________________
// 7.____________________________Approach 1
// for (i = 2,j = 9; i <= 10,j >= 1; i++,j--){
//  console.log(`${i} ${j}`)
// }
// ______________________________Approach 2
// for (i = 2; i <= 10; i++){
    
//     a = (`${i} ${11-i}`)
//  console.log(`${a}`)
// }
// 2  9
// 3  8
// 4  7
// 5  6
// 6  5
// 7  4
// 8  3
// 9  2
// 10 1
// _________________________________________________
// 8.
// a = ''
// b = ''
// for (i = 9; i >= 2; i--) {
//     a = ''
//     b=''
//     // console.log(`${a}`)
//     for (j = 9; j >= i; j--) {
//         a = a + j
//     // console.log(`${a} * 9 + ${i}`)
//     } for (k = 2; k <= i; k++){
//         b = b + ' '
        
//     }console.log(`${a} * 9 + ${i-2}${b}= ${a*9+i-2}`)
// }

// 0 * 9 + 8        = 8
// 9 * 9 + 7        = 88
// 98 * 9 + 6       = 888
// 987 * 9 + 5      = 8888
// 9876 * 9 + 4     = 88888
// 98765 * 9 + 3    = 888888
// 987654 * 9 + 2   = 8888888
// 9876543 * 9 + 1  = 88888888
// 98765432 * 9 + 0 = 888888888
// _________________________________________________
// 9.
// a = ''
// b = ''
// for (i = 1; i <= 5; i++){
//     for (j = 2; j <= i; j++){
//         b = i + b
//     }
//     a = i+a
//     console.log(`${a}${b}`)
//     a = ''
//     b = ''
// }
// ___________________________2nd Type_________________
// a = ''
// for (i = 1; i <= 5; i++){
//     for (j = 2; j <= i; j++){
//         a = i + a
//     }
//     a = i+a
//     console.log(`${a}`)
//     a = ''
// }
// 1
// 22
// 333
// 4444
// 55555
// _________________________________________________
// 10.
// // using double for loop
// n=5//no.of rows
// s=''
// for(i=5;i>=1;i--){     
//   for(j=i;j>=1;j--)    
//   {
//     s+=j
//   }
//   s+='\n'
// }
// console.log(s)

// // 54321
// // 4321
// // 321
// // 21
// // 1
// // _________________________________________________
// // 11.
// n=5//no.of rows
// s=''
// count=1
// for(i=1;i<=n;i++){
//   if(i<=4){
//     for (j = 1; j <= i; j++){
//       s += count + "  "
//       count++
//       }s+='\n'
//   }
//     else{
//      for(j=1;j<=i;j++){
//         s+=count+" "
//        count++
//      }s+='\n'
//   }
// }
// console.log(s)
// // 1
// // 2  3
// // 4  5  6
// // 7  8  9  10
// // 11 12 13 14 15
// // _________________________________________________
// // 12.
// n=5//no.of rows
// s=''
// count=1
// for(i=1;i<=n;i++){
//   if(i<=2){
//     for (j = i; j <= n; j++){
//       s += count + "  "
//       count++
//       }
//       s+='\n'
//   } else {
//     for (j = i; j <= n; j++){
//       s += count + " "
//       count++
//     }s+='\n'
//    }
// }
// console.log(s)
// // 1  2  3  4  5
// // 6  7  8  9
// // 10 11 12
// // 13 14
// // 15
// // _________________________________________________
// // 13.
//  n=10
// for(i=1;i<=n;i++){
//   s=''
//   for (j = 1; j <= i; j++) {
//     s = s + (i * j) + " "
//   }
//   console.log(s)
// }


// 1
// 2 4
// 3 6 9
// 4 8 12 16
// 5 10 15 20 25
// 6 12 18 24 30 36
// 7 14 21 28 35 42 49
// 8 16 24 32 40 48 56 64
// 9 18 27 36 45 54 63 72 81
// 10 20 30 40 50 60 70 80 90 100
// _________________________________________________
// 14.
// let n = 5; // height of pattern
// let string = "";
// let count = 1;
// // External loop
// for (let i = 1; i <= n; i++) {
// //   Internal loop
//   if(i<=4){
//      for(j=i; j<11; j++)
//      {
//         string +=' '
//       }
//      for (let j = 1; j <= i; j++) {
//        string +=''+count;
//        count++;
//        }
//      }
//    else{
//         for(j=i; j<n; j++)
//         {
//            string +=''
//          }
//         for (let j = 1; j <= i; j++) {
//           string +=count+' ';
//           count++;
//           }
//    }
//   string += "\n";
// }
// console.log(string);
//              1
//            2 3
//          4 5 6
//       7 8 9 10
// 11 12 13 14 15
// _________________________________________________
// 15.
// a = ''
// b = ['A','B','C','D','E']
// for (i = 0; i <= (b.length-1); i++){
//     a = a+ b[i]
//     console.log(a)
// }
// A
// AB
// ABC
// ABCD
// ABCDE

// _________________________________________________
// 16.
// n=3
//  s=''
// for(i=1;i<=n;i++){
//   for (j = 0; j < n - i; j++) {
//     s += ' '
//   }
//   for (j = 0; j < (2 * i - 1); j++){
//    s+=String.fromCharCode(j + 65)
//    }s+='\n'
// }
// console.log(s)
//     A
//    ABC
//   ABCDE
// _________________________________________________
// // 17.
// a = ''
// for (i = 1; i <= 5; i++){
//     a=a+'A '
//     console.log(a)
// }

// A 
// A A 
// A A A 
// A A A A 
// A A A A A