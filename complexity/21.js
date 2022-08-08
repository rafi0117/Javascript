// complexity of algorithm

// Time complexity - Big "O" Notation
//  Space complexity
// /
//O(1) -> CONSTANT
// O(c) -> CONSTANT
//  O(n) -> LINEAR (execution time depends on no. of inputs)
//  O(n^2) -> square n**2
//  O(n^3) -> cubic  n**3
//  O(2^n) -> 
// O(logn) -> 
 


// a = [1,2]

// if (a.length>7){
//     console.log(true)
// }else{
//     console.log(false)
// }

// var b = 2
// for (i=0;i<a.length;i++){
//     if (a[i]==b){
//         console.log("true")
//     }else{
//         console.log("false")
//     }
// }



// binary search -> inputs must be sorted 
// -> find mid value  --- n/2 --  
// -> check weather the given number is less or greater than mid value --- m==s;m>s;m<s 



a = [1,2,3,4,5,6,7,8]
s = 3
// start = a[0]
// end = a[7]
// s = 1
// var mid = (a/2)
// if(s==6)
// {
//     console.log("matched or equal")
// }
//     if(s>6)
//     {
//     console.log("greater")
//     }
//     if(s<6)
//     {
//     console.log("lesser")
//     }

function Binary_search(a,s)
{
    start = 0
    end = (a.lenght-1)
    // mid = Math.floor((start+end)/2)
    while (start <= end)
    {    mid = Math.floor((start+end)/2)

    if (a[mid] == s)
    {
        return mid
    }
    else if(a[mid]>s)
    {
        end = mid - 1
    }
    else (a[mid]<s)
    {   
        start = mid + 1
    }
 }   
}console.log(Binary_search(a,s))