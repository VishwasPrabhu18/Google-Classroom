import React, { useState } from 'react';
import TextField from "@mui/material/TextField";
import { FaRemoveFormat, FaBold, FaItalic, FaUnderline, FaListUl } from "react-icons/fa";

const TextEditor = ({ comments, setComments }) => {

  const [isActive, setIsActive] = useState(false);
  const [bgChange, setBgChange] = useState(false);

  const handleChange = (event) => {
    setComments(event.target.value);
  }

  return (
    <div className='flex flex-col'>
      <TextField
        id="filled-multiline-flexible"
        label="Announce something to your class"
        multiline
        minRows={5}
        maxRows={10}
        variant="filled"
        onChange={handleChange}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        onMouseEnter={() => setBgChange(true)}
        onMouseLeave={() => setBgChange(false)}
        value={comments}
      />
      <div className={`w-full ${!bgChange ? "bg-[#f1f1f1]" : "bg-[#E8E8E8]"} h-5 ${isActive ? "border-b-2 border-blue-500" : "border-b border-black"} -mt-1 z-50 flex justify-start items-center gap-5 px-3 py-4`}>
        <FaBold />
        <FaItalic />
        <FaUnderline />
        <FaListUl />
        <FaRemoveFormat />
      </div>
    </div>
  )
}

export default TextEditor