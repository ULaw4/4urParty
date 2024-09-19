"use client";

import { useState, useEffect } from 'react';

export default function Carousel() {
  const images = [
    '/images/tacosVarios0.jpg',
    '/images/tacosVarios1.jpg',
  ];

  // State to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // useEffect to change the image every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // 1000ms = 1 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="relative bg-cover bg-center h-[75vh] flex items-end justify-center transition-all duration-2000"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }} // Set background image
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl font-bold mb-10">
          El momento que realmente importa
        </h1>
        <div className="space-x-5 p-5">
          <button className="bg-gray-600 px-4 py-2 rounded-lg hover:bg-gray-800">
            Cotizar evento
          </button>
          <button className="bg-gray-600 px-4 py-2 rounded-lg hover:bg-gray-800">
            Ir a la tienda
          </button>
        </div>
      </div>
    </section>
  );
}
