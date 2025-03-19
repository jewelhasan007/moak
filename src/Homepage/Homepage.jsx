"use client"
import React from 'react';
import Section from './Section';
import Swal from 'sweetalert2';


const Homepage = () => {
     

    return (
        <div>
           <Section></Section>
           <div className=' flex justify-end'>
           <button className='btn btn-primary' >Add Sections</button>
           </div>
        
        </div>
    );
};

export default Homepage;