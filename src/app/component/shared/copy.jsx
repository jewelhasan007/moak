import React from 'react';

const copy = () => {
    return (
        <div>
            {
              menuItems?.map((item)=>(
                <Link style={{color: pathname === `${item.path}` ? activeColor : 'black', textDecoration: pathname === `${item.path}` ? 'underline' : 'none'  }} className='font-bold m-3 hover:text-primary' href={item.path} key={item.path}>{item.title}</Link>
              ))
             }
        </div>
    );
};

export default copy;