import React from 'react';
import AdidasLogo from "../aspects/adidas-logo.png";

const Navbar = () => {
  return (
    <nav className='w-full h-[70px] flex justify-between align-center px-4 py-1'>
    <img src={AdidasLogo} alt="adidas-logo" className='w-auto h-8 cursor-pointer' />
        <div className='w-[250px]'>
            <ul className=' flex justify-between'>
                <li className='cursor-pointer after:transition-[width]  relative duration-500 ease hover:after:content-[""] hover:after:bg-white hover:after:w-[100%] after:w-0 after:h-0 hover:after:h-[2px] hover:after:absolute hover:after:bottom-0 hover:after:left-0 '>About</li>
                <li className='cursor-pointer after:transition-[width]  relative duration-500 ease hover:after:content-[""] hover:after:bg-white hover:after:w-[100%] after:w-0 after:h-0 hover:after:h-[2px] hover:after:absolute hover:after:bottom-0 hover:after:left-0 '>FAQ</li>
                <li className='cursor-pointer after:transition-[width]  relative duration-500 ease hover:after:content-[""] hover:after:bg-white hover:after:w-[100%] after:w-0 after:h-0 hover:after:h-[2px] hover:after:absolute hover:after:bottom-0 hover:after:left-0 '>Pricing</li>
                <li className='cursor-pointer after:transition-[width]  relative duration-500 ease hover:after:content-[""] hover:after:bg-white hover:after:w-[100%] after:w-0 after:h-0 hover:after:h-[2px] hover:after:absolute hover:after:bottom-0 hover:after:left-0 '>Login</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
