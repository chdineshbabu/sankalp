import React from 'react'
import { auth } from "../config/firebase"
import { signOut } from "firebase/auth"
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router'

function Navbar() {
    const navigate = useNavigate()
    const [user] = useAuthState(auth);

    const path = window.location.pathname
    const signUserOut = async ()=>{
        await signOut(auth);
        navigate('/')
    }
    return (
        <div className='t-0'>
            <div className='h-20 px-10 md:px-32 flex justify-between items-center text-white bg-black'>
                <div className='pl-12 md:pl-0'>
                    {path ==='/dashboard' ? <h1 className='text-xl font-semibold hidden md:flex'>Dashboard</h1>:path ==='/admin' ? <h1 className='text-xl font-semibold hidden md:flex'>Admin Dashboard</h1>  :<h1 className='text-xl font-semibold'>Faculty Leave Management</h1>}
                </div>
                {path === '/dashboard' ?<div className='flex gap-5 items-center pl-0 md:pl-96 ml-0 md:ml-64 '> 
                <img  class="h-12 rounded-full" src={user?.photoURL} />
                <p className='text-xs md:text-base '>{user?.displayName}</p>
                <button className='bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' onClick={signUserOut} >SignOut</button>
                </div>:path === '/admin' ?<div className='flex gap-5 items-center pl-0 md:pl-96 ml-0 md:ml-64 '> 
                <img  class="h-12 rounded-full" src={user?.photoURL} />
                <p className='text-xs md:text-base '>{user?.displayName}</p>
                <button className='bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' onClick={signUserOut} >SignOut</button>
                </div>:<></> }
                <div>

                </div>
            </div>
        </div>
    )
}

export default Navbar