
import { navItems } from '@/app/component/shared/navItems';
import Link from 'next/link';
import React from 'react';

const Section = () => {
    console.log(navItems)

    return (
        <div className='grid md:grid-cols-3 gap-10 m-3 p-3'>
           {
            navItems.map((item) => (  
                <div className="card card-dash bg-gray-100 w-96" key={item.title}>
                <div className="card-body">
                  <h2 className="card-title"><Link href={item.path}>{item.title}</Link></h2>
                  <p>Description</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary"><Link href={item.path}>Details...</Link></button>
                  </div>
                </div>
              </div>

            ))
           }
        </div>
    );
};

export default Section;