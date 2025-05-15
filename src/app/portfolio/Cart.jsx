import React from 'react';

const carts = [
    {   "id" : 1,
        "title" : "Keyword Research",
        "description": "Keyword research is the process of identifying and analyzing popular search terms that people enter into search engines to optimize content and improve search rankings.",
        "image" : "./port-key.jpg"
    },
    {   "id" : 2,
        "title" : "Content Creation",
          "description": "Content creation is the process of developing engaging, relevant, and valuable material—such as articles, videos, or graphics—to attract and retain an audience while achieving specific marketing or informational goals.",
        "image" : "./port-content.jpg"
    },
    {   "id" : 3,
        "title" : "Website Audit",
          "description": "A website audit is a comprehensive analysis of a site's performance, SEO, usability, and security to identify issues and opportunities for improvement.",
        "image" : "./port-web.jpg"
    },
    {   "id" : 4,
        "title" : "Social Media Marketing",
          "description": "Social media marketing is the strategic use of social platforms to build brand awareness, engage with audiences, and drive traffic or sales through targeted content and advertising.",
        "image" : "./port-social.jpg"
    },
]

const Cart = () => {
    return (
        <div className='m-3 p-3 lg:grid grid-cols-2 gap-10'>
     {

        carts.map((cart) => (

                    <div key={cart.id} className="card bg-base-100 image-full w-96 shadow-sm">
  <figure>
    <img
      src={cart.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{cart.title}</h2>
    <p>{cart.description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Details...</button>
    </div>
  </div>
</div>
        ))
    } 

  
        </div>
    );
};

export default Cart;