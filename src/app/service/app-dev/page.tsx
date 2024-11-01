import React from 'react'
import Image from 'next/image';

const AppDev = () => {
  return (
    <div className='h-500'>
        <div className='w-1/2 float-left'><h1 className='text-3xl pt-10 pl-10'>Application Development</h1><p className='text-justify p-10'>
        AH Corporation established in mid of 2003, now having more than 5000+ satisfied national and international web hosting and web development clients. Hardworking, continuity, patience and determination is main key of our success.

AH Corporation is providing low cost web hosting and domain registration services all over Pakistan. We have specialized sales and support department which will help you in resolving problems and guide you to a proper and good solution till your satisfaction.

We have well experienced designing and development team which will help you in developing your website which will cover your entire business.

In short, we are providing our customers reliable web hosting and web designing services which will make their presence known on World Wide Web.</p></div>
        <div className='float-left p-14 w-1/2'><Image
      src="/images/app-dev.jpg"
      width={500}
      height={400}
      alt="pic" /></div>
    </div>
  )
}

export default AppDev;