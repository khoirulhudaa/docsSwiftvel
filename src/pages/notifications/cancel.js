import React from 'react'
import Cancels from '../../assets/images/svg/cancel.svg'
import Wave from '../../assets/images/png/wave.png'

const Cancel = () => {
  return (
    <div className='w-screen bg-bgMongo h-max lg:h-[92vh] lg:flex py-[80px] lg:py-3 items-center justify-center'>
        <img src={Wave} className='w-[50%] opacity-[0.4] absolute top-0 hidden lg:inline right-0' alt='img' />
        <img src={Cancels} alt="img" className='w-[80%] ml-auto mr-auto lg:w-[500px] mt-[10px] lg:ml-[120px] lg:mr-[200px]' />
        <div className='flex flex-col text-center lg:text-left z-10'>
            <h1 className='font-normal text-center lg:text-left w-[80%] text-[40px] mt-3 ml-auto mr-auto lg:ml-[-38px] lg:mr-0 lg:text-[70px] text-white mb-20 2xl:ml-[-110px]'>Why can't I become a premium user</h1>
            <p className='font-normal text-[15px] ml-auto mr-auto lg:ml-0 lg:mr-0 flex leading-[1.5em] text-white'>You cancel the payment process</p>
        </div>
    </div>
  )
}

export default Cancel
