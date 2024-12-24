"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import '../../app/sass/notfound.scss';

const NotFound = () => {
  const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });
  const [isIlluminated, setIsIlluminated] = useState(false);
  const gradientRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: any) => {
    const x = e.clientX + 20; // Adjust to your needs
    const y = e.clientY - 50; // Adjust to your needs
    setGradientPosition({ x, y });
  };

  useEffect(() => {
    // Check if the gradient is on the text area
    const checkIllumination = () => {
      if (gradientRef.current) {
        const rect = gradientRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        console.log(centerX)
        console.log(gradientPosition.x)
        console.log(centerY - gradientPosition.y)
        const distance = Math.sqrt(
          Math.pow(centerX - gradientPosition.x-100, 2) + Math.pow(centerY - gradientPosition.y-100, 2)
        );

        console.log(distance)

        // Adjust the distance threshold to change when the text appears
        if (distance == 0) {
          setIsIlluminated(true);
        } else {
          setIsIlluminated(false);
        }
      }
    };

    checkIllumination();
  }, [gradientPosition]);

  return (
    <div
      className="notfound-container"
      onMouseMove={handleMouseMove}
    >
      <div className="relative z-10 text-center">
        <h1
          className={` ${isIlluminated ? 'visible' : ''}`}
          style={{
            clipPath: isIlluminated
              ? `circle(200px at ${gradientPosition.x}px ${gradientPosition.y}px)`
              : 'circle(0px at 50% 50%)',
            WebkitClipPath: isIlluminated
              ? `circle(200px at ${gradientPosition.x}px ${gradientPosition.y}px)`
              : 'circle(0px at 50% 50%)',
          }}
        >
          404
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          The page you’re looking for doesn’t exist.
        </p>
        <Link
          href="/"
          className="inline-block mt-6 px-6 py-3 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition"
        >
          Go Back Home
        </Link>
      </div>
      <div
        className="gradient"
        ref={gradientRef}
        style={{
          left: `${gradientPosition.x - 100}px`,
          top: `${gradientPosition.y - 100}px`,
        }}
      />
    </div>
  );
};

export default NotFound;
