import React from 'react';

function HeroSection() {
  return (
    <div className='relative  w-full h-full bg-primaryBlack bg-[url("/assets/noise.png")] py-32 '>     
     <div className='w-full h-full pt-16 flex flex-col gap-4 container mx-auto px-2 lg:px-16 '>
      <h1 className='text-[45px] lg:text-[80px] leading-[55px] lg:leading-[105px] text-primaryWhite  font-mont-heavy mb-[1.5rem]'>Results focused design & development agency.</h1>
      <p className='text-primaryGrayLight text-[20px] leading-[32px] font-mont  lg:max-w-[60%]'>Extend your team with our high performing specialists or hire us to shape your product from scratch. Either way, we’ll get your product off the ground and build a momentum for your success.</p>
     </div>
    </div>
  )
}

export default HeroSection