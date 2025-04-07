"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { navItemsDB } from "./navItems";
import { toast } from "react-toastify";
import FormModal from "./modal-form/FormModal";
import Profile from "./Profile";


const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const activeColor = "#0070f3";
const [modalClose, setModalClose] = useState(false);
  const [allSections, setAllSections] = useState([]);
  useEffect(() => {
    const loadSections = async () => {
      const sections = await navItemsDB();
      setAllSections(sections.services);
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
            {allSections?.map((item) => (
              <li key={item.path}>
                <Link
                  style={{
                    color: pathname === `${item.path}` ? activeColor : "black",
                    textDecoration:
                      pathname === `${item.path}` ? "underline" : "none",
                  }}
                  className="font-bold m-3 hover:text-primary"
                  href={item.path}
                  key={item.path}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
       <button className="btn btn-sm btn-outline btn-primary"> <Link href="/">CCDL VRM EE</Link></button>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-sm menu-horizontal px-1 ">
          {allSections?.map((item) => (
            <li key={item.path}>
              <Link
                style={{
                  color: pathname === `${item.path}` ? activeColor : "black",
                  textDecoration:
                    pathname === `${item.path}` ? "underline" : "none",
                }}
                className="font-bold m-3 hover:text-primary"
                href={item.path}
                key={item.path}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end">
      
{/* Add Modal Form*/}
<FormModal ></FormModal>

    {
    pathname === "/" ? <Link href={'/login'}><button className="btn btn-sm btn-primary">Login</button></Link> : <Profile></Profile>
  }  

        {/* Login Button */}
        <div>
        {/* <button className="btn btn-sm btn-outline btn-primary"> <Link href="/">Login</Link></button> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
