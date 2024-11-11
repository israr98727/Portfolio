import React from 'react';

function LoadingAnimation() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900">
      {/* Large < and > symbols with hollow dots performing a wave effect */}
      <div className="flex items-center justify-center space-x-4">
        {/* Left Sign */}
        <div className="text-[10vw] font-bold text-white">&lt;</div>

        {/* Hollow Dots with Wave Animation */}
        <div className="flex space-x-8">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="w-[5vw] h-[5vw]  border-4 border-white rounded-full animate-wave"
              style={{
                animationDelay: `${index * 0.3}s`, // Adjust delay for the wave effect
              }}
            ></div>
          ))}
        </div>

        {/* Right Sign */}
        <div className="text-[10vw] font-bold text-white">&gt;</div>
      </div>

      {/* Add wave animation using keyframes */}
      <style>
        {`
          @keyframes wave {
            0% {
              transform: scale(1);
              opacity: 0.6;
            }
            50% {
              transform: scale(1.5);
              opacity: 1;
            }
            100% {
              transform: scale(1);
              opacity: 0.6;
            }
          }
          .animate-wave {
            animation: wave 1.5s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
}

export default LoadingAnimation;
