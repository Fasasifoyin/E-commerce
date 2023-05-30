import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useStateContext } from '../config/context'

const Privateroutes = ({children}) => {
  const location = useLocation()
  const { currentUser } = useStateContext()

  return (
    <>
    {currentUser ? (
      children
    ): (
      <Navigate to={'/account'} state={{from : location}}/>
    )}
    </>
  )
}

export default Privateroutes