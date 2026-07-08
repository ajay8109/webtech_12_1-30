import React from 'react'

function Navbar() {
  return (
    <>
      
      <nav className='bg-gray-900 text-white px-8 py-4 flex  justify-between items-center border-2 border-red-300 '>
       <span>Debugshala</span>
       <ul className='flex gap-8 text-sm font-medium '>
        <li className='hover: text-blue '>Home</li>
        <li className='hover: text-blue'>Contact</li>
        <li className='hover: text-blue'>About</li>
        
       </ul>


      </nav>
    
    </>
  )
}

export default Navbar