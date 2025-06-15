import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2 className="text-9xl font-extrabold text-amber-50 font-outfit">
          Reefresh
        </h2>
        <p className="text-amber-50 text-[30px] mt-0">
          Bringing Beaches Back to Life
        </p>
        <div className="hero-buttons flex space-x-2.5">
          <a href="#explore-menu">
            <button className="border-0 border-amber-50 font-medium bg-amber-50 text-2xl rounded-[30px] py-[1vw] px-[2.3vw] cursor-pointer ">
              View Events
            </button>
          </a>
          <a href="#explore-menu">
            <button className="border-0 border-amber-50 font-medium bg-amber-50 text-2xl rounded-[30px] py-[1vw] px-[2.3vw] cursor-pointer ">
              Learn More
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
