import React from 'react'
import { Button } from '../../atom'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';


const Header = () => {

  const navigate = useNavigate()
  const valueCookie = Cookies.get('status');

  const handleLogout = () => {

  }

  return (
    <div className='w-screen relative lg:shadow-none shadow-lg z-20 lg:z-[0] overflow-hidden font-normal bg-white py-2 h-max lg:h-max text-white text-center flex items-center justify-center'>
        <div>
            <p className='font-normal text-[12px] lg:text-[16px] mt-auto text-mongo relative top-2'>Dragme from Indonesia - Product for build web 🔥🇮🇩</p>
        </div>
        <div className='lg:flex ml-6 items-center hidden'>
            
            {
                valueCookie ? (
                    <>
                        <Button onClick={() => handleLogout()} text={"Logout"} style={"mr-3"} padding={"py-1 px-4"} textColor='text-mongo' type={"outline"} />
                        <div className='w-max cursor-pointer hover:brightness-[90%] active:scale-[0.98] h-max rounded-lg px-[19.1px] py-[5px] text-white shadow-lg bg-bgMongo'>
                            Premium
                        </div> 
                    </>
                ):
                    <>
                        <Button onClick={() => navigate('/signIn')} text={"Sign in"} style={"mr-3"} padding={"py-1 px-4"} textColor='text-mongo' type={"outline"} />
                        <Button onClick={() => navigate('/signUp')} text={"Sign up"} padding={"py-1 px-4"} />
                    </>
            }
        </div>
    </div>
  )
}

export default Header
