import { useState } from 'react';

import './App.css';

function App() {

  const [fileSelect, setFileSelect] = useState([]);
  const [fileInBase64, setFileInBase64] = useState('');

  const onFileChange = (e) => {
    setFileSelect(e.target.files);
    console.log(e.target.files);
  };

  const encodeFileInBase = (file) => {
    const reader = new FileReader();

    if(file){
        reader.readAsDataURL(file);
        reader.onload = () => {
          const base64 = reader.result;
          console.log(base64);
          setFileInBase64(base64);
        };
        reader.onerror = (error) => console.log(error);
    }
  };

  encodeFileInBase(fileSelect[0]);

  return (
    <div className="container-main">
      <main className="box-content">
        <input type="file" onChange={onFileChange}/>
      </main>
    </div>
  );
}

export default App;
