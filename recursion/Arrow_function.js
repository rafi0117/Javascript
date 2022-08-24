// let person = {fname:"Abdul", lname:"rafi", age:25}; 

// let txt = "";
// for (let x in person) {
//   txt =txt + person[x] + " ";
// }console.log(txt)



// a = [1,2,4,5,6]
// // for (i=0;i<=a.length;i++)
// for (b in a)
// {
//     console.log(a[b])
// }


// a = [1,2,4,5,6]
// for ( i of a) // direct values
//     {
//         console.log(i)
//     }


// a = [1,2,4,5,6]
// for ( i in a) // index values
//     {
//         console.log(i)
//     }



//to upper case
// n =['code' , 'for' , 'code']
// function cases(n){
//     for (i=0;i<n.length;i++){
//    console.log(n[i].toUpperCase())
//     }
// }cases(n)

//foreach

// n =['code' , 'for' , 'india']
// n.forEach(element => { // element is i
//     console.log(element.toUpperCase())
// });



//map() returns the value of the array

n =['code' , 'for' , 'india']
n = n.map(i => i.toUpperCase())
console.log(n)