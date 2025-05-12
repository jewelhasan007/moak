import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import WhoAmI from './WhoAmI';

const HomePage = () => {
    return (
        <div>
       {/* Title  */}
            <div >
                 <h1 className='text-blue-300 text-7xl p-3 text-center text-shadow-lg/30 '>Grow your business.</h1>
                           
                <div className='space-y-5 px-5'>    
                <h1>Hi! I am Mawsumi Akter</h1>
                <h1 className='text-7xl'>Digital Marketer</h1>
                <p>Providing Digital Services To Companies All Across The World</p>
                <button className='btn btn-primary outline-orange-400 outline mb-3'><Link href='./contact'> Hire Me</Link></button>
               </div>
              
              
              
               
                <WhoAmI></WhoAmI>
            
            </div>
        </div>
    );
};

export default HomePage;