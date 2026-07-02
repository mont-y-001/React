import React from 'react'
import { Outlet } from 'react-router-dom'
import Reports from './Reports'
import Result from './Result'
import MockTest from './MockTest'
 

const Dashboard = () => {
  return (
    <div>
      Dashboard Page
      <Outlet/>
    </div>
  )
}

export default Dashboard
