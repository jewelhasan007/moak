import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HomePage = () => {
    return (
        <div>
       {/* Title  */}
            <div >
                <div className='flex justify-between'>
                <div className='space-y-5'>
                <h1>Hi! I am Moushumi Akter</h1>
                <h1 className='text-7xl'>Digital Marketer</h1>
                <p>Providing Digital Services To Companies All Across The World</p>
                <button className='btn btn-primary outline-orange-400 outline'><Link href='./contact'> Hire Me</Link></button>
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
               
            </div>
        </div>
    );
};

export default HomePage;