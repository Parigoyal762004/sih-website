// server.js

const express = require('express');
const app = express();
const cors = require('cors');
const multer = require('multer');
const path = require('path');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware for file upload
const upload = multer({ dest: 'uploads/' });

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve an HTML file at the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle video interpolation request
app.post('/api/interpolate', upload.single('video'), (req, res) => {
  // Handle video processing and interpolation
  // Example response
  res.json({ videoUrl: 'http://localhost:5000/processed/video.mp4' });
});

// Example marker data route
app.get('/api/markers', (req, res) => {
  // Example marker data
  const markers = [
    { latitude: 37.7749, longitude: -122.4194, title: 'San Francisco' },
    { latitude: 40.7128, longitude: -74.0060, title: 'New York' },
  ];
  res.json(markers);
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
