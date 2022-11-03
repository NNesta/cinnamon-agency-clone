import React, {use} from 'react';
import Image from 'next/image';

function ProductDesignCard(props) {
    const {image,tags,title,description} = props;
  return (
    <div className='flex flex-col my-8 gap-4 py-8'>
<div className={`p-4 w-full h-full ${image.imageColor} group`}>
    <Image className='group-hover:scale-105 ease-in-out duration-500' src={image.link} width={2000} height={800} layout='responsive' alt='' />
</div>
<div className='flex gap-4 lg:gap-8 text-primaryGrayAccent text-[0.69rem] font-semibold'>
  {tags.map((tag,index)=><span className='whitespace-nowrap' key= {index}>{tag}</span>)}
</div>
<h1 className='text-3xl text-primaryDark font-mont-bold'>{title}</h1>
<p className='text-primaryGrayDark lg:max-w-[65%] font-mont'>{description}</p>
   
    </div>
  )
}

export default ProductDesignCard