import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import WhoAmI from './WhoAmI';

const HomePage = () => {
    return (
        <div>
       {/* Title  */}
            <div >
                 <h1 className='text-red-500 text-7xl p-3 text-center '>Grow your business.</h1>
                <div className='lg:flex justify-around'>              
                <div className='space-y-5'>    
                <h1>Hi! I am Mawsumi Akter</h1>
                <h1 className='text-7xl'>Digital Marketer</h1>
                <p>Providing Digital Services To Companies All Across The World</p>
                <button className='btn btn-primary outline-orange-400 outline mb-3'><Link href='./contact'> Hire Me</Link></button>
               </div>
               <div>
              <div>
                  <Image 
                src='/banner.jpg'
                width={400}
                height={400}
                alt='banner image'
                ></Image>
              </div>
               </div>
                </div>
              
               
                <WhoAmI></WhoAmI>
            
            </div>
        </div>
    );
};

export default HomePage;