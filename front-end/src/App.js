import "./App.css";
import { useState } from "react";
import UploadImage from "./components/UploadImage";

function App() {
  const [selectedImage, setSelectedImage] = useState("");
  const [name, setName] = useState("");
  return (
    <div className="App">
      <UploadImage
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        name={name}
        setName={setName}
      />
    </div>
  );
}

export default App;
