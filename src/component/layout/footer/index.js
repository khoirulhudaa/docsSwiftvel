import React from 'react';
import { useNavigate } from 'react-router-dom';
import G1 from '../../../assets/images/png/g1.png';
import G2 from '../../../assets/images/png/g2.png';
import G3 from '../../../assets/images/png/g3.png';

const Footer = () => {

  const navigate = useNavigate()

const currentYear = new Date().getFullYear();

  return (
    <footer className='w-full lg:flex items-center px-10 justify-between text-center h-max py-8 bg-darkMongo'>
        <small className='font-normal text-white text-center'>
        &copy; {currentYear} Swiftvel. All rights reserved.
        </small>
        <div className='text-white hidden lg:flex items-center'>
          <p className='text-white font-normal relative top-2 mr-6'>Contributors</p>
          <div className='flex items-center'>
              <a href="https://github.com/khoirulhudaa" title="owner swiftvel" target='__blank'>
                  <div className='w-[30px] rounded-full h-[30px] overflow-hidden'>
                      <img src={G2} alt="img" className='w-full h-auto cursor-pointer hover:brightness-[90%] active:scale-[0.98]' />
                  </div>
              </a>
              <a href="https://github.com/justnotiyann" target='__blank'>
                  <div className='w-[30px] rounded-full mx-3 h-[30px] overflow-hidden'>
                      <img src={G3} alt="img" className='w-full h-auto cursor-pointer hover:brightness-[90%] active:scale-[0.98]' />
                  </div>
              </a>
              <a href="https://github.com/imzzan" target='__blank'>
                  <div className='w-[30px] rounded-full h-[30px] overflow-hidden'>
                      <img src={G1} alt="img" className='w-full h-auto cursor-pointer hover:brightness-[90%] active:scale-[0.98]' />
                  </div>
              </a>
          </div>
          <div className='w-[1px] h-[30px] bg-white mx-[28px]'></div>
          <small onClick={() => navigate('/contributors')} className='hover:brightness-[90%] cursor-pointer mr-8 font-normal'>Contributors page</small>
          <small onClick={() => navigate('/privacy-policy')} className='hover:brightness-[90%] cursor-pointer mr-8 font-normal'>Privacy policy</small>
          <small onClick={() => navigate('/terms-of-service')} className='hover:brightness-[90%] cursor-pointer font-normal'>Terms of service</small>
        </div>
    </footer>
  )
}

export default Footer
