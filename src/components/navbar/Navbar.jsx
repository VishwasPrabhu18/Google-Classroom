import React from 'react'
import { ClassroomLogo, Profile } from '../../assets/index.js'
import { Link } from 'react-router-dom'
import { FiMenu, FiPlus } from 'react-icons/fi'
import { CgMenuGridO } from 'react-icons/cg'

const Navbar = ({ setMenuOpen, menuOpen }) => {

  return (
    <div className='fixed w-full bg-white z-50'>
      <section className='w-full flex justify-between items-center px-6 py-3'>
        <div className='flex items-center gap-5'>
          <Link className='hover:rounded-full hover:bg-gray-100 w-10 h-10 flex items-center justify-center'>
            <FiMenu className='w-6 h-5' onClick={() => setMenuOpen(!menuOpen)} />
          </Link>
          <div className='flex items-center gap-3 overflow-hidden'>
            <img src={ClassroomLogo} alt="Classroom Logo" className='w-7 h-7' />
            <h2 className='text-black text-[1.375rem] font-normal hover:text-green-600 hover:underline'>Classroom</h2>

            {/* Checking which class is active */}
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <Link className='hover:rounded-full hover:bg-gray-100 w-10 h-10 flex items-center justify-center'>
            <FiPlus className='w-6 h-6 font-thin' />
          </Link>
          <Link className='hover:rounded-full hover:bg-gray-100 w-10 h-10 flex items-center justify-center'>
            <CgMenuGridO className='w-6 h-6' />
          </Link>
          <Link className='hover:rounded-full hover:border hover:border-gray-300 w-10 h-10 flex items-center justify-center'>
            <img src={Profile} alt="" className='w-9 h-9 rounded-full' />
          </Link>
        </div>

      </section>
      <hr />
    </div>
  )
}

export default Navbar