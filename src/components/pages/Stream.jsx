import React from 'react';
import { GoInfo, GoKebabHorizontal } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { GMeet } from '../../assets';
import AnnouncementCard from '../cards/AnnouncementCard';
import { Announcement } from '../constants/dummyData';
import AnnounceCard from '../cards/AnnounceCard';
import AnnounceLinkCard from '../cards/AnnounceLinkCard';
import VerticalKabab from '../common/VerticalKabab';

const Stream = () => {
  const banner = "bg-gradient-to-r from-fuchsia-500 to-cyan-500";

  return (
    <div className='flex flex-col justify-center mx-10 my-9'>
      {/* Banner */}
      <div className='relative'>
        <div className={`w-full h-60 ${banner} rounded-lg`}>
          <div className='absolute bottom-0 left-0 ml-10 mb-6'>
            <h1 className='text-white text-5xl font-semibold'>Mathematics</h1>
            <span className='text-white text-2xl font-semibold'>8 A</span>
          </div>
          <Link className='absolute bottom-0 right-0 w-10 h-10 hover:bg-slate-300 flex justify-center items-center mr-2 mb-2 rounded-full'>
            <GoInfo className='text-white text-2xl' />
          </Link>
        </div>
      </div>

      {/* Info*/}
      <div className='flex items-start gap-6 my-8 w-full'>
        {/* Gmeeet and Upcomming */}
        <div className='flex flex-col gap-7 w-72'>
          <div className='rounded-lg border border-gray-300 p-4'>
            <div className='flex justify-between items-center gap-6 mb-2'>
              <div className='flex justify-center items-center gap-4'>
                <img src={GMeet} alt="GMeet" className='w-6 h-6' />
                <h1 className='text-black font-semibold'>Meet</h1>
              </div>
              
              <VerticalKabab id={1} />
            </div>
            <button className='bg-blue-600 w-full rounded text-white text-base font-semibold h-8'>Join</button>
          </div>

          <div className='relative rounded-lg border border-gray-300 px-4 pt-4 pb-2'>
            <h1 className='text-base mb-3'>Upcoming</h1>
            <span className='text-gray-300 text-sm'>Woohoo, no work due soon!</span>
            <div className='mt-2 flex justify-end'>
              <button className='hover:bg-slate-100 w-fit px-4 rounded text-blue-500 text-sm font-semibold h-8'>View All</button>
            </div>
          </div>
        </div>

        {/* Announcement and Classwork */}
        <div className='w-full'>
          <AnnouncementCard />

          <div className='flex flex-col gap-4 mt-6'>
            {
              Announcement.map((item, idx) => (
                item.title === "announceLink"
                  ? (
                    <AnnounceLinkCard item={item} />
                  ) : item.title === "announce"
                    ? (
                      <AnnounceCard item={item} />
                    ) : ""
              )
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stream