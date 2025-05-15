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
const Cart2 = () => {
    return (
        <div className='m-3 p-3 grid lg:grid-cols-2 gap-4 md:gap-6 lg:gap-10'>
              {
     carts.map((cart) => (

        <div key={cart.id}
  className="hero min-h-auto min-w-auto"
  style={{
    backgroundImage:
      `url(${cart.image})`,
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">{cart.title}</h1>
      <p className="mb-5">
        {cart.description}
      </p>
      <button className="btn btn-primary">Details...</button>
    </div>
  </div>
</div>

     ))   
    }
        </div>
    );
};

export default Cart2;