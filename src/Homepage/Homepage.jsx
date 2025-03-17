import React from 'react';
import Section from './Section';
import { getSectionsDB } from './getSections';

const Homepage = async() => {
    const sections = await getSectionsDB();

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