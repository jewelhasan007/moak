"use client"
import React from 'react';
import Section from './Section';




const Homepage = () => {
    const handleToDo = async (event) => {
        event.preventDefault();
        const newTodo = {
          name: event.target.name.value,
          description: event.target.description.value,
          date: event.target.date.value,
          section: event.target.section.value,
          status: event.target.status.value,
        };
        console.log(newTodo);
        const resp = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/todo/api`, {
          method: "POST",
          body: JSON.stringify(newTodo),
          headers: {
            "content-type": "application/json",
          },
        });
    
        const res = await resp?.json();
        toast.success(res?.message);
        event.target.reset();
      };
    return (
        <div className='h-screen'>
           <Section></Section>
          
        
        </div>
    );
};

export default Homepage;