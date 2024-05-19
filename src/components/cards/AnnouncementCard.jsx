import React, { useEffect, useState } from 'react';
import { Profile } from '../../assets/index';
import TextEditor from './TextEditor';
import { FaGoogleDrive, FaYoutube, FaUpload, FaLink } from "react-icons/fa"
import { Link } from 'react-router-dom';

const AnnouncementCard = () => {

  const [commentOpen, setCommentOpen] = useState(false);
  const [comments, setComments] = useState("");
  const [postBtnEnable, setPostBtnEnable] = useState(false);

  useEffect(() => {
    if (comments.length > 4) {
      setPostBtnEnable(true);
    } else {
      setPostBtnEnable(false);
    }
  }, [comments]);

  const commentOpenHandler = () => {
    setCommentOpen(!commentOpen);
    setComments("");
  }

  return (
    <div className='flex shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg bg-white px-4 py-3 hover:cursor-pointer'>
      <div onClick={ commentOpenHandler} >

        <div className={`${commentOpen ? "hidden" : ""} flex justify-center items-center gap-2`}>
          <img src={Profile} alt="Profile" className='w-10 h-10 rounded-full mx-2' />
          <span className='text-sm hover:text-blue-400'>Announce something to your class</span>
        </div>
      </div>

      <div className={`${commentOpen ? "" : "hidden"} flex flex-col gap-2 w-full p-2`}>
        <TextEditor comments={comments} setComments={setComments} />

        <div className='flex justify-between items-center'>
          <div className='flex justify-start items-center gap-4 mt-4 ml-2 mb-1'>
            <Link><FaGoogleDrive className='w-10 h-10 p-[10px] text-blue-500 border rounded-full hover:bg-gray-200' /></Link>
            <Link><FaYoutube className='w-10 h-10 p-[10px] text-blue-500 border rounded-full hover:bg-gray-200' /></Link>
            <Link><FaUpload className='w-10 h-10 p-[10px] text-blue-500 border rounded-full hover:bg-gray-200' /></Link>
            <Link><FaLink className='w-10 h-10 p-[10px] text-blue-500 border rounded-full hover:bg-gray-200' /></Link>
          </div>

          <div className='flex items-center gap-4'>
            <button className='text-gray-500 px-3 py-1 rounded-md hover:bg-gray-100' onClick={commentOpenHandler}>Cancel</button>
            <button type='submit' disabled={!postBtnEnable} className={` px-5 py-1 rounded-md ${postBtnEnable ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-gray-200"}`}>Post</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnnouncementCard