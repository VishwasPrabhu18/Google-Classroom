import React from 'react';
import TextField from "@mui/material/TextField"

const TextEditor = () => {
  return (
    <div className='flex flex-col'>
      <TextField
        rows={5}
      />
      <div className='w-full bg-slate-200 h-5 border-b-2 border-black'>
      </div>
    </div>
  )
}

export default TextEditor