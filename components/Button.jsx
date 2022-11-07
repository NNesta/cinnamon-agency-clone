import React from 'react'

function Button({children}) {
  return (
       <button className='text-primaryWhite font-mont bg-primaryPink  border-2 border-primaryPink  duration-1000 ease-in-out px-4 py-2 relative group overflow-hidden'>
        <span className='w-0 aspect-square bg-white -z-0 rounded-full absolute inset-0 -left-[0.35rem] m-auto  group-hover:w-[110%] duration-300 ease-in-out'/>
       <h1 className='group-hover:text-primaryPink relative z-[200]'>{children}</h1> 
        </button> 
  )
}

export default Button