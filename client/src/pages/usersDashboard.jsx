import React from 'react'
import UserProfile from '../components/userProfile'
import { Outlet } from 'react-router-dom'


const UsersDashboard = () => {
  return (
    <div className='w-screen h-screen flex'>
      <UserProfile/>
      <Outlet/>
    </div>
  )
}

export default UsersDashboard
