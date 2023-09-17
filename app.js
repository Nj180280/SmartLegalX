const { Client, LocalAuth, MessageMedia } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const axios = require("axios"); // Import axios

const client = new Client({
   authStrategy: new LocalAuth(),
});

client.on("qr", (qr) => {
   qrcode.generate(qr, { small: true });
   console.log("QR RECEIVED", qr);
});

client.on("authenticated", () => {
   console.log("AUTHENTICATED");
});

client.on("ready", () => {
   console.log("Client is ready!");
});

client.on("auth_failure", (msg) => {
   console.error("Authentication failed:", msg);
});

client.on("disconnected", (reason) => {
   console.error("Client was disconnected:", reason);
});

// Define conversation stages
const stages = {
   START: 0,
   GREETING: 1,
   ASK_NAME: 2,
   ASK_EMAIL: 3,
   END: 4,
};

const conversations = new Map();

client.on("message", async (message) => {
   const chatId = message.from;
   const text = message.body;
   const appPromotionMessage = "For more legal information and assistance, visit our Website *SmartLegalX* from *https://SmartLegalX.com*! It's your one-stop destination for all legal queries.";

   // User is not in an active conversation
   // if (text === "start1") {
   //    conversations.set(chatId, stages.GREETING);
   //    client.sendMessage(
   //       chatId,
   //       "Hello! Would you like to start a conversation? (yes/no)"
   //    );
   // }

   try {
      const response = await axios.post("http://127.0.0.1:5001/ask", {
         query: text, // Replace with the actual question
      });

      console.log(response.data);

      const answer = response.data.answer;
      client.sendMessage(chatId, answer);
   } catch (error) {
      console.log("error occured api request", error);
      console.error("Error sending API request:", error);
   }

   console.log(text);



   client.sendMessage(chatId, appPromotionMessage);

});

client.initialize();
