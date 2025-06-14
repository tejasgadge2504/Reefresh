import React from 'react'
import { CardDemo } from './pages/Auth/Login/LoginUser'
import { Route, Routes } from 'react-router-dom'
import LandingpageUser from './pages/LandingpageUser.jsx/LandingpageUser'

const App = () => {
  return (
    <div className='w-screen flex justify-center items-center h-screen'>
      
      <Routes>
        <Route path='/' element={<CardDemo/>} />
        <Route path='/landPageUser' element={<LandingpageUser/>} />
      </Routes>
    </div>
    
  )
}

export default App