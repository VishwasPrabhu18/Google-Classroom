import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdBookmarks } from 'react-icons/io';
import VerticalKabab from '../common/VerticalKabab';

const AnnounceLinkCard = ({ item }) => {
  return (
    <div className='flex justify-between items-center border py-4 px-6 rounded-lg hover:bg-blue-100 cursor-pointer'>
      <Link to={`/class/${item.id}/announcement-details`}>
        <div className='flex justify-start items-center gap-4'>
          <div className='w-10 h-10 rounded-full bg-blue-500 flex justify-center items-center'>
            <IoMdBookmarks className='w-6 h-6 text-white' />
          </div>
          <div className='flex flex-col'>
            <h1 className='text-sm font-semibold'>{item.teacher} posted a new {item.type} : {item.topic}</h1>
            <span className='text-gray-400 text-xs'>{item.date}</span>
          </div>
        </div>
      </Link>

      <div className='relative'>
        <VerticalKabab id={1}/>
      </div>
    </div>
  )
}

export default AnnounceLinkCard