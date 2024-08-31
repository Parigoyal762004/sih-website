const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const util = require('util');

// Convert exec to a promise-based function
const execPromise = util.promisify(exec);

async function processFrames(images, frameInterval) {
  const uploadsDir = path.join(process.cwd(), 'uploads');
  const outputVideoPath = path.join(uploadsDir, 'output_video.mp4');

  // Create a command to process images into a video
  const command = `ffmpeg -framerate ${frameInterval} -pattern_type glob -i '${path.join(uploadsDir, '*.png')}' -c:v libx264 -pix_fmt yuv420p ${outputVideoPath}`;

  try {
    await execPromise(command);
    return `/uploads/output_video.mp4`;
  } catch (error) {
    console.error('Error processing frames:', error);
    throw new Error('Processing failed');
  }
}

// Export the function using CommonJS
module.exports = { processFrames };
