import React from 'react';

const amI = [
    {id:1, "title":"A passionate Digital Marketer", "image": './1.png' },
    {id:2, "title":"Certified Digital Marketer","image": './2.png'},
    {id:3, "title":"Grow Your Business","image": './3.png'},
]

const WhoAmI = () => {


    return (
    
          <div  className='mt-3'>
           
  <h2 className="lg:text-center font-bold text-red-500 text-4xl">
    
    Who am I?
  </h2>
<div className='grid lg:grid-cols-3 lg:place-items-center gap-10 m-3 p-3 '>
             {
            amI.map((item)=>(

                 <div className="card bg-base-100 w-96 shadow-sm ">
  <figure className="px-10 pt-10">
    <img
      src={item.image}
      alt="Shoes"
      className="rounded-xl"
      width='150px'
      height='150px' />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{item.title}</h2>
    

  </div>
</div>
            ))
           }
           </div>
          </div>
     
    );
};

export default WhoAmI;