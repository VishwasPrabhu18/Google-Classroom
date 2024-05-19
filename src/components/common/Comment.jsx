import React, { useEffect, useState } from 'react'
import { Profile } from '../../assets';
import { BiSend } from 'react-icons/bi';

const Comment = () => {
  const [comments, setComments] = useState("");
  const [postBtnEnable, setPostBtnEnable] = useState(false);

  useEffect(() => {
    if (comments.length > 4) {
      setPostBtnEnable(true);
    } else {
      setPostBtnEnable(false);
    }
  }, [comments]);

  const handleChange = (e) => {
    setComments(e.target.value);
  }

  return (
    <div className='flex justify-start items-center px-7 w-full gap-4'>
      <img src={Profile} alt="Profile" className='w-8 h-8 rounded-full' />
      
      <div className='w-full flex justify-normal items-center gap-2'>
        <input value={comments} onChange={handleChange} type="text" name="comment" className='w-full h-10 outline-none border border-gray-200 rounded-3xl px-5 text-sm' placeholder='Enter your comment' />
        <BiSend className={`w-7 h-7 ${postBtnEnable ? "text-blue-400 cursor-pointer" : "text-gray-400"}`} />
      </div>
    </div>
  )
}

export default Comment