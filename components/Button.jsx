import React from 'react'

function Button({children}) {
  return (
       <button className='text-primaryWhite font-mont bg-primaryPink hover:text-primaryPink hover:bg-primaryWhite border-2 border-primaryPink  duration-400 ease-in-out px-4 py-2'>
        {children}
        </button> 
  )
}

export default Button