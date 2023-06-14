import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../atom';

const Header = () => {

  const navigate = useNavigate()

  return (
    <div className='w-screen relative lg:shadow-none shadow-lg z-20 lg:z-[9999] overflow-hidden font-normal bg-white py-2 h-max lg:h-max text-white text-center flex items-center justify-center'>
        <div>
            <p className='font-normal text-[12px] lg:text-[16px] mt-auto text-mongo relative top-2'>Dragme from Indonesia - Product for build web 🔥🇮🇩</p>
        </div>
        <div className='lg:flex ml-6 items-center hidden'>
            <Button onClick={() => navigate('/signIn')} text={"Sign in"} style={"mr-3"} padding={"py-1 px-4"} textColor='text-mongo' type={"outline"} />
            <Button onClick={() => navigate('/signUp')} text={"Sign up"} padding={"py-1 px-4"} />
        </div>
    </div>
  )
}

export default Header
