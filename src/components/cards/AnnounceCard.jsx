import React from 'react';
import { VerticalKabab, PdfRender, Comment } from "../index";

const AnnounceCard = ({ item }) => {
  // const content = item.content.replace(' ', '&nbsp;').replace('\n', `${<br />}`);

  return (
    <div className='w-full pt-4 rounded-lg border'>
      <div className='px-7'>
        <div className='flex justify-between items-center'>
          <div className='flex justify-start items-center gap-4'>
            <img src={item.profile} alt="Profile Pic" className='w-10 h-10 rounded-full' />
            <div className='flex flex-col'>
              <h1 className='text-sm font-semibold'>{item.teacher}</h1>
              <span className='text-xs'>{item.date}</span>
            </div>
          </div>
          <VerticalKabab />
        </div>

        <div className='whitespace-pre-line mt-4'>
          <p className='text-sm'>{item.content}</p>
          <div className='my-4'>
            {
              item.attachment[0] && (
                // <img src={item.attachment[0].link} alt="Attachment" className='w-full h-64 object-cover mt-4' />
                <PdfRender pdfUrl={item.attachment[0].link} />
              )
            }
          </div>
        </div>
      </div>
      <div className='py-5 border-t'>
        <Comment />
      </div>
    </div>
  )
}

export default AnnounceCard