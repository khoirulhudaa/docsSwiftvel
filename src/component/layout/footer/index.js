import React from 'react'

const Footer = () => {

const currentYear = new Date().getFullYear();

  return (
    <footer className='w-full text-center h-max py-8 bg-darkMongo'>
        <small className='font-normal text-white text-center'>
        &copy; {currentYear} Dragme. All rights reserved.
        </small>
    </footer>
  )
}

export default Footer
