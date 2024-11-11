import React, { useEffect, useState } from 'react';

function MouseFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none bg-gray-300 rounded-full"
      style={{
        width: '30px',
        height: '30px',
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
        transition: 'transform 0.1s ease-out',
        mixBlendMode: 'difference',  // For contrast
        zIndex: 9999  // Ensures it appears above other elements
      }}
    />
  );
}

export default MouseFollower;
