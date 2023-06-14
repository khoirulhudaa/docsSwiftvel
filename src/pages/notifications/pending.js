import React, { useEffect, useState } from 'react'
import Pendings from '../../assets/images/svg/pending.svg'
import Wave from '../../assets/images/png/wave.png'
import { useSelector } from 'react-redux'

const Pending = () => {
  
  const [statusNew, setStatusNew] = useState('')
  const email = useSelector((state) => state.authReducers.user.payload.email)
  console.log(email)
  const BASE_URL2 = `https://api-dragme.vercel.app/api/users/${email}`  
  
  useEffect(() => {
    fetch(`${BASE_URL2}`, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
        setStatusNew(data.message.idAccount)
    })
    .catch((error) => {
        console.log(error)
    })
  })

  
  const BASE_URL = `https://api-dragme.vercel.app/payment/cancel/order`


  const handleCancel = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ order_id: statusNew, email }),
      });

      const data = await response;
      console.log(data)
      window.location.reload();

    } catch (error) {
      console.log('Error cancelling order:', error);
      // Lakukan penanganan kesalahan jika ada
    }

  }

  return (
    <div className='w-screen bg-bgMongo h-max lg:h-[92vh] lg:flex py-[80px] lg:py-3 items-center justify-center'>
        <img src={Wave} className='w-[50%] opacity-[0.4] absolute top-0 hidden lg:inline right-0' alt='img' />
        <img src={Pendings} alt="img" className='w-[80%] ml-auto mr-auto lg:w-[500px] mt-[10px] lg:ml-[120px] lg:mr-[200px]' />
        <div className='flex flex-col text-center lg:text-left z-10'>
            <h1 className='font-normal text-center lg:text-left w-[80%] text-[40px] mt-3 ml-auto mr-auto lg:ml-[-38px] lg:mr-0 lg:text-[70px] text-white mb-20'>You are almost a premium user</h1>
            <p className='font-normal text-[15px] ml-auto mr-auto lg:ml-[-2px] lg:mr-0 flex leading-[1.5em] text-white'>Complete your payment immediately</p>
            <div onClick={(e) => handleCancel(e)} className='border-[1px] border-white rounded-lg text-white cursor-pointer active:scale-[0.97] hover:brightness-[90%] px-5 bg-red-500 py-[13px] w-max h-max'>
              Cancel
            </div>
        </div>
    </div>
  )
}

export default Pending
