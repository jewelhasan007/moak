"use client"

import React, { useEffect, useState } from 'react';
import { getAddTaskDB } from './getAddTask';

const Section =  () => {
// const [allSections, setAllSections] = useState([])
const [allTask, setAllTask] = useState([])

const loadSections = async () =>{
  // const sections = await getSectionsDB();
  const tasks = await getAddTaskDB()
  // setAllSections(sections.services)
  setAllTask(tasks.res)
}

useEffect(()=>{
  loadSections()  
},[])
console.log(allTask)
 
    return (
       <div>

      <div className='mt-3'>
        {/* name of each tab group should be unique */}
<div className="tabs tabs-box">
  <input type="radio" name="my_tabs_6" className="tab" aria-label="All task" />
  <div className="tab-content bg-base-100 border-base-300 p-6">
   
  <div className="overflow-x-auto mt-4">
    <table className="table table-xs">
      <thead className="text-left">
        <tr>
          <th></th>
          <th>Task Name</th>
          <th>Description</th>
          <th>Date</th>            
          <th>Tag</th>
          <th className="text-center">Status</th>
          <th>Remarks</th>
        </tr>
      </thead>
      <tbody className='text-black'>
         {allTask.map((substation, index) => (
          <tr key={substation._id}>
            <th>{index + 1}</th>
            <td>{substation.name}</td>
            <td>{substation.description}</td>
            <td>{substation.date}</td>
            <td >{substation.tag}</td>
            <td
              className={`text-${
                substation.status === "Pending" ? "red" : "green"
              }-400 bg-${substation.status === "Pending" ? "red" : ""}-200 rounded-2xl text-center font-bold`}
            >
              {substation.status}
            </td>
            <td><button className='btn btn-xs outline'>Edit</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
    

  

  </div>

  <input type="radio" name="my_tabs_6" className="tab" aria-label="Tab 2" defaultChecked />
  <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 2</div>

  <input type="radio" name="my_tabs_6" className="tab" aria-label="Tab 3" />
  <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 3</div>
</div>
      </div>

        {/* all section */}
        {/* <div>
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
        </div> */}
       </div>
    );
};

export default Section;