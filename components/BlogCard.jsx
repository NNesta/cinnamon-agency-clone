import React from 'react';
import Image from 'next/image';

function BlogCard(props) {
    const {image, category, author,date,time,title} = props;
  return (
    <div className='flex flex-col gap-2 group min-w-full lg:min-w-[30%] '>
       <Image alt='image' src={image} width={400} height={400} layout='responsive'/>
       <p className='font-mont-semibold group-hover:text-primaryPink duration-300'>{category}</p>
       <div className='flex gap-[0.3rem] items-center font-mont'>
       <p className='text-ellipsis overflow-hidden max-w-[11rem] whitespace-nowrap'>{author}</p>
       <span className='w-1 h-1 rounded-full bg-primaryAmber'/>
       <p>{date}</p>
       <span className='w-1 h-1 rounded-full bg-primaryAmber'/>
       <p>{time}min</p>
       </div>
       <h1 className='text-xl font-mont-bold group-hover:text-primaryPink duration-300'>{title}</h1>
    </div>
  )
}

export default BlogCard