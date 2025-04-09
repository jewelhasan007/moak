"use client"
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const Profile = () => {
    const session = useSession();
    console.log(session.data.user.name)
    return (
        <div>
<div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            <span className='font-bold'>User's Name:</span> {session.data.user.name}
            
          </a>
        </li>
        <li>
          <a className="justify-between">
            <span className='font-bold'>Email:</span> {session.data.user.email}
            
          </a>
        </li>
        {/* <li onClick={()=> signOut()}><a><button className='btn btn-sm btn-primary'>Logout</button></a></li> */}
       <button onClick={()=> signOut()} className='btn btn-sm btn-primary'>Logout</button>
      </ul>
    </div>
  </div>
   
    );
};

export default Profile;