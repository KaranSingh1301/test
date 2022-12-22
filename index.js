const express = require("express");

const app = express();

const PORT = process.env.PORT || 8001;

app.get("/", (req, res) => {
  return res.send("Your app");
});
app.get("/home", (req, res) => {
  return res.send("Your home page");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
