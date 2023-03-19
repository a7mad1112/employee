import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={'/employee'} />} />
      <Route path='/employee' element={<Home/>} />
      <Route path='/employee/login' element={<Login/>} />
    </Routes>
  )
}

export default Routers