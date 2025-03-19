"use client"
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import {sections} from './navItems'
import { getSectionsDB } from '@/Homepage/getSections';

const Navbar = () => {
 const pathname = usePathname();
   const activeColor = '#0070f3';
const [allSections, setAllSections] = useState([])
const loadSections = async () =>{
  const sections = await getSectionsDB();
  setAllSections(sections.services)
}

useEffect(()=>{
  loadSections()  
},[])

    return (
<div className="navbar bg-base-100 shadow-sm">
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
                <li><Link style={{color: pathname === `${item.path}` ? activeColor : 'black', textDecoration: pathname === `${item.path}` ? 'underline' : 'none'  }} className='font-bold m-3 hover:text-primary' href={item.path} key={item.path}>{item.title}</Link></li>
              ))
             }
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {
              allSections?.map((item)=>(
                <li><Link style={{color: pathname === `${item.path}` ? activeColor : 'black', textDecoration: pathname === `${item.path}` ? 'underline' : 'none'  }} className='font-bold m-3 hover:text-primary' href={item.path} key={item.path}>{item.title}</Link></li>
              ))
             }
             </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    );
};


export default Navbar;