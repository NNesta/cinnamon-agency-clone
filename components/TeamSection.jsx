import React from 'react';
import Button from'./Button';
import Image from 'next/image';

function TeamSection() {
  return (
    <div className='w-screen h-fit bg-gray-100 relative'>
  <div className='absolute right-0 bottom-0 hidden lg:block'>
    <Image src='/assets/agile.png' width={300} height={300} alt=''/>
  </div>
   <div className='container mx-auto w-full  py-40'>
    <div className='grid lg:grid-cols-2 gap-16 px-8 lg:px-16'>
      <h1 className='text-5xl font-mont-bold lg:max-w-[60%] '>Agile team on demand</h1>
      <div className=' lg:hidden block'>
    <Image src='/assets/agile.png' width={600} height={600} alt=''/>
  </div>
      <div className='flex flex-col gap-8 lg:max-w-[75%] items-start'>
        <p className='text-lg font-mont'>By hiring and managing talented people with skills specific to your project, we build you a team that’s accomplished, agile and scalable in both directions.</p>
        <Button>See how it works</Button>
      </div>
    </div>

   </div>
    </div>
  )
}

export default TeamSection