"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Tools from './Tools';
import { TypeAnimation } from 'react-type-animation';

const HomePage = () => {
    return (
        <div>
       {/* Title  */}
            <div className='md:flex bg-gray-300'>
                                   
                <div className='m-5 space-y-5 px-5 bg-white'>    
               
                <Image src="/banner3.jpg" width={300} height={300} alt='banner image'></Image>
               <div className='text-center bg-white'>
                 <h1 className='text-2xl'>Hello, I'm Mawsumi Akter</h1>
                <h5>Social Media Manager</h5>
                <p className='font-bold'>BANGLADESH</p>
               </div>
               </div>
            <div className='w-1/3 flex flex-col items-center justify-center space-y-4 p-6 bg-gray-300 rounded-md'>
                <div className=' rounded-md w-full max-w-xs text-center   bg-white'><h1 className='text-3xl  text-blue-400'>+4 years</h1><p className='text-2xl'>of experience in digital marketing</p></div>
                <div className='rounded-md w-full max-w-xs bg-white text-left p-3 '><h1 className='underline text-3xl font-bold'>Tools.</h1> 
                 <Image src="/banner5.jpg" width={300} height={300} alt='banner image'></Image>
                </div>
            </div>
            <div className='w-1/3 flex justify-end'>
               <Image src="/banner4.jpg" width={300} height={300} alt='banner image'></Image>
            </div>
            </div>
        </div>
    );
};

export default HomePage;