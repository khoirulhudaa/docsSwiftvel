import Cookies from 'js-cookie'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import G1 from '../../assets/images/png/g1.png'
import G2 from '../../assets/images/png/g2.png'
import Github from '../../assets/images/svg/github.svg'
import Water from '../../assets/images/png/water.png';
import { Footer, Header, HeaderBasic } from '../../component/layout'

const CheckEmail = () => {

    const navigate = useNavigate()

    const handleLogout = () => {

    }

    return (
        <div className='w-screen h-[105vh] lg:h-screen flex flex-col items-center justify-center'>
            <img src={Water} className='w-[60%] lg:w-[26%] mb-4' alt="img" />
            <p className='font-normal w-[75%] lg:w-[50%] text-center ml-auto mr-auto relative leading-[1.4em]'>Please check your email.</p>
            <a href="/signIn" className='no-underline'>
            <div className='bg-darkMongo w-max px-[26px] py-[16px] h-max font-normal text-white rounded-md shadow-lg mt-5 cursor-pointer hover:brightness-[90%] active:scale-[0.97] duration-100'>
                Back now
            </div>
            </a>
        </div>
  )
}

export default CheckEmail
