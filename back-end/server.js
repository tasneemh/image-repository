const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
//importing pool
const pool = require("../back-end/sqlDatabase/db");
const sqlDbHelpers = require("../back-end/sqlDatabase/dbHelpers/index")(pool);
const PORT = 8080;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.post("/upload", (request, response) => {
  console.log("request.body: ", request.body);
  //console.log("request.body.data: ", request.body.data);
  console.log("request.params: ", request.params);
  console.log("request.files: ", request.files);
  //console.log("request: ", request);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`);
});
