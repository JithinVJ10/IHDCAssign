import React from 'react'
import { LOGIN } from '../Route/RoutePath'


const PrivatePage = () => {
  const user = JSON.parse(localStorage.getItem('userData'))
  return (
    <>
      {user  ? <Outlet /> : <Navigate to={LOGIN} replace />}
    </>
  )
}

export default PrivatePage
