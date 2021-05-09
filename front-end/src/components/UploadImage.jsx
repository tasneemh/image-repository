import React from "react";
import axios from "axios";
const FormData = require("form-data");

function UploadImage(props) {
  const { selectedImage, setSelectedImage, message, setMessage } = props;

  const clearForm = () => {
    console.log("inside clear form function");
    setSelectedImage("");
  };
  const clearMessage = () => {
    setTimeout(() => {
      setMessage("");
    }, 5000);
  };
  const handleFile = (event) => {
    const file = event.target.files[0];
    console.log("file inside handleFile: ", file);
    setSelectedImage(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedImage) {
      let file = selectedImage;
      clearForm();
      let formdata = new FormData();
      formdata.append("file", file);
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };

      axios
        .post("http://localhost:8080/upload", formdata, config)
        .then((response) => {
          clearForm();
          console.log("response inside uploadImage in axios: ", response);
          setMessage(response.data);
          clearMessage();
        })
        .catch((error) => {
          console.log("error inside axios in uploadImages: ", error);
          setMessage(error);
          clearMessage();
        });
    } else {
      setMessage("Please attach the file!");
      clearMessage();
    }
  };

  //console.log(selectedImage, name);
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
