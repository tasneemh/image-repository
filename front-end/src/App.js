//importing dependencies and components
import "./App.css";
import { useState } from "react";
import UploadImage from "./components/UploadImage";
import GetImages from "./components/GetImages";

function App() {
  const [selectedImage, setSelectedImage] = useState("");
  const [message, setMessage] = useState("");
  const [imagesArr, setImagesArr] = useState([]);

  return (
    <div className="App">
      <UploadImage
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        message={message}
        setMessage={setMessage}
      />
      <GetImages imagesArr={imagesArr} setImagesArr={setImagesArr} />
    </div>
  );
}

export default App;
