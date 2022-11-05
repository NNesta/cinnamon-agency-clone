import React from 'react'

function Button({children}) {
  return (
       <button className='text-primaryWhite font-mont bg-primaryPink  hover:bg-primaryWhite border-2 border-primaryPink  duration-400 ease-in-out px-4 py-2 relative group'>
        <span className='h-4 w-4 bg-white z-50 rounded-full absolute inset-0'/>
       <h1 className='group-hover:text-primaryPink'>{children}</h1> 
        </button> 
  )
}

export default Button