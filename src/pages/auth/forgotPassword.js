import Cookies from 'js-cookie'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import Human1 from '../../assets/images/svg/human1.png'
import Human2 from '../../assets/images/svg/human2.png'
import Human3 from '../../assets/images/svg/human3.png'

const Login = () => {

  const navigate = useNavigate()
  const BASE_URL = 'https://api-dragme.vercel.app/api/users'  
  
  const [data, setData] = useState({
    email: '',
  })

  const handleSubmit = async(e) => {
    e.preventDefault()

    const {email} = data;
    await fetch(`${BASE_URL}/forgotPassword`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
    .then((response) => response.json())
    .then((data) => {
      // Process the received data
      console.log('reponse forgot password:', data)
      if(data.status === 201) {
        
        Cookies.set('status', true);
        navigate('/check-email')

      }else if(data.status === 500) {
        
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

      }else if(data.status === 404) {
        
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
          title: 'Email not found!'
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
          title: `Forgot password failed! (${data.status})`
        })
      }

    })
    .catch((error) => {
      console.error('Error retrieving data', error);
    });

  }

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]:e.target.value
    })
  }

  return (
    <div className='relative w-screen bg-darkMongo h-max lg:h-[100vh] flex items-center justify-center overflow-hidden'>
      <div className='w-[100%] lg:w-[30%] h-screen bg-[#00684A] p-5 overflow-hidden rounded-tr-[80px] shadow-lg'>
        <div onClick={() => navigate('/')} className='lg:hidden absolute right-5 lg:left-8 top-5 lg:top-8 bg-white rounded-full p-2 w-[40px] h-[40px] shadow-lg cursor-pointer hover:brightness-[90%] active:scale-[0.97]'>
          <box-icon name='home-alt'></box-icon>
        </div>
        <h2 className='text-white text-[40px] 2xl:text-[70px] lg:text-[50px] mb-[30px] lg:mb-[40px]'>Enter your email</h2>
        <div className='w-[90%] h-[1px] bg-white my-1'></div>
        <div className='w-full lg:block mb-4 mt-4'>
            <label htmlFor="email" className='2xl:text-[22px] mb-3 2xl:mb-6 text-white font-normal'>Email</label>
            <br />
            <input onChange={(e) => handleChange(e)} type="text" name='email' placeholder='Enter email' className='font-normal text-[14px] outline-0 rounded-lg 2xl:py-[16px] py-[10px] px-3 2xl:w-[94%] w-[90%]' />
        </div>
        <div onClick={(e) => handleSubmit(e)} className='rounded-lg 2xl:scale-[1.3] border-[1px] border-white text-center py-2 w-max mb-3 lg:mb-0 px-3 2xl:ml-[14px] cursor-pointer active:scale-[0.97] mt-5 text-white'>
          Enter now
        </div>
        <a onClick={() => navigate('/signUp')} className='inline lg:hidden'>
          <span className='text-white text-[14px]'>
            Don't have an account? <span className='text-blue-500 cursor-pointer'>Sign In</span>
          </span>
        </a>
      </div>
      <div className='w-[70%] hidden lg:inline relative h-[100vh] flex items-center justify-center ml-auto overflow-hidden'>
        <img src={Human1} className='w-[300px] 2xl:w-[450px] bottom-0 left-10 absolute' alt="human" />
        <img src={Human2} className='w-[260px] 2xl:w-[450px] absolute top-0 left-[340px] rotate-[180deg]' alt="human" />
        <img src={Human3} className='w-[300px] 2xl:w-[450px] absolute bottom-0 right-[0px]' alt="human" />
        <div onClick={() => navigate('/')} className='absolute left-8 top-8 bg-white rounded-full p-2 w-[40px] h-[40px] shadow-lg cursor-pointer hover:brightness-[90%] active:scale-[0.97]'>
          <box-icon name='home-alt'></box-icon>
        </div>
        <div className='lg:inline hidden'>
          <span className='absolute 2xl:top-12 top-10 text-white text-[16px] 2xl:text-[22px] 2xl:right-12 right-10'>
            Don't have an account? <span className='text-blue-500 cursor-pointer' onClick={() => navigate('/signUp')}>Sign In</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Login
