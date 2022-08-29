import readlineSync from "readline-sync";

import base64Encoding from "./encoder.js";
import base64Decoding from "./decoder.js";

function main() {
    console.log("---------------------------")
    console.log("BASE 64 CLI APPLICATION");
    console.log("---------------------------")

    console.log(`Press 0 To Exit  
                \nPress 1 to Encode
                \nPress 2 to Decode\n`);

    let choice = readlineSync.questionInt("Please Select an Option from the Given Menu : ");
    while (!(choice >= 0 && choice <= 2)) {
        choice = readlineSync.questionInt("Invalid Option, Please Try Again : ");
    }
    switch (choice) {
        case 0:
            console.log("Thank you for Using our Application. Bye");
            break;
        case 1:
            console.log("The Encoded String is : ", base64Encoding());
            break;
        case 2:
            console.log("The Decoded Base 64 String is : ", base64Decoding());
            break;
        default:
            console.log("Invalid Input");
            break;
    }
}
main();

// function redo(){
    let Select= readlineSync.question("Do you want to continue(y/n):");
    if(Select=="y" || Select=="Y" || Select=="YES" || Select=="yes"){
        console.log('\n1');
        main();
    }else{
        console.log("Thankyou for Using CLI Application")
    }
// }
// redo();