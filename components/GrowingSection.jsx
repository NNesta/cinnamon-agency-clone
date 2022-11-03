import React from 'react';
import Image from 'next/image';
import Button from './Button';

function GrowingSection() {
  return (
    <div className='relative  w-full h-full bg-primaryBlack bg-[url("/assets/noise.png")] py-32'>     
    <div className='w-full h-full pt-16 grid lg:grid-cols-2 gap-40 container mx-auto px-16 text-primaryWhite'>
     <div className="flex flex-col items-start gap-8">
        <h1 className='text-6xl font-bold'>We’re growing</h1>
        <p>Jump on board with Cinnamon and get the privilege of working on challenging projects for leading global companies! Make the world a better, more connected place.</p>
    <Button>See All Positions</Button>
     </div>
     <div className="flex flex-col gap-8">
        <div className="flex justify-between">
            <h2 className='text-xl'>Android Developer</h2>
            <Image src='/assets/whiteArrow.png' width={50} height={25} alt=''/>
        </div>
        <div className="flex justify-between">
            <h2 className='text-xl'>Android Developer</h2>
            <Image src='/assets/whiteArrow.png' width={50} height={25} alt=''/>
        </div>
        <div className="flex justify-between">
            <h2 className='text-xl'>Backend Development Team Lead</h2>
            <Image src='/assets/whiteArrow.png' width={50} height={25} alt=''/>
        </div>
     </div>
        </div>

    </div>
  )
}

export default GrowingSection