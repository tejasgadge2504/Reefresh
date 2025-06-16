import React, { useEffect } from 'react'
import NavbarPostLogin from '../Home/NavbarPostLogin/NavbarPostLogin'
import { useNavigate } from 'react-router-dom';

const DashboardSA = () => {

    
const user = JSON.parse(localStorage.getItem("user"));
const navigate = useNavigate();
  
 useEffect(() => {
    if (!user) {
      navigate("/"); 
    }
  }, [user, navigate]); 


  return (
    <div>
        <NavbarPostLogin/>
        <p>super admin</p>
    </div>
  )
}

export default DashboardSA