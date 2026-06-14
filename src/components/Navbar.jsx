// eslint-disable-next-line no-unused-vars
import React from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri';

const Navbar = () => {
  return (
    <div className='flex items-center justify-around w-screen h-16 fixed top-0 z-50 bg-linear-to-b from-[#172941] to-transparent'>
      <div className='h-full w-[15%] flex items-center justify-center'>
        <img src="/SpaceXLogo.svg" alt="logo" className='w-[65%]' />
      </div>

      <div className='h-full w-[55%] flex items-center justify-center'>
        <ul className='uppercase flex items-center justify-center gap-10 text-[13px] font-semibold text-[#E1E2EB] drop-shadow-lg'>
          <li className='cursor-pointer hover:text-gray-400 transition-colors duration-100'>Vehicles</li>
          <li className='cursor-pointer hover:text-gray-400 transition-colors duration-100'>Human Spaceflight</li>
          <li className='cursor-pointer hover:text-gray-400 transition-colors duration-100'>Starlink</li>
          <li className='cursor-pointer hover:text-gray-400 transition-colors duration-100'>Starshield</li>
          <li className='cursor-pointer hover:text-gray-400 transition-colors duration-100'>xAI</li>
          <li className='cursor-pointer hover:text-gray-400 transition-colors duration-100'>Terafab</li>
          <li className='cursor-pointer hover:text-gray-400 transition-colors duration-100'>Company</li>
          <li className='cursor-pointer hover:text-gray-400 transition-colors duration-100'>Shop</li>
        </ul>
      </div>

      <div className='h-full w-[25%] flex items-center justify-end pr-15'>
        <div className='relative'>
          <button className='flex items-center justify-between w-65 uppercase text-[10px] font-medium text-gray-300 tracking-widest border border-gray-300 px-3 py-1 hover:border-white transition-colors duration-200 cursor-pointer'>
            Upcoming Launches <RiArrowDropDownLine className='text-xl' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar