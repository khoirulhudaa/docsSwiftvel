import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import Google from '../../assets/images/png/google.png'
import Human1 from '../../assets/images/svg/human1.png'
import Human2 from '../../assets/images/svg/human2.png'
import Human3 from '../../assets/images/svg/human3.png'

const Login = () => {
  const BASE_URL = 'https://api-dragme.vercel.app/api/users'  
  const navigate = useNavigate()
  
  const [data, setData] = useState({
    username: '',
    email: '',
    password: ''
  })

  const handleSubmit = async(e) => {
    e.preventDefault()
    
    const {username, email, password} = data;
    await fetch(`${BASE_URL}/signUp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    }) 
    .then((response) => response.json())
    .then((data) => {
      if(data.status === 201) {
        
        navigate('/signIn')

      }else if(data.status === 500) {
        console.log(data)
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
      }else if(data.status === 400) {
        
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
          title: 'Username already exists'
        })
      
      }else if(data.status === 401) {
      
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
          title: 'Username minimal 3 characters'
        })
      
      }else if(data.status === 402) {
      
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
          title: 'Password minimal 5 characters'
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
          title: `Sorry, register failed! (${data.status})`
        })
      }
    })
    .catch((err) => {
      console.log('error register :',err)
    });

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
      <div className='w-[100%] lg:w-[30%] h-max lg:h-screen pb-12 lg:pb-0 bg-[#00684A] px-5 pt-5 overflow-hidden rounded-tr-[80px] shadow-lg'>
        <div onClick={() => navigate('/')} className='lg:hidden absolute right-5 lg:left-8 top-5 lg:top-8 bg-white rounded-full p-2 w-[40px] h-[40px] shadow-lg cursor-pointer hover:brightness-[90%] active:scale-[0.97]'>
          <box-icon name='home-alt'></box-icon>
        </div>
        <h2 className='text-white text-[40px] mb-[30px]'>Create your account</h2>
        <div className='w-[90%] h-[1px] bg-white my-1'></div>
        <div className='w-full mb-4 mt-4'>
            <label htmlFor="username" className='mb-3 text-white font-normal'>Username</label>
            <input onChange={(e) => handleChange(e)} type="text" placeholder='Enter username' name='username' className='font-normal text-[14px] outline-0 rounded-lg py-[10px] px-3 w-[90%]' />
        </div>
        <div className='w-full mb-4 mt-4'>
            <label htmlFor="email" className='mb-3 text-white font-normal'>Email</label>
            <input onChange={(e) => handleChange(e)} type="text" name='email' placeholder='Enter email' className='font-normal text-[14px] outline-0 rounded-lg py-[10px] px-3 w-[90%]' />
        </div>
        <div className='w-full mb-4 mt-4'>
            <label htmlFor="password" className='mb-3 text-white font-normal'>Password</label>
            <input onChange={(e) => handleChange(e)} type="password" name='password' placeholder='Enter password' className='font-normal text-[14px] outline-0 rounded-lg py-[10px] px-3 w-[90%]' />
        </div>
        <div onClick={(e) => handleSubmit(e)} className='rounded-lg border-[1px] border-white text-center py-2 w-max mb-3 lg:mb-0 px-3 cursor-pointer active:scale-[0.97] text-white mt-5'>
          Enter now
        </div>
        <a onClick={() => navigate('/signIn')} className='inline lg:hidden'>
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
            Don't have an account? <span className='text-blue-500 cursor-pointer' onClick={() => navigate('/signIn')}>Sign In</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Login
