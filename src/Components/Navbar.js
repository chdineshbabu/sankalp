import React from 'react'
import { useParams } from 'react-router'

function Navbar() {
    const pathee = useParams()
    console.log(pathee)
  return (
    <div className='t-0'>
        <div className='h-20 text-white bg-black'>
        {pathee === '/' ? <h1>Faculty Leave Management</h1>:<div></div>}
        </div>
    </div>
  )
}

export default Navbar