import React, { useState } from 'react';
import { GoKebabHorizontal } from 'react-icons/go';
import { Link as MUILink, Menu, MenuItem } from '@mui/material';

const VerticalKabab = () => {
  
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <MUILink
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className='hover:bg-blue-50 h-10 w-10 rounded-full flex justify-center items-center ml-4'
      >
        <GoKebabHorizontal className='rotate-90 text-black text-lg ' />
      </MUILink>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}><h1 className='text-sm w-20'>Copy Link</h1></MenuItem>
      </Menu>
    </>
  )
}

export default VerticalKabab