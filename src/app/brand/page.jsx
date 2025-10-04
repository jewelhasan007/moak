import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
      <div className='bg-white'>
          <div className='relative flex'>
                                              <h1 className='font-bold text-5xl m-5 p-3'>BRAND</h1>
                                              <h2 className='text-black text-4xl font-serif m-5 p-3'>Identify</h2>
      
                                             </div>
                                              
              <div className='flex m-3 p-3 space-y-4 rounded-md bg-white  '>
      
                                             <div className='w-2/5 right-0 flex items-center justify-center '>
                                             <Image className='  rounded-2xl overflow-hidden border-2 text-end'
                                             src='/banner26.jpg'
                                            width={550}
                                             height={550}
                                             alt='banner image'
                                             ></Image>
                      
                                             </div>
                                             <div className='w-3/5 left-0 flex items-center justify-center '>
                                             <Image className=' rounded-2xl overflow-hidden border-2'
                                             src='/banner27.jpg'
                                             width={650}
                                             height={650}
                                             alt='banner image'
                                             ></Image>
                      
                                             </div>
                                            
                                      
                                        </div>
      </div>
    );
};

export default page;