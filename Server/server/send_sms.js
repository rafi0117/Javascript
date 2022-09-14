import twilio from "twilio"

const accountSid = "ACf9e675804e1513450004ad98133fde1c";
const authToken = "4e30ef03b45b5ff0f22731d4f8ea8f9f";
// const client = require('twilio')(accountSid, authToken);
const client = new twilio(accountSid, authToken);

let smsBody = {
    body: "hello",
    to: "919618710198"
}
async function sendsms(smsBody) {
    try {
        let message = await client.messages
            .create({
                body: smsBody.body,
                from: '+15017122661',
                to: smsBody.to
            })
        console.log(message.sid);
    } catch (error) {
        console.error(error)
    }
}
sendsms(smsBody);
