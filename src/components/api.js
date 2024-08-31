import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const uploadVideo = async (videoFile) => {
  const formData = new FormData();
  formData.append('video', videoFile);
  return axios.post(`${API_URL}/api/interpolate`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const fetchMarkers = async () => {
  return axios.get(`${API_URL}/api/markers`);
};
