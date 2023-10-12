import React from 'react'
import { auth } from "../config/firebase"
import { useAuthState } from 'react-firebase-hooks/auth'
import DashboardInfo from '../Components/DashboardInfo';
import LeaveForm from '../Components/LeaveForm';

function DashBoard() {

    const [user] = useAuthState(auth);

    console.log(user)
  return (
    <div className='m-14 px-16 flex flex-col md:flex-row gap-6'>
      <LeaveForm />
      <DashboardInfo />
    </div>
  )
}

export default DashBoard