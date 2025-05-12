"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import React, { useEffect, useState } from "react";


const Navbar = () => {

  const activeColor = "#0070f3";
    const pathname = usePathname();
  const [allSections, setAllSections] = useState([]);
  useEffect(() => {
    const loadSections = async () => {
    
      const sections = await fetch('./navItems.json');
      const data = await sections.json();
      console.log(data.allSections)
      setAllSections(data.allSections);
    };
    loadSections();
  }, []);

  return (
    <div className="navbar bg-gray-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
         
        
        {allSections?.map((itemSmall) => (
          <li key={itemSmall.id}>
            <Link
              style={{
                color: pathname === `${itemSmall.path}` ? activeColor : "black",
                textDecoration:
                  pathname === `${itemSmall.path}` ? "underline" : "none",
              }}
              className="font-bold m-3 hover:text-primary"
              href={itemSmall.path}
              
            >
              {itemSmall.title}
            </Link>
          </li>
        ))} 

           
          </ul>
        </div>
       <button className="btn btn-sm btn-outline btn-primary"> <Link href="/">Moushumi Akter</Link></button>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-sm menu-horizontal px-1 ">
        
        {allSections?.map((item) => (
          <li key={item.id}>
            <Link
              style={{
                color: pathname === `${item.path}` ? activeColor : "black",
                textDecoration:
                  pathname === `${item.path}` ? "underline" : "none",
              }}
              className="font-bold m-3 hover:text-primary"
              href={item.path}
            
            >
              {item.title}
            </Link>
          </li>
        ))}
        </ul>
      </div>

      <div className="navbar-end">


        {/* Login Button */}
        <div>
        {/* <button className="btn btn-sm btn-outline btn-primary"> <Link href="/">Login</Link></button> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
