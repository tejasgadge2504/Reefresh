import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import Navbar from "../Home/Navbar/Navbar";
import Header from "../Home/Header/Header";

const LandingpageUser = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div>
      <Navbar />
      <Header/>
    </div>
  );
};

export default LandingpageUser;
