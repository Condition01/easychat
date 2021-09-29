const { build } = require("./app.js");

const app = build({ logger: true });

app.listen(process.env.APP_PORT || 5000, "0.0.0.0", (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
});