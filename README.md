SIH Project - Frame Interpolation and Video Generation
Overview
This project focuses on creating an AI-Based Frame Interpolation and Video Generation System for WMS services. The system interpolates frames from satellite imagery and generates videos, displayed on an interactive map.

Features
Frame Interpolation: Upload a video, set a frame interval, and generate an interpolated video.
Interactive Map: Displays WMS data and interpolated videos.
Frontend: Built using Next.js, Tailwind CSS, and React.
Backend: Node.js with Express, handles video processing and serves data.


Project Structure

root/
│
├── backend/
│   └── server.js
│   
│       
└── src/
    ├── components/
    └── pages/
How to Run the Project Locally
1. Clone the Repository
bash
Copy code
git clone <repo-url>
cd <repo-folder>

2. Install Dependencies
In the root folder:
npm install

In the backend folder:
cd backend
npm install

3. Start the Application
In the root folder, start the frontend:
npm run dev
In the backend folder, start the server:
node server.js


4. Access the Application
Frontend: http://localhost:3000
Backend: http://localhost:5000
Dependencies
Next.js
React
Tailwind CSS
Node.js
Express
