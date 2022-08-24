import readlineSync from "readline-sync";


// function base64Encoding{
// let inputString=readlineSync.question("Enter the string you want to encode :")
// let text = inputString
// let encoded = console.log(btoa(text));
// }
// export default base64Encoding;

function base64Decoding(){
    let inputString2=readlineSync.question("Enter the string you want to decode :")
    let text = inputString2;
    let encoded = console.log(btoa(text));
    let decoded = console.log(atob(encoded));

}
base64Decoding();