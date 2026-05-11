import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './pages/Dashboard.jsx'
import Manufacturing from './features/Manufacturing.jsx'
import Orders from './features/Orders.jsx'
import Inventory from './features/Inventory.jsx'
import LoginPage from './features/auth/LoginPage.jsx'
import RegistrationPage from './features/auth/RegistrationPage.jsx'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} 
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/manufacturing" element={<Manufacturing />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  )
} 

export default App