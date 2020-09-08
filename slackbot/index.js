require("dotenv").config();
const { App } = require("@slack/bolt");
const axios = require("axios");

const composeMessage = (imageURL, text) => {
  return {
    blocks: [
      {
        type: "image",
        image_url: imageURL,
        alt_text: text || "Cute Corgi!",
      },
    ],
  };
};

// Dog API Endpoint: https://dog.ceo/api/breed/corgi/images/random
const fetchDoggo = () =>
  axios("https://dog.ceo/api/breed/corgi/images/random")
    .then(function (response) {
      // handle success
      return composeMessage(response.data.message);
    })
    .catch((err) => err);

// Authorize Slackbot
const bot = new App({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  token: process.env.SLACK_BOT_TOKEN,
});

// Respond to Events
bot.event("app_mention", async ({ context, event, say }) => {
  try {
    const doggo = await fetchDoggo();
    bot.client.chat.postMessage({
      token: context.botToken,
      channel: event.channel,
      text: "Hi",
      ...doggo,
    });
  } catch (e) {
    console.log(`error responding ${e}`);
  }
});

(async () => {
  // Start the app
  await bot.start(process.env.PORT || 3000);

  console.log("⚡️ Bolt app is running!");
})();
