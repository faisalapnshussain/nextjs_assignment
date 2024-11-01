import React from 'react'

const Footer = () => {
  return (
    <div className='ml-8 bg-[slate-600]'>
      <div className='w-72 h-48 bg-sky-800 float-left m-4 text-color-yellow-500 border-2 border-gray-600'>
        <p className='text-white font-extralight font-sans text-justify p-4'>AH Corporation established in mid of 2003, now having more than 5000+ satisfied local and international web hosting and web development clients. Hardworking, continuity, patience and determination is main key of our success.</p>
        </div>
      <div className='w-72 h-48 bg-sky-800 float-left m-4 border-2 border-gray-600 '>
      <ul className='text-white'>
        <li className='font-semibold font-sans mt-2 mx-2'>Our Packages</li>
        <li className='font-extralight font-sans mx-4 py-2'>Economy Web Hosting Packages</li>
        <li className='font-extralight font-sans mx-4 py-2'>Business Web Hosting Packages</li>
        <li className='font-extralight font-sans mx-4 py-2'>Domain Registration</li>
        </ul>
        </div>
      <div className='w-72 h-48 bg-sky-800 float-left m-4 border-2 border-gray-600'>
        <p className='text-white mt-2 mx-2'>Office in Karachi</p>
        <p className='text-white mt-2 mx-4 font-extralight font-sans'>21/3, Sector No. 22, Korangi Industrial Area, Karachi-74900 G.P.O.Box 940
        <br/>Ph:021-3504248
        </p>
      </div>
      <div className='w-72 h-48 bg-sky-800 float-left m-4 text-white border-2 border-gray-600'>Map</div>
    </div>
  )
}

export default Footer;