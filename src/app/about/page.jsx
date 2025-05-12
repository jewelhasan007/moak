import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div className='grid lg:grid-cols-1 lg:place-items-center gap-10 m-3 p-3 space-y-4 '>
           <div className='pt-3 border-2xl rounded-3xl w-full shadow-2xl'>

            <div className='lg:flex justify-around'>
                <div className='space-y-3'>
                    
                     <h1 className=' justify-around w-[550px] text-4xl text-pink-500 p-1 text-justify'>My Name is Mawsumi Akter.</h1>
                     <p className=' justify-around w-[550px] text-4xl text-pink-500 p-1 text-justify'> I'm a Digital Marketer Based In Bangladesh And This Is A Selection Of My Poersonal And Professional Work.</p>
                </div>
            
             <div className='p-2'>
                  <Image className=' w-80 h-80 rounded-full overflow-hidden border-pink-500 shadow-pink-500 border-2'
                src='/banner1.jpg'
                width={250}
                height={250}
                alt='banner image'
                ></Image>
              </div>
            </div>
            
           </div>
           
           <div className='lg:flex justify-around'>
                 <p className='font-bold text-justify'>over the past 2 years, I’ve worked with a diverse range of clients, from startups to fortune 5 companies. I love to help businesses grow. I specialize in SEO, content marketing, and social media management, helping brands establish a strong online presence. My approach is all about blending creativity with analytics—optimizing content for both search engines and real people. Whether it’s boosting website traffic, improving conversion rates, or building brand authority, I thriveO on delivering results. Let’s connect and take your digital presence to the next level! </p>
            </div>
        </div>
    );
};

export default page;