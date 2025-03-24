"use client"
import React from 'react';
import Section from './Section';
import Swal from 'sweetalert2';


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
        const resp = await fetch("http://localhost:3000/todo/api", {
          method: "POST",
          body: JSON.stringify(newTodo),
          headers: {
            "content-type": "application/json",
          },
        });
    
        const response = await resp?.json();
        toast.success(response?.message);
        event.target.reset();
      };
    return (
        <div>
           <Section></Section>
          
        
        </div>
    );
};

export default Homepage;