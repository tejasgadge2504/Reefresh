import React from "react";


const ChangeCard = ( {logo, ngoName, desc, beach }) => {
  return (
    <div className="w-[280px] bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
      <div className="bg-[#8AB64D] p-4 flex items-center justify-center">
        <img
          src={logo}
          alt="Logo"
          className="h-auto object-cover"
        />
      </div>

      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800">{ngoName}</h3>
        <p className="text-sm text-gray-600 mt-2">
          {desc}
        </p>
        <p className="mt-3 text-sm text-gray-700">
          <span className="font-semibold">📍 Beach Area:</span> {beach}
        </p>
      </div>
    </div>
  );
};

export default ChangeCard;
