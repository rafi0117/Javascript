// // // var a=5,b=3,c=-6

// // // console.log(c!=a)

// // // // logical equality
// // // console.log(0==1)//f
// // // console.log(100==10)//f
// // // console.log(0.0==0)//t
// // // console.log('0'=='zero')//f
// // // console.log('0'=='0')//t
// // // console.log('0'=='0.0')//f
// // // console.log('true'=='true')//t
// // // console.log('false'==false)//f
// // // console.log(false==0)//t

// // // //strict equality - values+types
// // // console.log(00===0)//t
// // // console.log(0.0===0)//t
// // // console.log(0===false)//f
// // // console.log('zero'===0)//f
// // // console.log('0'==='0')//t

// // //logical operators

// // // true - success - pass -active
// // //true - 1 - value

// // //false - fail - inactive
// // //false - 0 - empty


// // //logical AND -- &&(find first false)
// // //a  b  r
// // //f1 f2 f1
// // //f1 t1 f
// // //t1 f1 f
// // //t1 t2 t2

// // // console.log(3 && 4)//t 4
// // // console.log(30 && 0)//f
// // // console.log(1 && '')//f
// // // console.log(false && 4)//f
// // // console.log(false && 0.0)//false
// // // console.log('false' && 'false1')//false1
// // // console.log('0' && '0.0' && false && 0.0)// t  t  f  f//false
// // // console.log('true' && 'false' && true && 1 && 0.1)// t  t  t  t  t//0.1
// // // console.log('0' && 'zero' && 0 && '0' && 0.0)//t  t  f  t  f//0

// // //logical OR -- || (find first true)

// // //a  b  r
// // //f1 f2 f2
// // //f1 t1 t
// // //t1 f1 t
// // //t1 t2 t1

// // // console.log('90' || "0" || '' || 0)//t  t  f  f //90
// // // console.log('' || ' ' || "false" || 0.0)//f  t  t  f//
// // // console.log('' || "" || '1' || ' 23   ' || '345    ')//1/t
// // // console.log('01' && '' || 0.0 && ('') || {}  || '0.0' && '0' || []) //first solve logical AND

// // //logical NOT -- !
// // // console.log(!'false')//t
// // // console.log(!0.0)//t
// // // console.log(! [0])//f


// // //increment - post, pre
// // //pre increment

// // // var a = 4
// // // console.log(++a)
// // // //a = a+1
// // // //a+=1
// // // //++a
// // // console.log(a)
// // // console.log(++a +a + ++a)//5+5+6//updates values
// // // console.log(a)
// // // console.log(a + ++a + ++a)//4+5+6
// // // console.log(a)


// // //pre decrement

// // // var a = 10
// // // // console.log(--a)//4
// // // // // //a = a-1
// // // // // //a-=1
// // // // // //--a
// // // // console.log(a)//4
// // // // console.log(--a +a + --a)//updates values//3+3+2
// // // // console.log(a)//2

// // // // console.log(a + --a + --a)//2+1+0
// // // // console.log(a)//0

// // // console.log(--a)//9
// // // console.log(a)//9
// // // console.log(++a)//10
// // // console.log(--a - --a + --a  +a + ++a + --a)//30
// // // console.log(a - ++a - --a + --a + a)//4
// // // console.log(a)//6


// // //post increment

// // // var  a = 12
// // // var b = 15
// // // console.log(a++)
// // // console.log(a)
// // // console.log(a++ +a + a++)
// // // console.log(a + a++ + a++)
// // // console.log(a)

// // // console.log(a--)//12(11)//12
// // // console.log(a)//11
// // // console.log(a +a-- + a--)//11-11(10)+10(9)//32
// // // console.log(a-- + a + a--)//9(8)+8+8(7)//25
// // // console.log(a-- - a)//7(6)-6//1
// // // console.log(a)//6

// // // var  a = 13
// // // var b = 15

// // // console.log(a--)//13(12)
// // // console.log(b--)//15(14)
// // // console.log(a)
// // // console.log(b)
// // // console.log(a + b-- + a-- - b--)//12+14(13)+12(11)-13(12)
// // // console.log(a-- + b + b-- +a--)//11(10)+12+12(11)+10(9)
// // // console.log(a-- - b)//9(8)-11
// // // console.log(a,b)//8,11
// // // //-------------------------------------------------------
// var  a = 20
// var b = 22
// console.log(a,b)//20,22
// console.log(++a,++b,a++,b++)//21,23,21(22),23(24) a=22,b=24
// console.log(++a + b-- + ++a - b++)//23+24(23)+24-23(24) a=24 b=24
// console.log(a-- + b + ++a + b-- + a--)//24(23)+24+24(23)+24(23) =120 23=a,b
// console.log(a-- - b + a++ - b--)//23(22)-23+22(23)-23(22)=-1 a23 b22
// console.log(a,b)//23,22
