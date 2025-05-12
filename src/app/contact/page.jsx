import Link from 'next/link';
import React from 'react';
import { IoMdMail } from "react-icons/io";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

const page = () => {
    return (
        <div className='space-y-3 m-3 p-3'>
            <h1 className='text-3xl'>Let’s grow your Business together</h1>
            <h2 className='text-2xl'>Let’s talk about your business branding stratagis?</h2>
            <p className='flex items-center'><IoMdMail className='mr-3 text-2xl'></IoMdMail> Mail: <Link href='mailto:mawsumiakthter661@gmail.com'><span className='text-red-500 mx-2'>mawsumiakthter661@gmail.com</span> </Link> </p>
            <p className='flex items-center'> <FaWhatsapp className='mr-3 text-2xl'></FaWhatsapp>  Whatsapp: <span className='text-green-400 font-bold mx-2'> 01714821830</span>  </p>
            <div className='lg:flex mx-5 text-3xl pt-7'>
                <Link href='https://www.facebook.com/share/19BqTkpi3c/'><FaFacebook className='mx-5 text-[#3b5998]'></FaFacebook></Link>
               <Link href='./'> <FaLinkedin className='mx-5 text-[#0077B5]'></FaLinkedin></Link>
                <Link href='./'> <FaTwitter className='mx-5 text-[#1DA1F2]'></FaTwitter></Link>
               <Link href='https://www.instagram.com/freelancer_mawsumiakter?igsh=MXFvbml5OTMxMmR0aA=='>  <FaInstagram className='mx-5 text-[#d62976]'></FaInstagram></Link>
            </div>
        </div>
    );
};

export default page;