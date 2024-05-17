import React from 'react'
import { Link } from 'react-router-dom'

const Tasks = ({ task }) => {
  return (
    <div className='ml-4 text-sm'>
      <Link to={`/assignment/${task.id}`}>
        Due: &nbsp;
        <span className='hover:underline'>{task.title}</span>
      </Link>
    </div>
  )
}

export default Tasks