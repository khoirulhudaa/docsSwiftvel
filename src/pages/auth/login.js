import React, { useEffect, useState } from 'react'
import {Button, Input} from '../../component/'
import bgLine from '../../assets/images/svg/bgLine.svg'
import { useNavigate } from 'react-router-dom'
import Human1 from '../../assets/images/svg/human1.png'
import Human2 from '../../assets/images/svg/human2.png'
import Human3 from '../../assets/images/svg/human3.png'
import Google from '../../assets/images/png/google.png'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
import { setUser, setToken } from '../../redux/authSlice'

const Login = () => {

  const BASE_URL = 'https://api-dragme.vercel.app/api/users'  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const [data, setData] = useState({
    username: '',
    email: '',
    password: ''
  })

  const handleSubmit = async(e) => {
    e.preventDefault()

    try {
      const {email, password} = data;
      const response = await fetch(`${BASE_URL}/signIn`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      
      const datass = await response.status;
      const token = await response.json();
      console.log(datass)

      if(datass === 201) {
        console.log('respon:', await response.json())
        dispatch(setUser({payload: data}))
        dispatch(setToken({payload: token}))
        navigate('/')
      }else if(datass === 500) {
        const Toast = Swal.mixin({
          toast: true,
          position: 'bottom-end',
          showConfirmButton: false,
          timer: 4000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'error',
          title: 'Internal server error'
        })
      }else if(datass === 401) {
        const Toast = Swal.mixin({
          toast: true,
          position: 'bottom-end',
          showConfirmButton: false,
          timer: 4000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'error',
          title: 'Wrong password!'
        })
      }else if(datass === 404) {
        const Toast = Swal.mixin({
          toast: true,
          position: 'bottom-end',
          showConfirmButton: false,
          timer: 4000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'warning',
          title: 'User not found!'
        })
      }else {
        const Toast = Swal.mixin({
          toast: true,
          position: 'bottom-end',
          showConfirmButton: false,
          timer: 4000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'error',
          title: `Sorry, login failed! (${datass})`
        })
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]:e.target.value
    })
    console.log(data)
  }

  return (
    <div className='relative w-screen bg-darkMongo h-max lg:h-[100vh] flex items-center justify-center overflow-hidden'>
      <div className='w-[100%] lg:w-[30%] h-screen bg-[#00684A] p-5 overflow-hidden rounded-tr-[80px] shadow-lg'>
        <div onClick={() => navigate('/')} className='lg:hidden absolute right-5 lg:left-8 top-5 lg:top-8 bg-white rounded-full p-2 w-[40px] h-[40px] shadow-lg cursor-pointer hover:brightness-[90%] active:scale-[0.97]'>
          <box-icon name='home-alt'></box-icon>
        </div>
        <h2 className='text-white text-[40px] lg:text-[50px] mb-[30px] lg:mb-[40px]'>Log in to your account</h2>
        <div className='w-[90%] h-[1px] bg-white my-1'></div>
        <div className='border-[1px] lg:scale-[1] scale-[0.8] px-4 lg:ml-0 ml-[-25px] py-1 mt-4 lg:mt-12 border-white text-white w-[90%] rounded-lg cursor-pointer hover:shadow-saweria active:scale-[0.97] flex items-center justify-center'>
          <img src={Google} className='w-[34px] h-[34px] mr-3' alt='icon' />
          <p className='relative top-2'>Google</p>
        </div>
        <div className='w-full mb-4 mt-4'>
            <label htmlFor="email" className='mb-1 text-white font-normal'>Email</label>
            <input onChange={(e) => handleChange(e)} type="text" name='email' placeholder='Enter email' className='font-normal text-[14px] outline-0 rounded-lg py-[10px] px-3 w-[90%]' />
        </div>
        <div className='w-full mb-4 mt-4'>
            <label htmlFor="password" className='mb-1 text-white font-normal'>Password</label>
            <input onChange={(e) => handleChange(e)} type="password" name='password' placeholder='Enter password' className='font-normal text-[14px] outline-0 rounded-lg py-[10px] px-3 w-[90%]' />
        </div>
        <div onClick={(e) => handleSubmit(e)} className='rounded-lg border-[1px] border-white text-center py-2 w-max mb-3 lg:mb-0 px-3 cursor-pointer active:scale-[0.97] text-white'>
          Enter now
        </div>
        <a onClick={() => navigate('/signUp')} className='inline lg:hidden'>
          <span className='text-white text-[14px]'>
            Don't have an account? <span className='text-blue-500 cursor-pointer'>Sign In</span>
          </span>
        </a>
      </div>
      <div className='w-[70%] hidden lg:inline relative h-[100vh] flex items-center justify-center ml-auto overflow-hidden'>
        <img src={Human1} className='w-[300px] bottom-0 left-10 absolute' alt="human" />
        <img src={Human2} className='w-[260px] absolute top-0 left-[340px] rotate-[180deg]' alt="human" />
        <img src={Human3} className='w-[300px] absolute bottom-0 right-[0px]' alt="human" />
        <div onClick={() => navigate('/')} className='absolute left-8 top-8 bg-white rounded-full p-2 w-[40px] h-[40px] shadow-lg cursor-pointer hover:brightness-[90%] active:scale-[0.97]'>
          <box-icon name='home-alt'></box-icon>
        </div>
        <div className='lg:inline hidden'>
          <span className='absolute top-10 text-white text-[16px] right-10'>
            Don't have an account? <span className='text-blue-500 cursor-pointer' onClick={() => navigate('/signUp')}>Sign In</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Login
