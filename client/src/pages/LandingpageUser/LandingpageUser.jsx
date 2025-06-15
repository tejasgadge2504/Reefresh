import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import Navbar from "../Home/Navbar/Navbar";
import Header from "../Home/Header/Header";
import About from "../Home/About/About";
import Change from "../Home/Change/Change";
import Learn from "../Home/Learn/Learn";
import Market from "../Home/Market/Market";

const LandingpageUser = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <Header />
      <About />
      <Change />
      <Learn />
      <Market/>
    </div>
  );
};

export default LandingpageUser;
