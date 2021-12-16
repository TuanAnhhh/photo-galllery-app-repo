import Header from "./components/header/Header";
import UploadForm from "./components/uploadForm/UploadForm";
import Images from './components/images/Images'
import { useState } from "react";
import Modal from "./components/modal/Modal";
function App() {
  const [selectedImage, setSelectedImage] = useState(null)
  return (
    <div className="app">
      <Header/>
      <UploadForm/>
      <Images setSelectedImage={setSelectedImage}/>
      {selectedImage && <Modal 
          selectedImage ={selectedImage} 
          setSelectedImage={setSelectedImage}
          />}
    </div>
  );
}

export default App;
