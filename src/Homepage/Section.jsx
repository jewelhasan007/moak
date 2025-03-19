"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { getSectionsDB } from './getSections';

const Section =  () => {
const [allSections, setAllSections] = useState([])
const loadSections = async () =>{
  const sections = await getSectionsDB();
  setAllSections(sections.services)
}

useEffect(()=>{
  loadSections()  
},[])

 
    return (
        <div className='grid md:grid-cols-3 gap-10 m-3 p-3 mt-6'>
          
           {
            allSections?.map((item) => (  
              <div className="card card-dash bg-gray-100 w-96" key={item.title}>
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p>Description</p>
                <div className="card-actions justify-end">
                 <Link href={item.path}> <button className="btn btn-primary"> Details... </button></Link>
                </div>
              </div>
            </div>

          ))
           }
         
        </div>
    );
};

export default Section;