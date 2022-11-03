import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';


function Footer() {
  return (
    <div className='relative  w-full h-full bg-primaryBlack bg-[url("/assets/noise.png")]'> 
    <div className='container mx-auto px-12 lg:px-16 text-primaryWhite pt-32'>
      <div className='flex flex-col lg:flex-row gap-8 lg:justify-between max-w-[60%] lg:max-w-[80%] px-4 py-8 '>
      <h1 className='text-5xl font-bold'>CINNAMON</h1>
      <h1 className='text-5xl font-semibold'>All software, zero bullshit.</h1>
      </div>
      <div className='grid lg:grid-cols-5 gap-8 text-xl'>
        <div className='col-span-2'>
          <h1 className='font-medium py-8'>Home</h1>
        <ul className='lg:flex flex-col gap-6 flex-1 grid grid-cols-2'>
        
      <li>Projects</li>
      <li>Services</li>
      <li>About Us</li>
      <li>Careers</li>
      <li>Blog</li>
      </ul>
        </div>
        <div className='flex flex-col gap-4'>
          <h1 className='text-lg font-medium py-8'>Zagreb</h1>
          <ul className='flex flex-col gap-6'>
            <li>Slavonska avenija 6,</li>
            <li>10000, Zagreb, Croatia</li>
            <li>+385 99 347 3103</li>
          </ul>
        </div>
        <div className='flex flex-col gap-4'>
          <h1 className='text-lg font-medium py-8'>New York</h1>
          <ul className='flex flex-col gap-6'>
            <li>500 7th Ave, New York,</li>
            <li>NY 10018, United States</li>
          </ul>
        </div>
        <div className='flex flex-col gap-4'>
          <h1 className='text-lg font-medium py-8'>Belgrade</h1>
          <ul className='flex flex-col gap-6'>
            <li>Bulevar vojvode Mišića 37</li>
            <li>11000, Belgrade, Serbia</li>
          </ul>
        </div>

      </div>
      <div className='flex flex-col lg:flex-row lg:justify-between lg:items-end py-8 gap-8'>
     <p className='underline order-3 lg:order-1'>hello@cinnamon.agency</p>
     <div className='flex flex-col gap-8 order-1 lg:order-2 '>
        <h1>Our newsletter</h1>
        <input type='text'/>
    <Button>Subscribe</Button>
      </div>
     <div className="flex flex-col gap-4 order-2 lg:order-3">
     <Image src='/assets/pangea.svg' width={70} height={35}/>
     <Image src='/assets/clutch.webp' width={70} height={35}/>
      </div>
      </div>
        <div className='flex lg:flex-row flex-col lg:justify-between'>
        <div className='flex order-2 lg:order-1'>
     <p>© 2022 Cinnamon</p>
     <Link className='flex-1' href='/'>Privacy Policy</Link>  
     </div>
        <div className='flex gap-4 items-center order-1 lg:order-2'>
     <Image src='/assets/linkedin-2.png' width={25} height={25}/>
     <Image src='/assets/ball-2.png' width={25} height={25}/>
     <Image src='/assets/beicon.png' width={25} height={25}/>
     <Image src='/assets/insta-2.png' width={25} height={25}/>
     <Image src='/assets/face-2.png' width={25} height={25}/>
     <Image src='/assets/wifi.png' width={25} height={25}/>
      </div>
        </div>
        
     {/* <div className='w-full h-full grid lg:grid-cols-3 gap-32  border-b border-primaryWhite'>
    <div className='flex flex-col gap-8'>
      <h1 className='text-5xl font-bold'>CINNAMON</h1>
      
     <p className='underline'>hello@cinnamon.agency</p>
    </div>
    <div className='col-span-2 flex flex-col justify-between'>
      <div className="grid grid-cols-3 gap-8">
        <div className='flex flex-col gap-4'>
          <h1>Zagreb</h1>
          <ul className='flex flex-col'>
            <li>Slavonska avenija 6,</li>
            <li>10000, Zagreb, Croatia</li>
            <li>+385 99 347 3103</li>
          </ul>
        </div>
        <div className='flex flex-col gap-4'>
          <h1>New York</h1>
          <ul className='flex flex-col'>
            <li>500 7th Ave, New York,</li>
            <li>NY 10018, United States</li>
          </ul>
        </div>
        <div className='flex flex-col gap-4'>
          <h1>Belgrade</h1>
          <ul className='flex flex-col'>
            <li>Bulevar vojvode Mišića 37</li>
            <li>11000, Belgrade, Serbia</li>
          </ul>
        </div>
      </div>

     <div className='grid grid-cols-2 justify-between'>
      <div className='flex flex-col gap-2'>
        <h1>Our newsletter</h1>
        <input type='text'/>
    <Button/>
      </div>
      <div className="flex flex-col gap-4">
     <Image src='/assets/pangea.svg' width={70} height={35}/>
     <Image src='/assets/clutch.webp' width={70} height={35}/>
      </div>

     </div>
    </div>
      </div>
      <div className='flex'>
     <p>© 2022 Cinnamon</p>
     <Link className='flex-1' href='/'>Privacy Policy</Link>
     <div className='flex gap-4 items-center'>
     <Image src='/assets/linkedin-2.png' width={25} height={25}/>
     <Image src='/assets/ball-2.png' width={25} height={25}/>
     <Image src='/assets/beicon.png' width={25} height={25}/>
     <Image src='/assets/insta-2.png' width={25} height={25}/>
     <Image src='/assets/face-2.png' width={25} height={25}/>
     <Image src='/assets/wifi.png' width={25} height={25}/>
      </div></div> */}

    </div></div>  
  )
}

export default Footer