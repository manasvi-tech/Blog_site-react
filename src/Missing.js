import React from 'react'
import { NavLink } from 'react-router-dom';

const Missing = () => {
  return (
    <main className='Missing'>
      <h2>Page Not Found</h2>
      <p>Well, that's disappointing</p>
      <p>
        <NavLink to ='/'> Visit Our Homepage</NavLink>   {/* app reloads from here */}
      </p>
    </main>
  )
}

export default Missing