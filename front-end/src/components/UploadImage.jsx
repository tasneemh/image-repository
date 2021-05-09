//importing dependencies
import React from "react";
import axios from "axios";
const FormData = require("form-data");

function UploadImage(props) {
  const { selectedImage, setSelectedImage, message, setMessage } = props;

  //clear any success or error messages
  const clearMessage = () => {
    setTimeout(() => {
      setMessage("");
    }, 5000);
  };
  //handle input field in the form
  const handleFile = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };
  //handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedImage) {
      let file = selectedImage;
      //attach image using formdata
      let formdata = new FormData();
      formdata.append("file", file);
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      //sending request to the server
      axios
        .post("http://localhost:8080/upload", formdata, config)
        .then((response) => {
          setMessage(response.data);
          clearMessage();
        })
        .catch((error) => {
          setMessage(error);
          clearMessage();
        });
    } else {
      setMessage("Please attach the file!");
      clearMessage();
    }
  };

  return (
    <form className="form">
      <div className="form-group">
        <div className="form-input">
          <label>Upload an image</label>
          <input
            className="form-control"
            type="file"
            name="file"
            onChange={handleFile}
          />
        </div>
        <div className="btn-container">
          <button
            className="btn btn-success"
            type="submit"
            onClick={handleSubmit}
          >
            SUBMIT
          </button>
          {message && <h4>{message}</h4>}
        </div>
      </div>
    </form>
  );
}

export default UploadImage;
