import React from 'react'
import Water from '../../assets/images/png/water.png'
import Map from '../../assets/images/png/map.png'

const CheckEmail = () => {
    return (
        <div className='w-screen h-[105vh] lg:h-screen flex flex-col items-center justify-center'>
            <img src={Map} alt="map" className='absolute right-0 top-0 w-full opacity-[0.1] h-full' />
            <img src={Water} className='w-[60%] lg:w-[26%] mb-4' alt="img" />
            <p className='font-normal w-[75%] lg:w-[50%] text-center ml-auto mr-auto relative leading-[1.4em]'>Please check your email.</p>
            <a href="/signIn" className='no-underline relative z-[333]'>
                <div className='bg-darkMongo w-max px-[26px] py-[16px] h-max font-normal text-white rounded-md shadow-lg mt-5 cursor-pointer hover:brightness-[90%] active:scale-[0.97] duration-100'>
                    Back now
                </div>
            </a>
        </div>
  )
}

export default CheckEmail
