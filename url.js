
// // FileUploader.js

import React, { useState } from 'react';

const FileUploader = () => {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadFile = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);
    formData.append('key', '9102cea065831e5dc8bd9efae25d937f');

    try {
      const response = await fetch('https://api.imgbb.com/1/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      setResponse(data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={uploadFile}>Upload</button>
      {response && (
        <div>
          <p>Image uploaded successfully!</p>
          <img src={response.data.url} alt="Uploaded" />
          <p>Direct URL: {response.data.url}</p>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
