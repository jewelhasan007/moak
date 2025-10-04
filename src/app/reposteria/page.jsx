import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
       
                 <div className='grid lg:grid-cols-3 lg:place-items-center gap-10 m-3 p-3 space-y-4 rounded-md bg-gray-100 '>
                   
                      <div className='p-2 w-full '>
                         <Image className=' rounded-2xl overflow-hidden border-2'
                       src='/banner7.jpg'
                       width={250}
                       height={250}
                       alt='banner image'
                       ></Image>
                       <h2 className='border rounded-3xl p-3 my-3 bg-black text-white'>Social Media Manager</h2>
                       <div className='bg-gray-200 p-3 rounded-2xl'>
                      <h5 className='font-bold'>Description</h5>
                      <p>A traditional bakery located in Panama City, dedicated to offering its special cold cakes since 1990.</p>
                      <p>After 3 years of management, we have successfully build an active community with more than 46.3k followers.</p>
                       </div>
                       <h2 className='border rounded-3xl p-3 my-3 border-gray-400 text-gray'>@reposteriadora</h2>
                     </div>
                       <div className='w-full'>
                      <Image className=' rounded-2xl overflow-hidden border-2'
                       src='/banner8.jpg'
                       width={250}
                       height={250}
                       alt='banner image'
                       ></Image>
                       <div className='bg-gray-200 p-3 rounded-2xl bg-white'>
                      <h5 className='font-bold'>1.158 Me gusta</h5>
                      <p>reposteriadora Tenemos un neuvo sabor en Reposteria Dora</p>
                      <p>COOKIES & CANDTY</p>
                      <p>Yva pensado especialmente para neustros clientes super fanaticos del chocolate</p>
                      <p>si ultimamentae estabas pensando en pedir un dulce frio peto tambien querias probar algo neufo, esta es la noticia que no sabias que necesitabas</p>
                      <p>Disponsible solo poer pedido en nuestra pagina web minimo 48 horas antes www.reposteriadora.com</p>
                      <p>#reposteriapanama #resposteriadora #reposteria</p>
                       </div>
                       </div>
                       <div className='w-full'>
                       <Image className=' rounded-2xl overflow-hidden border-2'
                       src='/banner10.jpg'
                       width={350}
                       height={350}
                       alt='banner image'
                       ></Image>

                       </div>
                       
                
                  </div>
    );
};

export default page;