import React from 'react';

export default function App() {
  const handleMatkaPlay = () => {
    const phoneNumber = '919999999999'; // Replace with your WhatsApp number
    const message = encodeURIComponent('Hello, I want to play Matka.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  const buttonClasses = `
    bg-gradient-to-r from-purple-600 via-pink-500 to-red-500
    text-white font-bold px-6 py-2 rounded-full shadow-lg
    hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out
    border-2 border-white
  `;

  return (
    <div className=" bg-orange-100 p-6 relative">
      {/* Sample Content */}
    

      {/* Fixed Action Buttons */}
      <div className="fixed bottom-4 left-4 z-50">
        <button onClick={handleMatkaPlay} className={buttonClasses}>
          Matka Play
        </button>
      </div>

      <div className="fixed bottom-4 right-4 z-50">
        <button onClick={handleRefresh} className={buttonClasses}>
          REFRESH
        </button>
      </div>
    </div>
  );
}
