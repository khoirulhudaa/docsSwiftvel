import React from 'react'
import { useNavigate } from 'react-router-dom';

const Footer = () => {

  const navigate = useNavigate()

const currentYear = new Date().getFullYear();

  return (
    <footer className='w-full lg:flex items-center px-10 justify-between text-center h-max py-8 bg-darkMongo'>
        <small className='font-normal text-white text-center'>
        &copy; {currentYear} Dragme. All rights reserved.
        </small>
        <div className='text-white hidden lg:flex items-center'>
          <small onClick={() => navigate('/contributors')} className='hover:brightness-[90%] cursor-pointer mr-8 font-normal'>Contributors</small>
          <small onClick={() => navigate('/privacy-policy')} className='hover:brightness-[90%] cursor-pointer mr-8 font-normal'>Privacy policy</small>
          <small onClick={() => navigate('/terms-of-service')} className='hover:brightness-[90%] cursor-pointer font-normal'>Terms of service</small>
        </div>
    </footer>
  )
}

export default Footer
