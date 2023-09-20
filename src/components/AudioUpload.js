import React, { useState } from "react";
import axios from "axios";
import "./AudioUpload.css";

function AudioUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select an audio file.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("audio", selectedFile);

      // Replace 'YOUR_BACKEND_API_URL' with your actual backend API endpoint for handling file uploads.
      const response = await axios.post("YOUR_BACKEND_API_URL", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("File uploaded successfully.");
      console.log("Server response:", response.data);
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Error uploading file. Please try again later.");
    }
  };

  return (
    <div>
      <label for="file-input" className="glow-on-hover">
        <span>Upload a File</span>
        <input
          type="file"
          id="file-input"
          name="file"
          accept="audio/*"
          onChange={handleFileChange}
        />
      </label>

      {selectedFile && (
        <div>
          <p>Selected File: {selectedFile.name}</p>
          <button onClick={handleUpload}>Upload</button>
        </div>
      )}
    </div>
  );
}

export default AudioUpload;
