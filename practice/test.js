import readlineSync from "readline-sync"
function base64Decoding() {
    let inputString = readlineSync.question("enter the string:");
    // const base64regex = /^[a-zA-Z0-9+/\=]*$/;
    // if (!(base64regex.test(inputString))) {
    //     return console.log("Not Valid")
    // }
    // console.log("valid")
const base64regex=/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/
if((base64regex.test(inputString))){
    console.log(" valid input")
    let splitString=inputString.split("");
    console.log("the string is : ", splitString);
    let count=0;
    for(let i=0;i<splitString.length;i++){
        if(splitString[i]=='='){
            splitString.pop()
            count++
        }
    }
    console.log("AFTER REMOVING '='  FROM string is : ", splitString);
    let base64="ABCDEFGHILKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
   let unicode= splitString.map((charIND) => base64.indexOf(charIND))
   console.log("index val:",unicode)
   let binaryCodes=unicode.map((num)=> num.toString(2));
    console.log(" Binary codes :", binaryCodes);
    // for(let i=0;i<binaryCodes.length;i++){
    //  if(binaryCodes[i].length!=6){
    //       while(binaryCodes[i].length<6){
    //        binaryCodes[i]= "0"+ binaryCodes[i];
    //      }
    //   }
    // }
    // console.log("6bit binary:", binaryCodes)
    let binaryCodes6bit=binaryCodes.map((bin)=> {
        while(bin.length<6){
        bin="0"+bin;
        }
        return bin;
    })
    console.log("6bit binaries :" ,binaryCodes6bit);
// JOIN AND SPLIT
    let oneBinary=binaryCodes6bit.join("").split("")
    console.log(oneBinary);
    if(count==1){
        oneBinary.splice((oneBinary.length-2))
    }else if(count==2) {
        oneBinary.splice((oneBinary.length-4))
    }
    let binaryCodes8bit=[];
    while(oneBinary.length!=0){
        binaryCodes8bit.push(oneBinary.splice(0,8).join(""));
        // splice method creates new sub arrays in the existing array
        // join method joining them sub-arrays
    }
    console.log("8bit binaries :" ,binaryCodes8bit);
    let bintoDecimal=binaryCodes8bit.map((str)=>parseInt(str,2));
    console.log("base 64 decimals : ",bintoDecimal)
    let FINAL_OUTPUT= bintoDecimal.map((char) => String.fromCharCode(char));
    console.log("FINAL OUTPUT :",FINAL_OUTPUT )
    console.log("decoded:",FINAL_OUTPUT.join(""))
}
else{
    console.log("invalid")
}
}
// base64Decoding();
export default base64Decoding;
7:45
import readlineSync from "readline-sync"
import base64Decoding from './decoder.js'
import base64Encoding from './encoder.js'
function cli() {
    console.log("  Menu options")
    console.log("press 0 to Exit")
    console.log("press 1 to Encode")
    console.log("press 2 to Decode")
    let inputString = readlineSync.questionInt("which operation Do you want to perform:");
    switch(inputString){
        case 0:
            console.log("You are  performing ntg here.\n")
            break;
        case 1:
            base64Encoding()
            rerun()
            break;
        case 2:
            base64Decoding()
            rerun()
            break;
          default:
            console.log("PLEASE,Enter the right input.")
            cli()
    }
}
cli()
function rerun(){
let inputString2= readlineSync.question("Do you want to continue(y/n):");
if(inputString2=="y" || inputString2=="Y" || inputString2=="YES" || inputString2=="yes"){
    console.log('\n1')
    cli()
}
else
console.log("thank you,FOR USING OUR CLI ")
// else if(inputString2=="n" || inputString2== "N"){
//     console.log("thank you,FOR USING OUR CLI ")
//     return;
// }
// else{
//     console.log("Input invalid")
// }
}

