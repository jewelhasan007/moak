import React from 'react';

const amI = [
    {id:1, "title":"Facebook & Instagram Ads", "description":"Facebook and Instagram Ads help businesses reach targeted audiences through engaging visual content on two of the most popular social platforms. With advanced targeting, various ad formats, and real-time analytics, these ads boost brand awareness, drive traffic, and increase sales, making them essential tools for effective digital marketing.", "image": './facebook-instagram.jpg' },
    {id:2, "title":"Google Ads (Search, Display, Shopping, YouTube)", "description":"Google Ads is an online advertising platform that helps businesses reach targeted audiences through search, display, video, and shopping ads. With keyword targeting, flexible budgeting, and real-time analytics, it drives traffic, boosts visibility, and increases conversions, making it an effective tool for businesses to grow online and attract new customers.", "image": './google.jpg' },
    {id:3, "title":"TikTok, LindedIn, Pinterest, Snapchat Ads", "description":"TikTok, LinkedIn, Pinterest, and Snapchat Ads offer unique ways to reach diverse audiences. TikTok engages with short-form video, LinkedIn targets professionals, Pinterest inspires with visual discovery, and Snapchat connects with younger users. Each platform provides tailored ad formats and targeting tools to boost brand visibility, engagement, and conversions effectively.", "image": './tiktalk.jpg' },
    {id:4, "title":"SEO: Search Engine Optimization (On-Page SEO, Off-Page SEO, Technical SEO)", "description":"SEO is a crucial digital marketing service focused on optimizing a website’s online visibility and rankings in search engine results. By employing various techniques such as keyword optimization, content creation, and link building, SEO aims to improve a website’s organic (non-paid) traffic. Businesses invest in SEO to enhance their online presence, drive targeted traffic, and ultimately boost conversions.", "image": './SEO.png' },
    {id:5, "title":"Email Marketing & Automation", "description":"Email Marketing & Automation enables businesses to send targeted, personalized messages to subscribers at the right time. Through automated workflows, it nurtures leads, boosts customer engagement, and increases conversions. With detailed analytics and segmentation, it’s a cost-effective strategy for building strong customer relationships and driving consistent marketing results.", "image": './email.jpg' },
    {id:6, "title":"Content Marketing, Blog writing & Copywriting(Ad & Sales Content)","description":"Content Marketing, Blog Writing, and Copywriting (Ad & Sales Content) focus on creating valuable, persuasive content to attract, engage, and convert audiences. From informative blog posts to compelling ad copy, these strategies build brand authority, drive traffic, and boost sales by delivering the right message to the right audience.","image": './content.jpg'},
    {id:7, "title":"Social Media Marketing(SMM): Organic growth, engagement","description":"Social Media Marketing (SMM) focuses on organic growth and audience engagement across platforms like Facebook, Instagram, LinkedIn, and more. Through consistent posting, community interaction, and strategic content, SMM builds brand awareness, fosters trust, and encourages customer loyalty—driving long-term results without relying solely on paid advertising.","image": './smm.jpg'},
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

                 <div key={item.id} className="card bg-base-100 w-96 shadow-sm  min-h-[400px] ">
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
    <p className='text-justify'>{item.description}</p>

  </div>
</div>
            ))
           }
           </div>
          </div>
     
    );
};

export default page;