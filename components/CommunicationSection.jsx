import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function CommunicationSection() {
  return (
    <div className='w-fit h-full relative'>
  <p className='text-[175px] font-mont-heavy text-primaryWhite  opacity-25 absolute top-8 left-8'>"</p>
   <div className='container mx-auto w-full  py-32 px-8 lg:px-32'>
    <div className='flex justify-between'>
    <div className='flex flex-col gap-8 max-w-[70%]'>
   <h1 className='text-5xl font-semibold'>They’re consistent, and the communication is good.</h1>
   <p className='max-w-[80%]'>When I have a deadline, they would work extra hours on the weekend and after hours. Cinnamon gives the impression of being a smaller team that’s focused on customers.
</p>
<div className='flex'>
    <div>
  <Image src='/assets/gorin.png' width={25} height={25} alt=''/>
    </div>
    <div>
<h1>Garin Toren,</h1>
   <p>CEO, ping</p>
    </div>
</div>
<div className='flex w-72 justify-between'>
    <Image width={40} height={40} src='/assets/leftArrow.png'/>
    <Image width={40} height={40} src='/assets/rightArrow.png'/>
</div>
    </div>
    <div className='hidden lg:flex flex-col justify-between'>
     <Image width={200} height={200} src='/assets/ping.png'/>
     <div className='flex gap-8 items-center'>
    <Link className='flex gap-4 text-primaryPink' href='/'>
    <img src="/assets/chevronLeft.svg" alt="" />
    <span>VIEW CASE STUDY</span>
    </Link>
     </div>
    </div>
    </div>
    </div>

    </div>
  )
}

export default CommunicationSection