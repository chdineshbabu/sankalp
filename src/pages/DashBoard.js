import React from 'react'
import { auth } from "../config/firebase"
import { useAuthState } from 'react-firebase-hooks/auth'
import DashboardInfo from '../Components/DashboardInfo';
import LeaveForm from '../Components/LeaveForm';

function DashBoard() {

    const [user] = useAuthState(auth);

    console.log(user)
  return (
    <div className='m-12 px-24'>
    <LeaveForm />
      <DashboardInfo />
    </div>
  )
}

export default DashBoard