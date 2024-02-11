import React from 'react'
import { LOGIN } from '../Route/RoutePath'
import { Navigate, Outlet } from 'react-router-dom'


const PrivatePage = () => {
  const user = JSON.parse(localStorage.getItem('name'))
  return (
    <>
      {user  ? <Outlet /> : <Navigate to={LOGIN} replace />}
    </>
  )
}

export default PrivatePage
