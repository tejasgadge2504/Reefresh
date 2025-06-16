import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import Navbar from "../Home/Navbar/Navbar";
import Header from "../Home/Header/Header";
import About from "../Home/About/About";
import Change from "../Home/Change/Change";
import Learn from "../Home/Learn/Learn";
import Market from "../Home/Market/Market";
import FAQ from "../Home/Faq/Faq";
import Footer from "../Home/Footer/Footer";

const LandingpageUser = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Main content grows to fill space */}
      <div className="flex-grow">
        <Navbar />
        <Header />
        <About />
        <Change />
        <Learn />
        <Market />
        <FAQ />
      </div>

      {/* Footer at the very bottom */}
      <Footer />
    </div>
  );
};


export default LandingpageUser;
