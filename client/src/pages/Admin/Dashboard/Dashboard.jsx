
import NavbarPostLogin from '../../Home/NavbarPostLogin/NavbarPostLogin'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminHero from '../AdminHero/AdminHero';
import { Space } from 'lucide-react';
import DisplayEvents from '../Events/DisplayEvents';

const Dashboard = () => {

  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  
 useEffect(() => {
    if (!user) {
      navigate("/"); 
    }
  }, [user, navigate]); 

  return (
    <div className='w-screen '>
        <NavbarPostLogin uName={user?.fullName} />
        <AdminHero/>

        <DisplayEvents/>
    </div>
  )
}

export default Dashboard