import React from 'react'
import Image from 'next/image';

const HomePage = () => {
  return (
    <div className='flex'>
      <div className='w-1/2 flex float-left'><p className='p-14 text-justify'><b>AH Corporation</b> globally Allied Engineering & Services (Pvt.) Ltd. enjoys the sole dealership title of Caterpillar Inc. within the region with which they have successfully capitalized on the existing market, in Pakistan.
in geographically strategic locations within the region i.e.: Lahore, Islamabad, Multan, Faisalabad, Peshawar, and Quetta. The highly trained, capable and qualified engineers are available 24/7 to provide the required support, both during and after the warranty period.

Due to the abundance of gas resources in Pakistan, Caterpillar’s gas generators along with Allied Engineering & Services (Pvt.) Ltd. backup support has emerged as the market leader for baseload applications with more than 60% market share. With new fuel-efficient and longer overhaul interval engines being introduced every year, customers’ are confident that this combination will remain the market’s #1 choice for many years to come.

Allied Vision</p></div>
      <div className='w-1/2 p-14 ' ><Image
      src="/images/main.jpeg"
      width={500}
      height={500}
      alt="pic" /></div>

    </div>
  )
}

export default HomePage;