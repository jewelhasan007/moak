import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div className='grid lg:grid-cols-2 lg:place-items-center gap-10 m-3 p-3 space-y-4 rounded-md bg-gray-300 '>
                                                  
                                                     <div className='p-2 w-full '>
                                                        <Image className=' rounded-2xl overflow-hidden border-2'
                                                      src='/banner21.jpg'
                                                      width={550}
                                                      height={550}
                                                      alt='banner image'
                                                      ></Image>
                                                     
                                                    </div>
                                                      <div className='w-full'>
                                                     <Image className=' rounded-2xl overflow-hidden border-2'
                                                      src='/banner22.jpg'
                                                      width={400}
                                                      height={400}
                                                      alt='banner image'
                                                      ></Image>
                                                     
                                                      </div>
                                                     
                                                     
                                               
                                                 </div>
    );
};

export default page;