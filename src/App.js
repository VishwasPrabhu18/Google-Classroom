import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ArchivedClasses, Calender, Home, Navbar, NotFound, RightNavbar, Settings } from './components/index.js';

const App = () => {
  
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <Router>
      <Navbar setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      <div className='flex pt-16'>
        <div className={`${menuOpen ? "w-1/4" : "w-[72px]"}`}>
          <RightNavbar setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
        </div>
        <div className={`${menuOpen ? "w-full -ml-2" : "ml-24"} pb-5`}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/calender' element={<Calender />} />
            <Route path='/archived-classes' element={<ArchivedClasses />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/class/:id' element={<h1>Class</h1>} />
            <Route path='/assignment/:id' element={<h1>Assignment</h1>} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App