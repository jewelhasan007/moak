"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";


const Navbar = () => {

  const activeColor = "#d62976";
    const pathname = usePathname();
  const [allSections, setAllSections] = useState([]);
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleDropdownClose = () => {
    setIsDropdownOpen(false);
  }


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
    <div className="navbar bg-gray-200 shadow-sm fixed">
      <div className="navbar-start">
        <div className={` ${isDropdownOpen ? 'dropdown' : ''}`}>
          <div onClick={handleDropdownToggle} tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
        {
          isDropdownOpen && (
            <ul
              onClick={handleDropdownClose}
              className="menu-md dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {allSections?.map((item) => (
                <li key={item.id} className="px-3">
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
          )
}  
        </div>
      
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-md menu-horizontal ">
        
        {allSections?.map((item) => (
          <li key={item.id}  >
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
