import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
      <div className='bg-white flex items-center justify-center '>
    
            <Image className=' rounded-2xl overflow-hidden border-2 text-end'
                                             src='/banner28.jpg'
                                            width={950}
                                             height={950}
                                             alt='banner image'
                                             ></Image>
                                            
                                 
      </div>
    );
};

export default page;