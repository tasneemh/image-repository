//importing dependencies
const express = require("express");
const cors = require("cors");
const pool = require("../back-end/sqlDatabase/db");
const sqlDbHelpers = require("../back-end/sqlDatabase/dbHelpers/index")(pool);
const multer = require("multer");

const PORT = 8080;

const app = express();
app.use(express.json());
app.use(cors());

//handle file uploads using multer (middleware)
const imageUpload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "../front-end/public/images");
    },
    filename: function (req, file, cb) {
      cb(null, new Date().valueOf() + "_" + file.originalname);
    },
  }),
});
//get all images from database
app.get("/getimages/", (request, response) => {
  sqlDbHelpers
    .getAllImages()
    .then((data) => {
      const arr = data;
      if (!arr) {
        response.send("Error while retrieving the images");
      } else {
        response.send(data);
      }
    })
    .catch((error) => {
      response.error(error);
    });
});
//upload image in database
app.post("/upload", imageUpload.single("file"), (request, response) => {
  const file = request.file;
  if (file) {
    sqlDbHelpers
      .uploadImages(file)
      .then((data) => {
        if (data) {
          response.send("Image uploaded successfully!");
        } else {
          response.send("Duplicate images cannot be uploaded!");
        }
      })
      .catch((error) => {
        response.error("Error while uploading image" + error);
      });
  } else {
    response.send(
      "There has been a problem in sending image from client to server"
    );
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`);
});
