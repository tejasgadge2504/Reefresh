import React from "react";

const LearnCard = ({ icon, title, description }) => {
  return (
    <div className="bg-teal-600 text-white rounded-lg p-4 flex items-start gap-3 max-w-xl mt-3">
      <img src={icon} alt="icon" className="w-16 h-16 mt-3" />
      <div>
        <h3 className="font-semibold text-2xl">{title}</h3>
        <p className="text-[15px]  mt-1">{description}</p>
      </div>
    </div>
  );
};

export default LearnCard;
