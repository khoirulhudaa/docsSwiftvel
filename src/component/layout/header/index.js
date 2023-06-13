import React from 'react'
import { Button } from '../../atom'
import { useNavigate } from 'react-router-dom'
import { unSetUser } from '../../../redux/authSlice';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';

const Header = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const valueCookie = Cookies.get('status');
  const status = useSelector((state) => state.authReducers.user.payload.status)

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
    <div className='w-screen relative lg:shadow-none shadow-lg z-20 lg:z-[0] overflow-hidden font-normal bg-white py-2 h-max lg:h-max text-white text-center flex items-center justify-center'>
        <div>
            <p className='font-normal text-[12px] lg:text-[16px] mt-auto text-mongo relative top-2'>Dragme from Indonesia - Product for build web 🔥🇮🇩</p>
        </div>
        <div className='lg:flex ml-6 items-center hidden'>
            
            {
                valueCookie ? (
                    <>
                        <Button onClick={() => handleLogout()} text={"Logout"} style={"mr-3"} padding={"py-1 px-4"} textColor='text-mongo' type={"outline"} />
                        <div className='w-max cursor-pointer hover:brightness-[90%] active:scale-[0.98] h-max rounded-lg px-[19.1px] py-[5px] text-white shadow-lg bg-bgMongo'>
                            {
                                status !== "standar" ? (
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
