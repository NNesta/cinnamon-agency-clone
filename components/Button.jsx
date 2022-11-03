import React from 'react'

function Button({children}) {
  return (
    <div>
       <button className='text-primaryWhite bg-primaryPink hover:text-primaryPink hover:bg-primaryWhite border-2 border-primaryPink  duration-400 ease-in-out px-4 py-2 w-full'>
        {children}
        </button> 
    </div>
  )
}

export default Button