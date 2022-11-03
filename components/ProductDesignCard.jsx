import React, {use} from 'react';
import Image from 'next/image';

function ProductDesignCard(props) {
    const {image,tags,title,description} = props;
  return (
    <div className='flex flex-col my-8 gap-4 py-8'>
<div className={`p-4 w-full h-full ${image.imageColor} group`}>
    <Image className='group-hover:scale-105 ease-in-out duration-500' src={image.link} width={2000} height={800} layout='responsive'/>
</div>
<div className='flex gap-8 text-primaryGrayAccent text-[0.8rem] font-semibold'>
  {tags.map(tag=><span>{tag}</span>)}
</div>
<h1 className='text-3xl text-primaryDark font-bold whitespace-pre'>{title}</h1>
<p className='text-primaryGrayDark max-w-[65%]'>{description}</p>
   
    </div>
  )
}

export default ProductDesignCard