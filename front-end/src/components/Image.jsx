import React from "react";

function Image(props) {
  const { image } = props;
  const newSource = "/images/" + image.file_name;

  return (
    <div className="image">
      <img src={newSource} />
    </div>
  );
}

export default Image;
