import React from 'react'
import { useParams } from 'react-router'

function Navbar() {

    const path = window.location.pathname
    console.log(path)
    return (
        <div className='t-0'>
            <div className='h-20 px-32 flex justify-between  items-center text-white bg-black'>
                <div>
                    {path ==='/dashbord' ? <h1 className='text-xl font-semibold'>Dashboard</h1> :<h1 className='text-xl font-semibold'>Faculty Leave Management</h1>}
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Navbar