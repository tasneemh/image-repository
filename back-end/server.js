const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
const PORT = 8080;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`);
});
