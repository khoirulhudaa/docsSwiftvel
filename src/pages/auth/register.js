import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import Human1 from '../../assets/images/svg/human1.png'
import Human2 from '../../assets/images/svg/human2.png'
import Human3 from '../../assets/images/svg/human3.png'
import Map from '../../assets/images/png/map.png'
import Spin from '../../assets/images/svg/spin.svg'

const Login = () => {
  const BASE_URL = 'https://api-dragme.vercel.app/api/users'  
  const navigate = useNavigate()
  
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    isLoading: false
  })

  const handleSubmit = async(e) => {
    e.preventDefault()
    setData({ ...data, isLoading: true });
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
      setData({ ...data, isLoading: false });
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
      }else if(data.status === 400)   {

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
        setData({ ...data, isLoading: false });
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
        setData({ ...data, isLoading: false });
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
        setData({ ...data, isLoading: false });
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
      setData({ ...data, isLoading: false });
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
    <div className='relative w-screen bg-darkMongo h-max lg:min-h-[100vh] flex items-center justify-center overflow-y-auto overflow-x-hidden'>
      <div className='w-[100%] lg:w-[30%] h-max overflow-y-auto lg:min-h-screen pb-12 lg:min-pb-0 lg:max-pb-[20px] bg-[#00684A] px-5 pt-5 overflow-hidden rounded-tr-[80px] shadow-lg'>
        <div onClick={() => navigate('/')} className='lg:hidden absolute right-5 lg:left-8 top-5 lg:top-8 bg-white rounded-full p-2 w-[40px] h-[40px] shadow-lg cursor-pointer hover:brightness-[90%] active:scale-[0.97]'>
          <box-icon name='home-alt'></box-icon>
        </div>
        <h2 className='text-white 2xl:text-[70px] text-[40px] mb-[30px]'>Create your account</h2>
        <div className='w-[90%] h-[1px] bg-white my-1'></div>
        <form onSubmit={handleSubmit}>
          <div className='w-full lg:block mb-4 mt-4'>
              <label htmlFor="username" className='2xl:text-[22px] mb-3 2xl:mb-6 text-white font-normal'>Username</label>
              <br />
              <input onChange={(e) => handleChange(e)} type="text" placeholder='Enter username' name='username' className='font-normal text-[14px] outline-0 rounded-lg  2xl:py-[16px] py-[10px] px-3 2xl:w-[94%] w-[90%]' />
          </div>
          <div className='w-full lg:block mb-4 mt-4'>
              <label htmlFor="email" className='2xl:text-[22px] mb-3 2xl:mb-6 text-white font-normal'>Email</label>
              <br />
              <input onChange={(e) => handleChange(e)} type="text" name='email' placeholder='Enter email' className='font-normal text-[14px] outline-0 rounded-lg  2xl:py-[16px] py-[10px] px-3 2xl:w-[94%] w-[90%]' />
          </div>
          <div className='w-full lg:block mb-4 mt-4'>
              <label htmlFor="password" className='2xl:text-[22px] mb-3 2xl:mb-6 text-white font-normal'>Password</label>
              <br />
              <input onChange={(e) => handleChange(e)} type="password" name='password' placeholder='Enter password' className='font-normal text-[14px] outline-0 rounded-lg  2xl:py-[16px] py-[10px] px-3 2xl:w-[94%] w-[90%]' />
          </div>
          <button type="submit" onClick={(e) => handleSubmit(e)} className='rounded-lg 2xl:scale-[1.3] border-[1px] border-white text-center h-[40px] w-[120px] flex items-center justify-center mb-3 lg:mb-0 px-3 2xl:ml-[14px] cursor-pointer active:scale-[0.97] mt-4 text-white'>
            {
              data.isLoading ? (
                <img src={Spin} className='w-[14px] animate-spin' alt="spin" />
              ):
              <span>
                Enter now
              </span>
            }
          </button>
          <br />
          <a onClick={() => navigate('/signIn')} className='inline lg:hidden'>
            <span className='text-white text-[14px]'>
            Already have an account? <span className='text-blue-500 cursor-pointer'>Sign In</span>
            </span>
          </a>
        </form>
      </div>
      <div className='w-[70%] hidden lg:inline relative h-[100vh] flex items-center justify-center ml-auto overflow-hidden'>
        <img src={Map} alt="map" className='absolute right-0 top-0 w-full opacity-[0.1] h-full' />
        <img src={Human1} className='w-[300px] 2xl:w-[  450px] bottom-0 left-[33%] fixed' alt="human" />
        <img src={Human2} className='w-[260px] 2xl:w-[450px] fixed top-0 left-[54.9%] rotate-[180deg]' alt="human" />
        <img src={Human3} className='w-[300px] 2xl:w-[450px] fixed bottom-0 right-[0%]' alt="human" />
        <div onClick={() => navigate('/')} className='fixed left-[32.3%] top-[4.8%] bg-white rounded-full p-2 w-[40px] h-[40px] shadow-lg cursor-pointer hover:brightness-[90%] active:scale-[0.97]'>
          <box-icon name='home-alt'></box-icon>
        </div>
        <div className='lg:inline hidden'>
          <span className='fixed 2xl:top-12 top-10 text-white text-[16px] 2xl:text-[22px] 2xl:right-12 right-10'>
          Already have an account? <span className='text-blue-500 cursor-pointer' onClick={() => navigate('/signIn')}>Sign In</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Login
