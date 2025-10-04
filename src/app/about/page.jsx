import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
       
          <div className='grid lg:grid-cols-1 lg:place-items-center gap-10 m-3 p-3 space-y-4 rounded-md bg-gray-400 '>
            <div className='lg:flex place-items-start'>
               <div className='p-2'>
                  <Image className=' w-80 h-80 rounded-2xl overflow-hidden border-2'
                src='/banner6.jpg'
                width={350}
                height={350}
                alt='banner image'
                ></Image>
              </div>
                <div className='space-y-3'>    
                     <h1 className=' justify-around  text-4xl text-white p-1 text-justify font-bold'>About Me</h1>
                     <p className='lg:justify-start  font-bold text-white p-1'>Hi, Im' Mausumi AKhtar</p>
                     <p className='   font-bold text-white p-1'>I'm a passionate digital marketing expert skilled in social media marketing, SEO and online advertising.</p>
                     <p className='   font-bold text-white p-1 '>I help business grow their online presence, generate leads, and increase sales through results-driven strategies.</p>
                     <p className='   font-bold text-white p-1 '>With experience in Facebook Ads, Google Ads and marketing, I create campaigns that are truly effective.</p>
                     <p className='   font-bold text-white p-1 '>My goal is to build a successful digiatal marketing agency and support brands worldwide.</p>
                </div>
            </div>
           </div>
     
        
     
    );
};

export default page;