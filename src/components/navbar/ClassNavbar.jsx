import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { SiGooglemeet} from "react-icons/si"
import {MdCalendarToday} from "react-icons/md"
import {LiaGoogleDrive} from "react-icons/lia"

const ClassNavbar = () => {

  const [isActive, setIsActive] = useState({
    stream: true,
    classwork: false,
    people: false,
  });

  const handleActive = (name) => {
    setIsActive({
      stream: false,
      classwork: false,
      people: false,
      [name]: true,
    });
  };
  
  return (
    <div className='flex justify-between items-center border-b px-8 overflow-hidden'>
      <div className='flex items-center overflow-y-hidden'>
        <Link to="/class/1" onClick={() => handleActive("stream")} className={`h-12 pt-3 pb-3 px-6 font-medium hover:text-blue-600 hover:bg-gray-200 ${isActive.stream && "bg-blue-100 border-b-4 border-blue-600 text-blue-600"} overflow-hidden`}>
          Stream
        </Link>
        <Link to="/class/1/classwork" onClick={() => handleActive("classwork")} className={`h-12 pt-3 pb-3 px-6 font-medium hover:text-blue-600 hover:bg-gray-200 ${isActive.classwork && "bg-blue-100 border-b-4 border-blue-600 text-blue-600"} overflow-hidden`}>
          Classwork
        </Link>
        <Link to="/class/1/people" onClick={() => handleActive("people")} className={`h-12 pt-3 pb-3 px-6 font-medium hover:text-blue-600 hover:bg-gray-200 ${isActive.people && "bg-blue-100 border-b-4 border-blue-600 text-blue-600"} overflow-hidden`}>
          People
        </Link>
      </div>

      <div className='flex gap-2 items-center'>
        <Link className='w-10 h-10 rounded-full hover:bg-slate-200 flex justify-center items-center'>
          <SiGooglemeet className='w-5 h-5' />
        </Link>
        <Link className='w-10 h-10 rounded-full hover:bg-slate-200 flex justify-center items-center'>
        <MdCalendarToday className='w-5 h-5' />
        </Link>
        <Link className='w-10 h-10 rounded-full hover:bg-slate-200 flex justify-center items-center'>
        <LiaGoogleDrive className='w-6 h-6' />
        </Link>
      </div>
    </div>
  )
}

export default ClassNavbar