import React from 'react'
import Image from 'next/image';

const Contact = () => {
  return (
    <div className='h-500'>
    <div className='w-1/2 float-left'><h1 className='text-3xl pt-10 p-10'>Contact Details</h1>
    <p className='text-justify p-10'>
    32-Farid Chambers, Abulllah Haroon Road, <br/>Near University Road, Karachi <br/>
    Ph:021-34012491-5 ,<br/>
    email:ahcorporation.com
    </p>
    
    </div>
    <div className='float-left p-20 w-1/2'><Image
  src="/images/map.png"
  width={400}
  height={400}
  alt="pic" /></div>
</div>
  )
}

export default Contact;