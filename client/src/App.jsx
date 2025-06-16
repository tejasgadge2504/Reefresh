import React from 'react'
import { CardDemo } from './pages/Auth/Login/LoginUser'
import { Route, Routes } from 'react-router-dom'
import LandingpageUser from './pages/LandingpageUser/LandingpageUser'
import Dashboard from './pages/Admin/Dashboard/Dashboard'
import CreateEvent from './pages/Admin/Events/CreateEvent'
import DashboardSA from './pages/SuperAdmin/DashboardSA'


const App = () => {
  return (
    <div className="w-screen py-[50px]">
      <Routes>
        <Route path="/" element={<CardDemo />} />
        <Route path="/landPageUser" element={<LandingpageUser />} />
        {/* <Route path="/" element={<LandingpageUser />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/superadminDashboard" element={<DashboardSA />} />

      </Routes>
    </div>
  );
}

export default App