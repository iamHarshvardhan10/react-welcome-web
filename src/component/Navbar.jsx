import React, { useState } from 'react';
import { SiWelcometothejungle } from "react-icons/si";
import { Button } from '../components/ui/button';
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='fixed w-full px-6 md:px-10 py-4 bg-black border-b-2 border-b-gray-400 z-50'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <SiWelcometothejungle className='text-white text-2xl' />
          <h1 className='text-white text-lg'>Welcome</h1>
        </div>

        <div className='hidden md:flex items-center gap-10'>
          <ul className='flex items-center gap-6 lg:gap-10'>
            <li className='text-white cursor-pointer hover:text-gray-300'>Features</li>
            <li className='text-white cursor-pointer hover:text-gray-300'>Pricing</li>
            <li className='text-white cursor-pointer hover:text-gray-300'>Events</li>
            <li className='text-white cursor-pointer hover:text-gray-300'>About</li>
            <li className='text-white cursor-pointer hover:text-gray-300'>Blog</li>
          </ul>
        </div>

        <div className='hidden md:flex items-center gap-5'>
          <span className='text-white cursor-pointer hover:text-gray-300'>Support</span>
          <span className='text-white cursor-pointer hover:text-gray-300'>Login</span>
          <Button className='bg-[#8f34eb] rounded-full px-4 py-2 text-white'>Demo</Button>
        </div>

        <div className='md:hidden'>
          <button onClick={() => setMenuOpen(!menuOpen)} className='text-white text-2xl'>
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      
      {menuOpen && (
        <div className='md:hidden flex flex-col items-center bg-black text-white mt-4 space-y-4 py-4 border-t border-gray-400'>
          <ul className='space-y-4 text-center'>
            <li className='cursor-pointer hover:text-gray-300'>Features</li>
            <li className='cursor-pointer hover:text-gray-300'>Pricing</li>
            <li className='cursor-pointer hover:text-gray-300'>Events</li>
            <li className='cursor-pointer hover:text-gray-300'>About</li>
            <li className='cursor-pointer hover:text-gray-300'>Blog</li>
          </ul>
          <span className='cursor-pointer hover:text-gray-300'>Support</span>
          <span className='cursor-pointer hover:text-gray-300'>Login</span>
          <Button className='bg-[#8f34eb] rounded-full px-4 py-2 text-white'>Demo</Button>
        </div>
      )}
    </div>
  );
};

export default Navbar;