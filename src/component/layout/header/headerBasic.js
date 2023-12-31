import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Right from '../../../assets/images/svg/right.svg';
import { Button } from '../../atom';

const Header = () => {

  const navigate = useNavigate()
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    console.log('Path saat ini:', currentPath);
  }, [location]);

  return (
    <div className='w-screen relative lg:shadow-none shadow-lg z-20 lg:z-[9999] overflow-hidden font-normal bg-white py-2 2xl:py-4 h-max lg:h-max text-white text-center flex items-center justify-center'>
       {
        location.pathname !== '/' ? (
          <div onClick={() => navigate('/')} className='w-[55px] h-[80%] flex items-center justify-center border-r-[1px] border-slate-500 active:scale-[0.97] cursor-pointer hover:h-[50%] duration-300 absolute left-0 p-1 bg-white'>
            <img src={Right} alt="icon" className='rotate-[180deg] w-[15px]' />
          </div>
        ):
        <></>
       }
        <div className='hidden lg:inline'>
            <p className='font-normal text-[12px] lg:text-[16px] 2xl:text-[20px] mt-auto text-mongo relative'>Swiftvel from Indonesia - Platform for build web 🔥🇮🇩</p>
        </div>
        <div className='lg:flex lg:ml-4 2xl:ml-10 ml-0 flex items-center'>
            <Button onClick={() => navigate('/signIn')} text={"Sign in"} style={"mr-3 2xl:scale-[1.2]"} padding={"py-1 px-4"} textColor='text-mongo' type={"outline"} />
            <Button onClick={() => navigate('/signUp')} textColor='text-white' style={"2xl:scale-[1.2] 2xl:ml-8"} text={"Sign up"} padding={"py-1 px-4"} />
        </div>
    </div>
  )
}

export default Header
