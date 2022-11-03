import React from 'react';
import Image from 'next/image';
import Location from '../public//assets/location.svg'
// import HiOutlineLocationMarker from 'react-icons/hi'

function OfficeCard(props) {
    const {image, title, address} = props;
  return (
    <div className='flex flex-col gap-4'>
        <div>
       <Image src={image} width={500} height={200}/>
        </div>
        <div className='flex gap-8'>
          {console.log(Location)}
        <h1 className='text-4xl'>{title}</h1>
        </div>
        <p>{address}</p>
    </div>
  )
}

export default OfficeCard;