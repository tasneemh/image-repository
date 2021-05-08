import React from "react";
import axios from "axios";
const FormData = require("form-data");

function UploadImage(props) {
  const { selectedImage, setSelectedImage, name, setName } = props;

  const handleFile = (event) => {
    const file = event.target.files[0];
    console.log("file inside handleFile: ", file);
    setSelectedImage(file);
  };

  const handleName = (event) => {
    const name = event.target.value;
    console.log("name: ", name);
    setName(name);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let formdata = new FormData();
    console.log("selectedImage: ", selectedImage);
    let file = selectedImage;
    console.log("file inside handleSubmit: ", file);
    formdata.append("file", selectedImage);
    formdata.append("description", name);
    for (let key of formdata.entries()) {
      console.log(key[0] + ", " + key[1]);
    }
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    axios
      .post("http://localhost:8080/upload", formdata, config)
      .then((response) => {
        console.log("response: ", response);
      })
      .catch((error) => {
        console.log("error: ", error);
      });

    // axios({
    //   url: "http://localhost:8080/upload",
    //   method: "POST",
    //   headers: {
    //     "content-type": "multipart/form-data",
    //   },
    //   data: formdata,
    // })
    //   .then((response) => {
    //     console.log("response: ", response);
    //   })
    //   .catch((error) => {
    //     console.log("error: ", error);
    //   });
  };

  //console.log(selectedImage, name);
  return (
    <form>
      <input type="file" name="file" onChange={handleFile} />
      <input type="text" name="name" onChange={handleName} />
      <div>
        <button type="submit" onClick={handleSubmit}>
          SUBMIT
        </button>
      </div>
    </form>
  );
}

export default UploadImage;
