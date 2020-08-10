const axios = require("axios");
const clipboardy = require("clipboardy");
require("dotenv").config();

const [title] = process.argv.slice(2);
const html = `
<div class="Background">
  <div class="Card">
    <div class="Card-body">
      <div class="Goal">
        <h1 class="Goal-title">${title} <img class="Bubble" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/237/thought-balloon_1f4ad.png" /></h1>
      </div>
    </div>
    <div class="Card-footer">
      <div class="Avatar">
        <img class="Avatar-image" src="https://brain.a-p.fi/favicon.ico" />
      </div>
      <span class="Username">A-P's brain</span>
      <span class="Author">@apkoponen</
    </div>
  </div>
</div>`;
const css = `
body {
  font-family: Roboto, sans;
}

.Background {
  background: #4EA69C;
  padding: 42px;
  display: flex;
  width: 540px;
  min-height: 270px;
}

.Card {
  box-shadow: rgba(0, 0, 0, 0.45) 0px 15px 42px;
  background: #fff;
  border-radius: 5px;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  padding: 20px;
  width: 100%;
}

.Card-body {
  align-items: center;
  display: flex;
  flex: 1;
  margin: 0 0 15px;
}

.Card-footer {
  align-items: center;
  border-top: 1px solid #e8e8e8;
  display: inline-flex;
  padding: 10px 0 0 0;
  width: 100%;
}

.Goal {
  display: inline-flex;
}

.Goal-title {
  color: #000;
  flex: 1 1 auto;
  font-weight: 700;
  font-size: 48px;
  margin: 0;
  color: #444;
}

.Bubble {
  height: 64px;
  vertical-align: top;
  display: inline-block;
}

.Avatar {
  margin: 0 10px 0 0;
  position: relative;
}

.Avatar-image {
  border-radius: 50%;
  height: 40px;
  width: 40px;
}

.Avatar-badge {
  position: absolute;
  right: -5px;
  top: -5px
}

.Username {
  font-size: 20px;
  color: #666;
}

.Author {
  margin: 0 0 0 auto;
  color: #666;
}`;
const google_fonts = "Roboto:wght@100;500;700";

(async () => {
  const { data } = await axios.post(
    "https://hcti.io/v1/image",
    {
      html,
      css,
      google_fonts,
    },
    {
      auth: {
        username: "8bc1c404-474e-4d1c-8892-b4dee30872ea",
        password: process.env.API_KEY,
      },
    }
  );

  console.log(data.url);
  clipboardy.writeSync(data.url);
  console.log("Copied to clipboard! ✅");
})();
