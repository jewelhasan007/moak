"use client"
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { getToDoDB } from './getToDo';
import { FaEye, FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import Link from 'next/link';

const page = () => {

    const [allToDo, setAllToDo] = useState([])
    const loadToDo = async() =>{
        const toDoLists = await getToDoDB();
        setAllToDo(toDoLists.res)
       
    }
    console.log('check data from getTODO=',allToDo)

    useEffect(()=>{
        loadToDo()
    },[])


const handleToDo = async (event) =>{
    event.preventDefault();
    const newTodo= {
        name: event.target.name.value,
        description: event.target.description.value,
        date: event.target.date.value,
        section: event.target.section.value,
        status: event.target.status.value,
    }
    console.log(newTodo)
    const resp = await fetch('http://localhost:3000/todo/api', {
        method : "POST",
        body : JSON.stringify(newTodo),
        headers : {
            "content-type" : "application/json"
        }
    })

    const response = await resp?.json();
    toast.success(response?.message)
    event.target.reset() 
    
}

    return (
     <div>
<div>
<div className='grid md:grid-cols-3 gap-10'>
<div   className="overflow-x-auto w-screen rounded-box border border-base-content/5 bg-base-100 m-3 p-3">
  <table className="table ">
    {/* head */}
    <thead>
      <tr>
        <th>Sl. No.</th>
        <th>Task Name</th>
        <th>Description</th>
        <th>Date</th>
        <th>Section</th>
        <th>Status</th>
        <th>Remarks</th>
      </tr>
    </thead>
  
    <tbody>
{
    allToDo.map((todo, index) => (
        <tr key={todo._id}>
        <th>{index+1}</th>
        <td>{todo.name}</td>
        <td>{todo.description}</td>
        <td>{todo.date}</td>
        <td>{todo.section}</td>
        <td className={`text-${todo.status ==='Pending' ? 'red' : 'green'}-400`}>
        {todo.status}</td>
        <td><div className='flex'><Link href={'/'}><FaEye className='text-green-400 mr-3' /></Link>
        <Link href={'/'}><FaRegEdit className='text-blue-400 mr-3' /></Link>
        <Link href={'/'}><RiDeleteBinLine className='text-red-400' /></Link>
        </div></td>
      </tr>

    ))
}
    </tbody>
  </table>
</div>




</div>

</div>
<div>
       
<div className='my-12 bg-slate-300 p-12'>
        <form onSubmit={handleToDo} >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='form-control'>
                <label className='label'>
                <span className='label-text'>Task</span>
                </label>
                <input type="text" name='name' placeholder='Task Name' className='input input-bordered' />
            </div>
            <div className='form-control'>
                <label className='label'>
                <span className='label-text'>Description</span>
                </label>
                <input  type="text" name='description' placeholder='Task Description' className='input input-bordered' />
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='form-control'>
                <label className='label'>
                <span className='label-text'>Date</span>
                </label>
                <input  type="date" name='date' placeholder='Date' className='input input-bordered' />
            </div>
            <div className='form-control'>
                <label className='label'>
                <span className='label-text'>Section</span>
                </label>
                <input  type="text" name='section' placeholder='Section' className='input input-bordered' />
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='form-control'>
                <label className='label'>
                <span className='label-text'>Status</span>
                </label>
                <select name="status" id="">
                <option  value="Pending">Pending</option>
                <option value="Done">Done</option>

                </select>
                
            </div>
            
        </div>
        <button className='btn btn-primary outline my-4'>Add ToDo</button>
        </form>
    </div>
</div>
     </div>
    );
};

export default page;