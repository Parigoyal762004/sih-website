import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 shadow-lg fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo/Project Name */}
        <div className="text-white text-xl font-bold">
          SIH Project
        </div>

        {/* Menu Toggle for Mobile */}
        <button
          className="text-white lg:hidden flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        {/* Navbar Links */}
        <div className={`lg:flex flex-grow items-center justify-between ${isOpen ? 'block' : 'hidden'}`}>
          <Link href="#home" className="text-white hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">
            Home
          </Link>
          <Link href="#problem-statement" className="text-white hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">
            Problem Statement
          </Link>
          <Link href="#form" className="text-white hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">
            Upload Video
          </Link>
          <Link href="#demo" className="text-white hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">
            Demo
          </Link>
          <Link href="#team" className="text-white hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">
            Team
          </Link>
        </div>
      </div>
    </nav>
  );
}
