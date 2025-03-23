"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { navItemsDB } from './navItems';


const Navbar = () => {
 const pathname = usePathname();
   const activeColor = '#0070f3';

 const [allSections, setAllSections] = useState([])
  useEffect(()=>{
    const loadSections = async () =>{
    const sections = await navItemsDB();
    setAllSections(sections.services)
    }
    loadSections();  
  },[]);

    return (
<div className="navbar bg-gray-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {
              allSections?.map((item)=>(
                <li key={item.path}><Link style={{color: pathname === `${item.path}` ? activeColor : 'black', textDecoration: pathname === `${item.path}` ? 'underline' : 'none'  }} className='font-bold m-3 hover:text-primary' href={item.path} key={item.path}>{item.title}</Link></li>
              ))
             }
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">CCDL VRM EE</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {
              allSections?.map((item)=>(
                <li key={item.path}><Link style={{color: pathname === `${item.path}` ? activeColor : 'black', textDecoration: pathname === `${item.path}` ? 'underline' : 'none'  }} className='font-bold m-3 hover:text-primary' href={item.path} key={item.path}>{item.title}</Link></li>
              ))
             }
             </ul>
  </div>




  <div className="navbar-end">

  {/* Add Task Modal */}
  <div className='mr-3'>
      {/* The button to open modal */}
      <label htmlFor="my_modal_6" className="btn btn-primary ">
        Add Task
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
        <div className="modal-action">
            <label htmlFor="my_modal_6" className="btn">
              Close!
            </label>
          </div>
          <div className="flex flex-col items-center">
                     {/* ADD TASK */}
            <fieldset className=" fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
              <legend className="fieldset-legend">Add Task</legend>

<label className="floating-label">
                <input type="text" placeholder="Task Name" className="input input-md" />
               <span>Task Name</span>
              </label>
              <label className="floating-label">
                <input type="text" placeholder="Task Name" className="input input-md" />
               <span>Task Name</span>
              </label>
              <label className="floating-label">
                <input type="text" placeholder="Task Name" className="input input-md" />
               <span>Task Name</span>
              </label>
              <label className="floating-label">
                <input type="text" placeholder="Task Name" className="input input-md" />
               <span>Task Name</span>
              </label>
              <label className="floating-label">
                <input type="text" placeholder="Task Name" className="input input-md" />
               <span>Task Name</span>
              </label>

              

              <button className="btn btn-neutral mt-4">ADD TASK</button>
            </fieldset>
          </div>
          
        </div>
      </div>
    </div>
  {/* Login Button */}
  <div>
  <a className="btn">Login</a>
</div>
  </div>
</div>
    );
};


export default Navbar;