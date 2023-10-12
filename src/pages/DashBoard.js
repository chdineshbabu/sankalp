import React from 'react'
import { auth } from "../config/firebase"
import { useAuthState } from 'react-firebase-hooks/auth'

function DashBoard() {

    const [user] = useAuthState(auth);

    console.log(user)
  return (
    <div>DashBoard</div>
  )
}

export default DashBoard