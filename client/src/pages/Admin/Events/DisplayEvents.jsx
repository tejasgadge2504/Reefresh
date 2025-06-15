import React, { useEffect,useState } from 'react'
import DisplayEventsCard from './DisplayEventsCard'
import axios from 'axios'

const DisplayEvents = () => {

  const [events, setEvents] = useState([]);
   useEffect(() => {
    axios.get('http://localhost:5000/getEvents')
      .then(res => {
        if (res.data.success) {
          setEvents(res.data.events);
        } else {
          console.error("Error:", res.data.msg);
        }
      })
      .catch(err => console.error("Error fetching events:", err));
  }, []);

  return (
    <div className="m-[20px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event, index) => (
        <DisplayEventsCard key={index} event={event} />
      ))}
    </div>
  )
}

export default DisplayEvents