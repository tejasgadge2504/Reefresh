import React, { useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { useNavigate } from 'react-router-dom'
const NavbarPostLogin = ({uName}) => {

  const navigate = useNavigate();

  const handleLogout =()=>{
    localStorage.removeItem('user');
    navigate('/')
  }

  return (
    <div className='flex justify-around items-center '>
        <div className="logo">
            <h3 className='text-3xl font-bold'>Reefresh</h3>
        </div> 
        <div className="blankspace"></div>
        <div className="welcome">
            <h4 className='font-semibold'>Welcome, {uName}</h4>
        </div>
        <div className="div">
            <Button onClick={handleLogout}>Logout</Button>
        </div>
    </div>
  )
}

export default NavbarPostLogin