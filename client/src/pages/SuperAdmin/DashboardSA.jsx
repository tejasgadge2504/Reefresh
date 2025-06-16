import React, { useEffect, useState } from 'react'
import NavbarPostLogin from '../Home/NavbarPostLogin/NavbarPostLogin'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import DisplayEventsCard from '../Admin/Events/DisplayEventsCard';
import PeventsCard from './PeventsCard';

const DashboardSA = () => {

    
const user = JSON.parse(localStorage.getItem("user"));
const navigate = useNavigate();
  
  const [pevents, setpEvents] = useState([])

 useEffect(() => {
    if (!user) {
      navigate("/"); 
    }
  }, [user, navigate]); 

  useEffect(()=>{
    axios.get('https://reefresh.onrender.com/sadmin_getEvents')
    .then(res=>{
        if(res.data.success){
            setpEvents(res.data.pendingEvents)
            console.log(pevents)
        }
        else{
            console.error('Error',res.data.msg)
        }
    })
    .catch(err=>console.error("Error fetching events:", err))
  },[]);

  return (


    <div>
        <NavbarPostLogin uName={user?.fullName}/>
        <div className="p-events flex gap-3">
            {pevents.map((event,index)=>
                (<PeventsCard key={index} event={event}/>)
            )}
        </div>
        
    </div>
  )
}

export default DashboardSA