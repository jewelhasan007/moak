import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
<div className='bg-gray-100'>
    <div className=' bg-gray-100 relative flex'>
                                        <h1 className='font-bold text-5xl m-5 p-3'>SOCIAL MEDIA</h1>
                                        <h2 className='text-green-600 text-4xl font-serif m-5 p-3'>Creatives ads</h2>

                                       </div>
                                        
        <div className='flex m-3 p-3 space-y-4 rounded-md bg-gray-100 '>

                                       <div className='w-2/5 right-0'>
                                       <Image className=' rounded-2xl overflow-hidden border-2 text-end'
                                       src='/banner17.jpg'
                                      width={250}
                                       height={250}
                                       alt='banner image'
                                       ></Image>
                
                                       </div>
                                       <div className='w-3/5 left-0'>
                                       <Image className=' rounded-2xl overflow-hidden border-2'
                                       src='/banner18.jpg'
                                       width={850}
                                       height={850}
                                       alt='banner image'
                                       ></Image>
                
                                       </div>
                                      
                                
                                  </div>
</div>
       
    );
};

export default page;