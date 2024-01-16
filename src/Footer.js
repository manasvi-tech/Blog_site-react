import React from 'react'

const Footer = () => {
  const today = new Date();
  return (
    <main className='Footer'>
      <p>Copyright &copy; {today.getFullYear()}</p>
    </main>
  )
}

export default Footer