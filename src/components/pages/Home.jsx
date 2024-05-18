import React from 'react'
import { ClassCard } from '../index';
import { enrolled } from '../constants/dummyData';

const Home = () => {
  return (
    <div className='grid md:grid-cols-3 grid-cols-1 2xl:grid-cols-4'>
      {
        enrolled.map((item) => (
          <ClassCard key={item.id} item={item} />
        ))
      }
    </div>
  )
}

export default Home