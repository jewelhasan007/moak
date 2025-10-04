import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
       <div>
        <div className='text-center'>
            <h1 className='text-4xl text-blue-600 font-bold m-3 p-4'>facebook ads insights</h1>
        </div>
         <div className='bg-white flex items-center justify-center m-3 '>
            
                    <Image className=' rounded-2xl overflow-hidden border-2 text-end'
                                                     src='/banner30.jpg'
                                                    width={750}
                                                     height={750}
                                                     alt='banner image'
                                                     ></Image>
                   
                  
                                                    
                                         
              </div>
              <div className='bg-white flex items-center justify-center m-3'>
 <Image className=' rounded-2xl overflow-hidden border-2 text-end'
                                                     src='/banner31.jpg'
                                                    width={750}
                                                     height={750}
                                                     alt='banner image'
                                                     ></Image>
              </div>
              <div className='bg-white flex items-center justify-center m-3'>
  <Image className=' rounded-2xl overflow-hidden border-2 text-end'
                                                     src='/banner32.jpg'
                                                    width={750}
                                                     height={750}
                                                     alt='banner image'
                                                     ></Image>
              </div>
       </div>
    );
};

export default page;