import React from 'react';
import Cart from './cart';
import Cart2 from './Cart2';



const page = () => {
    return (
        <div className='min-h-screen'>
            <h1 className='text-center text-red-400 text-5xl '>The work I did for client.</h1>
            <Cart2></Cart2>
        </div>
    );
};

export default page;