import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const LandingpageUser = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) {
      navigate("/"); 
    }
  }, [user, navigate]); 

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/"); 
  };

  return (
    <div>
      <h2>Hello, {user?.fullName}</h2>

      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default LandingpageUser;
