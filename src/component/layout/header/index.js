import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { unSetUser } from '../../../redux/authSlice';
import { Button } from '../../atom';
import Right from '../../../assets/images/svg/right.svg';

const Header = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const valueCookie = Cookies.get('status');
  const email = useSelector((state) => state.authReducers.user.payload.email)
  const [statusNew, setStatusNew] = useState('')

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
        setStatusNew(data.message.status)
    })
    .catch((error) => {
        console.log(error)
    })
  })

  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    console.log('Path saat ini:', currentPath);
  }, [location]);

  const handleLogout = async () => {
    try {
        // Kirim permintaan ke endpoint logout di server
        dispatch(unSetUser({payload: ""}));
        Cookies.remove('status');
        navigate('/signIn')
    } catch (error) {
    // Handling jika logout gagal
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
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
            title: 'Sorry, logout failed!'
        })
    }
  };

  return (
    <div className='w-screen relative lg:shadow-none shadow-lg z-20 lg:z-[9999] overflow-hidden font-normal bg-white py-2 2xl:py-4 h-max lg:h-max text-white text-center flex items-center justify-center'>
        {
        location.pathname !== '/' ? (
          <div onClick={() => navigate('/')} className='w-[55px] h-[80%] flex items-center justify-center border-r-[1px] border-slate-500 active:scale-[0.97] cursor-pointer hover:h-[50%] duration-300 absolute left-0 p-1 bg-white'>
            <img src={Right} alt="icon" className='rotate-[180deg] w-[15px]' />
          </div>
        ):
        <></>
       }
        <div>
            <p className='font-normal text-[12px] lg:text-[16px] 2xl:text-[20px] mt-auto text-mongo relative top-2'>Dragme from Indonesia - Product for build web 🔥🇮🇩</p>
        </div>
        <div className='lg:flex 2xl:ml-10 ml-6 items-center hidden'>
            
            {
                valueCookie ? (
                    <>
                        <Button onClick={() => handleLogout()} text={"Logout"} style={"mr-3 2xl:scale-[1.2]"} padding={"py-1 px-4"} textColor='text-mongo' type={"outline"} />
                        <div className={`w-max cursor-pointer h-max 2xl:ml-8 rounded-lg 2xl:scale-[1.2] px-[19.1px] py-[5px] text-white shadow-lg ${statusNew === 'settlement' ? 'bg-gradient-to-r from-blue-400 to-green-400' : 'bg-bgMongo'}`}>
                            {
                                statusNew === 'settlement' ? (
                                    <>
                                        Premium
                                    </>
                                ):
                                    <>
                                        Standar
                                    </>
                            }
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
