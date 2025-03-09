import React from "react";

const Plate = () => {
  return (
    <div className="relative w-60 h-60 bg-gray-200 rounded-full flex items-center justify-center shadow-lg">
      <span className="absolute top-8 left-12 text-3xl">🍔</span>
      <span className="absolute top-8 right-12 text-3xl">🍕</span>
      <span className="absolute bottom-8 text-3xl">☕</span>
    </div>
  );
};

export default Plate;