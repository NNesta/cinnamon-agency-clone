import React from 'react';
import Image from 'next/image';
import Button from './Button';

function WhoAreWe() {
  return (
    <div className='w-full h-fit bg-primaryWhite py-52'>
      <div className='relative'>
        <div className='absolute right-0 top-0 hidden lg:block'>
      <Image src='/assets/who.png' width={300} height={300} alt=''/>
    </div>
    <div className='container mx-auto grid lg:grid-cols-2 gap-4 '>
          <div className='flex flex-col gap-16  px-8 lg:px-[7.5rem] items-start'>
            <h1 className='text-6xl font-mont-semibold text-primaryDark'>Who we are</h1>
            <p className=' text-primaryGrayDark'>Meet our international teams made up of 86 innovators, branched into 8 departments, that influence the market throughout 20 different countries.</p>
             <ul className='grid grid-cols-2 gap-4 font-semibold text-lg'>
           <li>Product design</li>
           <li>Web development</li>
           <li>Mobile development</li>
           <li>Quality assurance</li>
           <li>Marketing</li>
           <li>Project management</li>
           <li>Human resources</li>
           <li>Sales</li>
           <li>Fluffy friends</li>
             </ul>
           <Button>Read About Us</Button>
          </div>
<div className='block lg:hidden'>
<Image src='/assets/who.png' width={600} height={600} alt=''/>

</div>
         </div>
      </div>
    
         
    </div>
  )
}

export default WhoAreWe