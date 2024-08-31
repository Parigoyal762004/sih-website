const markers = [
  { latitude: 37.7749, longitude: -122.4194, title: 'San Francisco' },
  { latitude: 40.7128, longitude: -74.0060, title: 'New York' },
];

function getMarkerData() {
  return markers;
}

// Export the function using CommonJS
module.exports = { getMarkerData };
