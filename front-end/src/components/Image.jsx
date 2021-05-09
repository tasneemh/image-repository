import React from "react";
//import carrot from "../images/1620513145640_user.png";
function Image(props) {
  const { image } = props;
  console.log("image: ", image);
  //console.log(image.original_name);
  const newSource = "/images/" + image.file_name;
  console.log(newSource);
  console.log(typeof newSource);
  return (
    <div className="image">
      <img src={newSource} />
    </div>
  );
}

export default Image;
