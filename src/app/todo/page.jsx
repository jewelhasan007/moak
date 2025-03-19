"use client"
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { getToDoDB } from './getToDo';
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
<h1>The TODO LISTS</h1>
<div className='grid md:grid-cols-3 gap-10'>
{
    allToDo.map((todo) => (
        <div key={todo._id} className='bg-gray-100'>
            <li >Name: {todo.name}</li>
            <li >Description:{todo.description}</li>
            <li >Date: {todo.date}</li>
            <li > Section: {todo.section}</li>
            <li > Statu: {todo.status}</li>
        </div>
    ))
}
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
                <input  type="text" name='status' placeholder='Pending/ Done' className='input input-bordered' />
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