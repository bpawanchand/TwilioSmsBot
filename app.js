const twilio = require("twilio");
const express = require("express");

const app = express();
const port = process.env.PORT || 8080;

const accountSid = "AC09fef82b75a4c6e43d0963d3a36e5535";
const authToken = "7e0c21f327a5e21a884eb55cde320941";
const client = new twilio(accountSid, authToken);
client.messages
  .create({
    body: "Greeting User, this is from TwilioSmsBot",
    to: "+491716187336",
    from: "+12014256276"
  })
  .then(message => console.log(message.sid));

app.listen(port, () => {
  console.log(`Application running on port ${port}`);
});
