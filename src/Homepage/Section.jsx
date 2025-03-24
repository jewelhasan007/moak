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
        <div className='grid md:grid-cols-4 gap-10 m-3 '>
          
           {
            allSections?.map((item) => (  
              <div className="card card-dash bg-gray-100 w-76" key={item.title}>
              <div className="card-body">
                <h2 className="card-title text-black"><Link href={item.path}>{item.title}</Link></h2>
                <p className='text-gray-400'>Description</p>
                <div className="card-actions justify-end">
                
                </div>
              </div>
            </div>

          ))
           }
         
        </div>
    );
};

export default Section;