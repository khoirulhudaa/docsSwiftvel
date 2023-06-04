import React, { useEffect, useState } from 'react'
import {Button, Input} from '../../component/'
import bgLine from '../../assets/images/svg/bgLine.svg'
import { useNavigate } from 'react-router-dom'
import Human1 from '../../assets/images/svg/human1.png'
import Human2 from '../../assets/images/svg/human2.png'
import Human3 from '../../assets/images/svg/human3.png'
import Google from '../../assets/images/png/google.png'

const Login = () => {

  const BASE_URL = 'https://api-dragme.vercel.app/api/users'  
  const navigate = useNavigate()
  
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [textError, setTextError] = useState("SIGN IN")

  const handleSubmit = async(e) => {
    e.preventDefault()

    try {
      const response = await fetch(`${BASE_URL}/signIn`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.status;
      if(data === 200) {
        navigate('/')
      }else if(data === 401) {
        setTextError("WERONG PAZZWOT!")
      }else {
        setTextError("USER NOT-FON")
      }
      // Store the token in localStorage or cookies
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='relative w-screen bg-darkMongo h-[100vh] flex items-center justify-center overflow-hidden'>
      <div className='w-[30%] h-screen bg-[#00684A] p-5 overflow-hidden rounded-tr-[80px] shadow-lg'>
        <h2 className='text-white text-[50px] mb-[40px]'>Log in to your account</h2>
        <div className='w-[90%] h-[1px] bg-white my-1'></div>
        <div className='border-[1px] px-4 py-1 mt-8 border-white text-white w-[90%] rounded-lg cursor-pointer hover:shadow-saweria active:scale-[0.97] flex items-center justify-center'>
          <img src={Google} className='w-[34px] h-[34px] mr-3' alt='icon' />
          <p className='relative top-2'>Google</p>
        </div>
        <div className='w-full mb-4 mt-4'>
            <label htmlFor="email" className='mb-1 text-white font-normal'>Email</label>
            <input type="text" name='email' placeholder='Enter email' className='font-normal text-[14px] outline-0 rounded-lg py-[10px] px-3 w-[90%]' />
        </div>
        <div className='w-full mb-4 mt-4'>
            <label htmlFor="password" className='mb-1 text-white font-normal'>Password</label>
            <input type="password" name='password' placeholder='Enter password' className='font-normal text-[14px] outline-0 rounded-lg py-[10px] px-3 w-[90%]' />
        </div>
        <div className='rounded-lg border-[1px] border-white text-center py-2 w-max px-3 cursor-pointer active:scale-[0.97] text-white'>
          Enter now
        </div>
      </div>
      <div className='w-[70%] relative h-[100vh] flex items-center justify-center ml-auto overflow-hidden'>
        <img src={Human1} className='w-[300px] bottom-0 left-10 absolute' alt="human" />
        <img src={Human2} className='w-[260px] absolute top-0 left-[340px] rotate-[180deg]' alt="human" />
        <img src={Human3} className='w-[300px] absolute bottom-0 right-[0px]' alt="human" />
        <a href="/signUp">
          <span className='absolute top-10 text-white text-[16px] right-10'>
            Don't have an account? <span className='text-blue-500 cursor-pointer'>Sign Up</span>
          </span>
        </a>
      </div>
    </div>
  )
}

export default Login
