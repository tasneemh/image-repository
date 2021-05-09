//importing dependencies and components
import React from "react";
import axios from "axios";
import Image from "./Image";

function GetImages(props) {
  const { imagesArr, setImagesArr } = props;
  const getImages = () => {
    axios
      .get("http://localhost:8080/getimages/")
      .then((response) => {
        setImagesArr(response.data);
      })
      .catch((error) => {
        setMessage(error);
      });
  };
  return (
    <div className="images-container">
      <div className="images-container-header">
        <h5>To view all images available in the repository</h5>
        <button className="btn btn-info" onClick={getImages}>
          CLICK HERE!
        </button>
      </div>
      <div className="image-container">
        {imagesArr &&
          imagesArr.map((image) => <Image image={image} key={image.id} />)}
      </div>
    </div>
  );
}

export default GetImages;
