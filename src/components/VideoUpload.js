import React, { useState } from 'react';
import { uploadVideo } from './api'; // Adjust path if necessary

function VideoUpload() {
  const [videoFile, setVideoFile] = useState(null);
  const [videoUrl, setVideoUrl] = useState('');

  const handleFileChange = (event) => {
    setVideoFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await uploadVideo(videoFile);
      setVideoUrl(response.data.videoUrl);
    } catch (error) {
      console.error('Error uploading video:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="video/*" onChange={handleFileChange} />
        <button type="submit">Upload Video</button>
      </form>
      {videoUrl && <video src={videoUrl} controls />}
    </div>
  );
}

export default VideoUpload;
