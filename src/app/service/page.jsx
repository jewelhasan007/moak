import React from 'react';

const amI = [
    {id:1, "title":"Search Engine Optimization (SEO)", "description":"SEO is a crucial digital marketing service focused on optimizing a website’s online visibility and rankings in search engine results. By employing various techniques such as keyword optimization, content creation, and link building, SEO aims to improve a website’s organic (non-paid) traffic. Businesses invest in SEO to enhance their online presence, drive targeted traffic, and ultimately boost conversions.", "image": './SEO.png' },
    {id:2, "title":"Social Media Marketing (SMM)","description":"Social Media Marketing involves leveraging social media platforms like Facebook, Instagram, Twitter, and LinkedIn to promote products or services. It encompasses activities such as content creation, community engagement, and paid advertising to reach and connect with a target audience. SMM is in high demand as businesses recognize the importance of building a strong social media presence to foster brand awareness, engage customers, and drive website traffic.","image": './SMM1.png'},
    {id:3, "title":"Pay-Per-Click (PPC)","description":"PPC Advertising involves placing paid advertisements on search engines or other platforms, and advertisers only pay when users click on their ads. Google Ads is a prominent example of a PPC advertising platform. This service is in high demand because it provides a direct and measurable way to drive targeted traffic to a website. Businesses use PPC to increase visibility, generate leads, and achieve specific marketing goals by bidding on relevant keywords and optimizing ad campaigns for maximum return on investment (ROI).","image": './PPC.jpg'},
]
const page = () => {
    return (
      
          <div  className='mt-3 '>
           
  <h2 className="lg:text-center font-bold text-red-500 text-4xl">
    
   Services
  </h2>
<div className='grid lg:grid-cols-3 lg:place-items-center gap-10 m-3 p-3'>
             {
            amI.map((item)=>(

                 <div key={item.id} className="card bg-base-100 w-96 shadow-sm  min-h-[500px] ">
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
    <p>{item.description}</p>

  </div>
</div>
            ))
           }
           </div>
          </div>
     
    );
};

export default page;