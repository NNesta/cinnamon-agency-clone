import React from 'react';
import OfficeCard from './OfficeCard';
import Image from 'next/image';

function OfficeSection() {
    const offices = [
        {
            title: 'Zagreb',
            image: '/assets/office-1.jpeg',
            address: 'Slavonska avenija 6, 10000, Zagreb, Croatia'
        },
        {
            title: 'New York',
            image: '/assets/office-2.jpeg',
            address: '500 7th Ave, New York, NY 10018, United States'
        },
        {
            title: 'Belgrade',
            image: '/assets/office-3.jpeg',
            address: 'Bu'
        }
    ]
  return (

    <div className='container mx-auto w-full'>
        <div className="flex flex-col">
            <h1 className="text-5xl">Our offices</h1>
            <div className="flex  gap-4 relative">
                {/* <div className='absolute top-0 left-0 flex w-[400%] gap-8 snap-none'> */}

             {offices.map((office,index)=><OfficeCard key={index} title={office.title} image={office.image} address={office.address}/>)}
                
        </div>
        <div className='flex gap-8'>
     <div className=''>
      <Image className='hidden' src='/assets/grayLeftArrow.png' width={50} height={25} alt='' />
      <Image src='/assets/rightArrow-2.png' width={50} height={25} alt='' />
     </div>
     <div>
      <Image className='hidden' src='/assets/grayRightArrow.png' width={50} height={25} alt='' />
      <Image src='/assets/leftArrow-2.png' width={50} height={25} alt='' />
     </div>
        </div>
        </div>
        

    </div>
  )
}

export default OfficeSection