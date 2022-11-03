import React from 'react';
import Image from 'next/image';
import Button from './Button';

function GrowingSection() {
  return (
    <div className='relative  w-screen h-full bg-primaryBlack bg-[url("/assets/noise.png")] py-32'>     
    <div className='w-full h-full pt-16 grid lg:grid-cols-2 gap-40 container mx-auto px-8 lg:px-16 text-primaryWhite'>
     <div className="flex flex-col items-start gap-8">
        <h1 className='text-4xl lg:text-6xl font-mont-bold'>We’re growing</h1>
        <p className='font-mont max-w-[90%]'>Jump on board with Cinnamon and get the privilege of working on challenging projects for leading global companies! Make the world a better, more connected place.</p>
    <Button>See All Positions</Button>
     </div>
     <div className="flex flex-col gap-8 font-mont-semibold text-primaryWhite">
        <div className="flex justify-between items-center py-4 border-b border-primaryWhite bg-opacity-50">
            <h2 className='text-2xl max-w-[80%]'>Android Developer</h2>
            <Image className='hover:-translate-y-2 duration-100 ease-in-out' src='/assets/whiteArrow.png' width={50} height={25} alt=''/>
        </div>
        <div className="flex justify-between items-center py-4 border-b border-primaryWhite bg-opacity-50">
            <h2 className='text-2xl max-w-[80%]'>Android Developer</h2>
            <Image className='hover:-translate-y-2 duration-100 ease-in-out' src='/assets/whiteArrow.png' width={50} height={25} alt=''/>
        </div>
        <div className="flex justify-between items-center py-4 border-b border-primaryWhite bg-opacity-50">
            <h2 className='text-2xl max-w-[80%]'>Backend Development Team Lead</h2>
            <Image className='hover:-translate-y-2 duration-100 ease-in-out' src='/assets/whiteArrow.png' width={50} height={25} alt=''/>
        </div>
     </div>
        </div>

    </div>
  )
}

export default GrowingSection