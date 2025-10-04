import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div className='grid lg:grid-cols-3 lg:place-items-center gap-10 m-3 p-3 space-y-4 rounded-md bg-gray-100 '>
                                   
                                      <div className='p-2 w-full '>
                                         <Image className=' rounded-2xl overflow-hidden border-2'
                                       src='/banner14.jpg'
                                       width={350}
                                       height={350}
                                       alt='banner image'
                                       ></Image>
                                      
                                     </div>
                                       <div className='w-full'>
                                      <Image className=' rounded-2xl overflow-hidden border-2'
                                       src='/banner15.jpg'
                                       width={350}
                                       height={350}
                                       alt='banner image'
                                       ></Image>
                                      
                                       </div>
                                       <div className='w-full'>
                                       <Image className=' rounded-2xl overflow-hidden border-2'
                                       src='/banner16.jpg'
                                       width={350}
                                       height={350}
                                       alt='banner image'
                                       ></Image>
                
                                       </div>
                                      
                                
                                  </div>
    );
};

export default page;