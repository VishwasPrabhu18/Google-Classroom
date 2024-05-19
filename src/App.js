import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ArchivedClasses,
  Calender,
  Class,
  Classwork,
  Home,
  Navbar,
  NotFound,
  RightSidebar,
  Settings,
  Stream
} from './components/index.js';

const App = () => {

  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <Router>
      <Navbar setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      <div className='flex pt-16'>
        <div className={`${menuOpen ? "w-1/4" : "w-[72px]"}`}>
          <RightSidebar setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
        </div>
        <div className={`w-full ${menuOpen ? "-ml-12" : "ml-1"} pb-5`}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/calender' element={<Calender />} />
            <Route path='/archived-classes' element={<ArchivedClasses />} />
            <Route path='/settings' element={<Settings />} />
            <Route element={<Class />}>   {/*path='/class/:id' */}
              <Route path="/class/:id" element={<Stream />} />
              <Route path="/class/:id/classwork" element={<Classwork />} />
              <Route path="/class/:id/people" element={<h1>People</h1>} />
            </Route>
            <Route path="/class/:id/announcement-details" element={<h1>People</h1>} />
            <Route path='/assignment/:id' element={<h1>Assignment</h1>} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App