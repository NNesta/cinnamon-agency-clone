import React from 'react';
import Image from 'next/image';

function ServiceCard(props) {
    const {image, title, description} = props
  return (
    <div className='flex flex-col text-primaryWhite gap-4'>
       <div>
        <Image src={image} width={40} height={40} alt='' />
       </div>
       <h1 className='text-3xl font-mont-bold'>{title}</h1>
       <p className='font-mont'>{description}</p>
    </div>
  )
}

export default ServiceCard