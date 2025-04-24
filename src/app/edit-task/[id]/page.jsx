"use client"

import React, { useEffect } from 'react';
import { useState } from "react";

import { toast } from "react-toastify";

const page =  ({params}) => {
  const unwrappedParams = React.use(params);
const [task, setTask] = useState([])
console.log(unwrappedParams)
const loadTask = async() =>{
const taskDetails = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/edit-task/api/${unwrappedParams.id}`)

const data = await taskDetails.json();
setTask(data.response)

}

useEffect(()=>{
  loadTask();
},[params])
  
console.log(task)
  // const [showModal, setShowModal] = useState(false);
     
      const handleUpdate = async (e) => {
        e.preventDefault();
        const updatedData = {
          name: e.target.name.value,
          description: e.target.description.value,
          date: e.target.date.value,
          section: e.target.section.value,
          status: e.target.status.value,
          tag: e.target.tag.value,
        }
        const resp = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/edit-task/api/${unwrappedParams.id}`,{
          method: "PATCH",
          body : JSON.stringify(updatedData),
          headers: {
            "content-type" : "application/json"
          }
        });
     
        if(resp.status === 200){
          toast.success("Updated Succesfully");
        }
       
        console.log("Form Data Submitted for edit:", updatedData);
             
      };

    return (
      
           <div className='flex justify-center items-center'>
           <form onSubmit={handleUpdate} className="mt-3">
                   <div>
            <label className="floating-lab{task.name}el">
              <input
                type="text"
               
                name="name"
                className="input input-md"
                required
                defaultValue={task.name}
              />
              <span>Task Name</span>
            </label>
          </div>
          <div>
            <label className="floating-label">
              <input
                type="text"
              
                name="description"
                placeholder="Description"
                className="input input-md"
                defaultValue={task.description}
              />
              <span>Description</span>
            </label>
          </div>
          <div>
            <label className="floating-label">
              <input
                type="date"
   
                name="date"
                placeholder="Date "
                className="input input-md"
                defaultValue={task.date}
              />
              <span>Date</span>
            </label>
          </div>
         
          <label className="floating-label">
              <select  name="section"  className="select" defaultValue={task.section}>
              <option  disabled={true}>Plese select the section </option>
                <option>chmc</option>
                <option>civil</option>
                <option>email</option>
                <option>manpower</option>
                <option>mech</option>
                <option>miscellaneous</option>
                <option>note</option>
                <option>overall</option>
                <option>purchase</option>
                <option>reb</option>
                <option>substation</option>
                
              </select>
              <span>Section</span>
            </label>

          <div>
            <label className="floating-label">
              <input
                type="text"
               
              
                name="tag"
                placeholder="Tag"
                className="input input-md"
                defaultValue={task.tag}
              />
              <span>Tag</span>
            </label>
          </div>
          <div>
         
          <label className="floating-label">
              <select  name="status"  className="select" defaultValue={task.status} >
                <option>Pending</option>
                <option>Done</option>
              </select>
              <span>Status</span>
            </label>
     
          </div>

         <div> <button type="submit" className='btn '>ADD TASK</button></div>
        </form>
         
        </div>
    );
};

export default page;