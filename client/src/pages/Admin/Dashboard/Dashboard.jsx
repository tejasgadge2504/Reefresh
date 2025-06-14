
import NavbarPostLogin from '../../Home/NavbarPostLogin/NavbarPostLogin'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminHero from '../AdminHero/AdminHero';

const Dashboard = () => {

  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  
 useEffect(() => {
    if (!user) {
      navigate("/"); 
    }
  }, [user, navigate]); 

  return (
    <div className='w-screen'>
        <NavbarPostLogin uName={user?.fullName} />
        <AdminHero/>
    </div>
  )
}

export default Dashboard