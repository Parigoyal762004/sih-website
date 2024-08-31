'use client'

import Navbar from '../components/NavBar';
import Head from 'next/head';
import { useState } from 'react';
import MapComponent from '@/components/MapComponent'; 

export default function Home() {
  const [videoFile, setVideoFile] = useState(null);
  const [frameInterval, setFrameInterval] = useState(1);
  const [videoUrl, setVideoUrl] = useState('');

  const handleFileChange = (e) => {
    setVideoFile(e.target.files[0]);
  };

  const handleIntervalChange = (e) => {
    setFrameInterval(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('video', videoFile);
    formData.append('frameInterval', frameInterval);

    const response = await fetch('/api/interpolate', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    setVideoUrl(data.videoUrl);
  };

  return (
    <>
      <Head>
        <title>SIH Project - Frame Interpolation</title>
        <meta name="description" content="AI-based Frame Interpolation and Video Generation for WMS Services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="font-sans">
        {/* Home Section */}
        <section id="home" className="h-screen bg-gradient-to-r from-blue-400 to-purple-500 text-white flex flex-col items-center justify-center p-8">
          <div className="container mx-auto text-center">
            <h1 className="text-6xl font-extrabold mb-4 animate__animated animate__fadeIn">Welcome to Our SIH Project</h1>
            <p className="text-2xl mb-8 animate__animated animate__fadeIn animate__delay-1s">Innovative solutions for frame interpolation and video generation, making visual data more engaging.</p>
            <a href="#problem-statement" className="bg-yellow-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-yellow-600 transition-colors animate__animated animate__fadeIn animate__delay-2s">
              Learn More
            </a>
          </div>
        </section>

        {/* Problem Statement Section */}
        <section id="problem-statement" className="h-screen bg-gradient-to-r from-gray-200 to-gray-300 text-gray-900 p-8 flex flex-col items-center">
          <div className="container mx-auto text-center">
            <h2 className="text-5xl font-extrabold mb-6 text-gray-800 animate__animated animate__fadeIn">Problem Statement</h2>
            <div className="bg-white p-6 rounded-xl shadow-lg mx-auto max-w-4xl">
              <p className="text-xl mb-4 animate__animated animate__fadeIn animate__delay-1s">
                <span className="font-semibold text-lg">Title:</span> AI-Based Frame Interpolation, Video Generation, and Display System for WMS Services
              </p>
              <p className="text-lg mb-4 animate__animated animate__fadeIn animate__delay-2s">
                <span className="font-semibold text-lg">Description:</span> Develop a system to generate videos using frame interpolation techniques from WMS service imagery. The system should handle deformable objects like clouds and display the video on an interactive map.
              </p>
              <p className="text-lg mb-4 animate__animated animate__fadeIn animate__delay-3s">
                <span className="font-semibold text-lg">Challenges:</span> Interpolation of deformable objects, integration with open-source GIS libraries.
              </p>
              <p className="text-lg animate__animated animate__fadeIn animate__delay-4s">
                <span className="font-semibold text-lg">Desired Outcome:</span> Video visualization on an OpenLayers web map, compatible with OGC WMS services.
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section id="form" className="h-screen bg-gray-200 text-gray-900 p-8 flex flex-col items-center">
          <div className="container mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6 animate__animated animate__fadeIn">Upload Video for Interpolation</h2>
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-lg">
              <div>
                <label className="block text-xl font-medium mb-2">Upload Video</label>
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleFileChange}
                  className="mt-2 border border-gray-300 rounded-lg px-4 py-2 w-full"
                  required
                />
              </div>
              <div>
                <label className="block text-xl font-medium mb-2">Frame Interval (seconds)</label>
                <input
                  type="number"
                  min="1"
                  value={frameInterval}
                  onChange={handleIntervalChange}
                  className="mt-2 border border-gray-300 rounded-lg px-4 py-2 w-full"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-yellow-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-yellow-600 transition-colors"
              >
                Generate Video
              </button>
            </form>

            {videoUrl && (
              <div className="mt-8">
                <h2 className="text-3xl font-semibold mb-4">Interpolated Video</h2>
                <video src={videoUrl} controls className="w-full max-w-4xl rounded-xl shadow-lg"></video>
              </div>
            )}
          </div>
        </section>

        {/* Map Section */}
        <section id="map-section" className="h-screen bg-gray-200 p-8 flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-6">Map Section</h1>
          <MapComponent />
        </section>

        {/* Demo Section */}
        <section id="demo" className="h-screen bg-gray-400 text-gray-900 p-8 flex flex-col items-center">
          <div className="container mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6 animate__animated animate__fadeIn">Demo</h2>
            <p className="text-lg mb-6 animate__animated animate__fadeIn animate__delay-1s"></p>
            <div className="w-full max-w-4xl mx-auto">
              <iframe
                src="YOUR_DEMO_VIDEO_URL"
                width="100%"
                height="450"
                className="rounded-xl shadow-lg"
                title="Demo Video"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="h-screen bg-gray-500 text-gray-900 p-8 flex flex-col items-center">
          <div className="container mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6 animate__animated animate__fadeIn">Meet the Team</h2>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg w-80">
                <h3 className="text-3xl font-semibold mb-2">~Aaditya</h3>
                <p className="text-lg">Trying Gain Interpolation for enhanced video quality.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg w-80">
                <h3 className="text-3xl font-semibold mb-2">~Soham Tiet</h3>
                <p className="text-lg">Exploring Google Research Frame Interpolation techniques.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg w-80">
                <h3 className="text-3xl font-semibold mb-2">~Pari Goyal</h3>
                <p className="text-lg">Developing a small web prototype for display (Refer SIH1736 Description).</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg w-80">
                <h3 className="text-3xl font-semibold mb-2">~Yash Yadav</h3>
                <p className="text-lg">Using Stable Diffusion and RAFT for frame deformation of clouds and optical flow.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg w-80">
                <h3 className="text-3xl font-semibold mb-2">~Ramandeep Singh</h3>
                <p className="text-lg">Fetching satellite images of clouds from official sources at 30-minute intervals (Refer SIH1736 for details).</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg w-80">
                <h3 className="text-3xl font-semibold mb-2">~Devraj</h3>
                <p className="text-lg">Fetching satellite images of clouds from official sources at 30-minute intervals (Refer SIH1736 for details).</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
