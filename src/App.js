import { useState } from 'react';

import './App.css';

function App() {

  const [fileInBase64, setFileInBase64] = useState('');

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const inBase64 = await encodeFileInBase(file);
    console.log(inBase64);
    setFileInBase64(inBase64);
  };

  const encodeFileInBase = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => resolve(fileReader.result);
      fileReader.onerror = (error) => reject(error);
    })
  };

  return (
    <div className="container-main">
      <main className="box-content">
        <input type="file" onChange={onFileChange}/>
      </main>
    </div>
  );
}

export default App;
