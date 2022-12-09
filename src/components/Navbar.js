import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ navHandler }) => {

  return (
    <div class={`flex justify-between items-center bg-white py-4 px-5 md:px-16 text-sm md:text-xl lg:text-2xl font-semibold`}>
        <Link to="/" onClick={() => navHandler("home")} className='transition duration-500 hover:scale-[1.1] text-base md:text-2xl lg:text-3xl text-lime-500 font-bold'>Mike Wazowski</Link>
        <div>
          <Link to="/" onClick={() => navHandler("home")} className="px-3 transition duration-500 hover:scale-[1.1]">about</Link>
          <Link to="/" onClick={() => navHandler("projects")} className="px-3 transition duration-500 hover:scale-[1.1]">projects</Link>
        </div>
        <a href='https://twitter.com/monstersinc?lang=en' target='_blank' className='flex transition duration-500 hover:scale-[1.1]'>contact</a>
    </div>
  )
}

export default Navbar;