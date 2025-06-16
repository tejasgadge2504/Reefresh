import React from "react";

const CardMarket = ({ image, title, desc }) => {
  return (
    <div className="w-[280px] bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
      {/* Image Section */}
      <div className="bg-gray-100 p-4 flex items-center justify-center">
        <img src={image} alt={title} className="h-48 object-contain" />
      </div>

      {/* Text Section */}
      <div className="px-4 pb-4 text-center">
        <h3 className="text-md font-semibold text-gray-800 mt-2">{title}</h3>
        <p className="text-sm italic text-gray-600 mt-1">{desc}</p>

        {/* Button */}
        <button className="mt-4 w-full bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium py-2 rounded-md flex justify-center items-center gap-2 transition">
          Buy Now
          <span className="text-lg">→</span>
        </button>
      </div>
    </div>
  );
};

export default CardMarket;
