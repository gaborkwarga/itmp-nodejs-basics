const express = require("express");
const app = express();

app.get("/itmp", (req, res) => {
  res.send("Hello ITMP!");
});

app.get("/nodejs", (req, res) => {
  res.send(
    "Fogalmazd meg a saját szavaiddal, hogy mi az a Node.js és mire használható!"
  );
});

app.get("/express", (req, res) => {
  res.send(
    "Fogalmazd meg a saját szavaiddal, hogy mi az az Express.js és mire használható!"
  );
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
