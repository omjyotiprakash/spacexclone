// eslint-disable-next-line no-unused-vars
import React from 'react'

const Footer = () => {
  return (
    <div className='w-screen bg-linear-to-t from-[black]/10 to-transparent px-10 py-5 flex items-center justify-between'>

      <div className='w-12 h-12 bg-[#181819] rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-all duration-200'>
        <span className='text-white text-xs font-bold'>X</span>
      </div>

      <ul className='flex items-center gap-10 uppercase text-[11px] tracking-widest text-white/70'>
        <li className='cursor-pointer hover:text-white transition-colors duration-200'>Careers</li>
        <li className='cursor-pointer hover:text-white transition-colors duration-200'>Updates</li>
        <li className='cursor-pointer hover:text-white transition-colors duration-200'>Privacy Policy</li>
        <li className='cursor-pointer hover:text-white transition-colors duration-200'>Suppliers</li>
        <li className='cursor-pointer hover:text-white transition-colors duration-200'>Investors</li>
      </ul>

      <p className='text-white/70 text-[11px] uppercase tracking-widest'>© 2026 SpaceX</p>

    </div>
  )
}

export default Footer