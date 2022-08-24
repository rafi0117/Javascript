// -------------------ASSIGNMENT----------------------



// ----------------------------------------------------------------------------------
// 1.WAP to Multiply two numbers without using multiplication symbol?

// let multiply=(numb1, numb2) => {
// 	let result = ((numb1%2) == 0) ? 0 : numb2;
// 	while ( numb1 > 1){
// 		numb1 = Math.floor(numb1 / 2);
// 		numb2 = numb2 * 2;
// 		if((numb1%2) != 0){
// 			console.log(numb1,numb2);
// 			result += numb2;
// 		}
// 		else{
// 			console.log(numb1,numb2,"*");
// 		}
// 	}
// 	return result;
// }
// let result = multi(9,9);
// console.log(result);
// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------
// 2. Write a function that pre-pends(adding as pre-fix) a zero to single digit numbers

// let array = [25,44,4,18,1,2]
// let addZero = (input) => {
//     newArray = []
//     for ( let i=0;i < input.length; i++ ){
//     let sum = '0'
//         if (input[i] < 10) {
//             sum += input[i]
//             newArray.push(sum)
//         } else {
//             zero = ''
//             newArray.push(sum + input[i])
//         }
//     }console.log(newArray)
// }
// addZero(array)
// ---------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------
// 3. Write an algorithm to Split the Input String into two strings based on even and odd indexes.

// let num =(input) =>{
//   let even = '';
//   let odd = '';

//   for(let i = 0; i < input.length; i++) {
//     if(i%2 === 0) {
//         even += input[i];
//     }else {
//         odd += input[i];
//     }
//   }

//   console.log(`000${even}1111\n000${odd}111`) ;
// }
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// 4.Split the array and add the first part to the end. There is a given array and split it from a specified position, and move the first part of array add to the end.
// Write a function that accepts an array and index position to split as arguments.

// let a =  [1,2,3,4,5,6]
// let into=(array,input) => {
//     b = array.splice(0,input)
//     while(input>0){
//     c = b.shift()
//     array.push(c)
//     input = input-1
//     }
//     console.log(a)
//   }
// into(a,6)
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// 5.IPv4 and Validate

// let checkIP=(input) => {
// let b = input.split(".")
// let c = b.join(".")
// flag = true
// for(i=0;i<=b.length-1;i++){
//     if(b[i]<0 && !(b[i]>=255) || b[i]>0 && !(b[i]<=255)){
//         flag = false
//     }
// }
// if(flag==false){
//     console.log("Invalid IP")
// }else{
//     console.log("Valid IP")
// }
// }
// checkIP("266.255.255.255")
// ------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------
// 6. Write an algorithm to convert 24 hours format time to 12 hours format time.

// let time = (input) => {
//   split = input.split(":")
//   if(split[0]>12){
//     change = split[0]-12
//     console.log(`${change}:${split[1]} PM`)
//     }else{
//     console.log(`${split[0]}:${split[1]} AM`)
// }
// }
// time("20:30")
// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------