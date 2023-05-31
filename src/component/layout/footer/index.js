import React from 'react'

const Footer = () => {

const currentYear = new Date().getFullYear();

  return (
    <footer className='w-full text-center mt-[120px] mb-[55px]'>
        <small className='w-max h-max rounded-full px-4 py-[6px] shadow-lg font-normal bg-black text-white text-center'>
        &copy; {currentYear} Dragme. All rights reserved.
        </small>
    </footer>
  )
}

export default Footer
