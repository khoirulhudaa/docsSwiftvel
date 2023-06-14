import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import Wave from '../../assets/images/png/wave.png'
import { Footer, Header } from '../../component/layout'
import Pending from '../notifications/pending'
import Success from '../notifications/success'

const Pricing = () => {

 const [statusNew, setStatusNew] = useState('standar')

 const email = useSelector((state) => state.authReducers.user.payload.email)
 console.log(email)
 const BASE_URL2 = `https://api-dragme.vercel.app/api/users/${email}`  
 const BASE_URL = `https://api-dragme.vercel.app`  
 
 useEffect(() => {
    fetch(`${BASE_URL2}`, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        if(data.status === 404 || data === undefined) {
            setStatusNew('standar')
        }else {
            setStatusNew(data.message.status)
        }
    })
    .catch((error) => {
        console.log(error)
    })
 })
 
 const handlePayment = async (e) => {
    e.preventDefault()
    
    const generateRandomCode = () => {
       const length = 5;
       const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
       let code = '';
   
       for (let i = 0; i < length; i++) {
         const randomIndex = Math.floor(Math.random() * characters.length);
         code += characters.charAt(randomIndex);
       }
   
       return code;
     };

    if(Cookies.get('status')) {
        await fetch(`${BASE_URL}/payment/`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, order_id:generateRandomCode(), gross_amount: 100000 }),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.message)
            Cookies.set('order_id', generateRandomCode())
            if(data.status === 201) window.open(data.message, '_blank')
            window.location.reload();
        })
        .catch((error) => {
            console.log(error)
        })
    }else {
        Swal.fire(
            'Subscribe now?',
            'You must login first :)',
            'warning'
        )
    }

 }
  return (
    <>
    {/* Header */}
        <Header />
    {/* Header */}
    {
       statusNew === 'standar' ? (
            <>
                <div className='w-full lg:flex h-max pt-6 lg:pt-10 pb-12 overflow-hidden relative items-center justify-center bg-[#023430]'>
                    <a href="/" className='text-mongo lg:text-white'> 
                        <div className='absolute right-6 z-[30] lg:left-[120px] active:scale-[0.96] bg-mongo top-8 lg:top-16 w-max p-[10px] border border-[1] border-black cursor-pointer hover:brightness-[95%] duration-100 h-max rounded-full flex items-center justify-center'>
                            <FontAwesomeIcon icon={faArrowRight} className='rotate-[180deg] w-[20px] h-[20px]' />
                        </div>
                    </a>
                    <img src={Wave} className='w-[50%] absolute top-0 right-0' alt='img' />
                    <div className='w-[100%] lg:w-[50%] pl-[30px] lg:pl-[120px] h-screen pr-5 lg:pr-4 pt-1 lg:pt-3 pb-4 flex flex-col justify-center'>
                        <small className='text-lightMongo font-normal mb-4'>Dragme official</small>
                        <h2 className='text-[42px] lg:text-[50px] text-white w-[96%] leading-[1.2em] lg:leading-[1.5em] mb-6'>Premium users get more access from us</h2>
                        <p className='text-[14px] lg:text-[15px] font-normal leading-[2em] text-white w-[90%] lg:w-[80%]'>At this price you can enjoy all the dragme components in full with our unlimited number of component frames. Be our best customer with dragme team, thank you very much :)</p>
                        <div className='flex items-center'>
                            <div onClick={(e) => handlePayment(e)} className='scale-[0.9] lg:scale-[1] w-[155px] lg:w-[180px] lg:w-max h-max font-normal cursor-pointer text-darkMongo mt-3 bg-mongo px-10 py-[12px] ml-[-10px] lg:ml-0 lg:py-3 hover:brightness-[90%] active:scale-[0.97] text-center border-[#001E2B] border-[1px]'>
                                Subscribe
                            </div>
                            <p className='hidden lg:inline text-red-400 line-through ml-5 text-[16px] relative top-[14px] '>Rp. 199.999</p>
                            <p className='text-white ml-2 lg:ml-5 text-[16px] lg:text-[22px] relative top-[14px] '>Rp. 99.999/month</p>
                        </div>
                    </div>
                    <div className='w-[100%] lg:w-[50%] h-max p-4 flex flex-col items-center justify-center'>
                        <div className='z-10 overflow-hidden relative rounded-[20px] pl-4 pr-4 pb-4  pt-[35px] lg:pt-[45px] lg:mt-[0px] shadow-lg bg-darkMongo w-[96%] lg:w-[65%] h-max lg:h-max'>
                            <p className='text-lightMongo text-[13px] mb-5 ml-1 lg:ml-3 mt-4 lg:mt-3 font-normal'>Get started with :</p>
                            <ul className='list-none'>
                                <li className='list-none mb-[40px] lg:mb-[30px] lg:ml-0 ml-[-20px] flex items-center'>
                                    <div className='h-[15px] w-[25px] border-[#00ED64] rotate-[-45deg] border-l-[4px] border-b-[4px]'>
                                    </div>
                                    <p className='text-white ml-4 lg:ml-7 text-white text-[15px] lg:text-[17px] relative top-3 font-normal'>Unclocks All Component</p>
                                </li>
                                <li className='list-none mb-[40px] lg:mb-[30px] lg:ml-0 ml-[-20px] flex items-center'>
                                    <div className='h-[15px] w-[25px] border-[#00ED64] rotate-[-45deg] border-l-[4px] border-b-[4px]'>
                                    </div>
                                    <p className='text-white ml-4 lg:ml-7 text-white text-[15px] lg:text-[17px] relative top-3 font-normal'>No component limit</p>
                                </li>
                                <li className='list-none mb-[40px] lg:mb-[30px] lg:ml-0 ml-[-20px] flex items-center'>
                                    <div className='h-[15px] w-[25px] border-[#00ED64] rotate-[-45deg] border-l-[4px] border-b-[4px]'>
                                    </div>
                                    <p className='text-white ml-4 lg:ml-7 text-white text-[15px] lg:text-[17px] relative top-3 font-normal'>Customizable</p>
                                </li>
                                <li className='list-none mb-[40px] lg:mb-[30px] lg:ml-0 ml-[-20px] flex items-center'>
                                    <div className='h-[15px] w-[25px] border-[#00ED64] rotate-[-45deg] border-l-[4px] border-b-[4px]'>
                                    </div>
                                    <p className='text-white ml-4 lg:ml-7 text-white text-[15px] lg:text-[17px] relative top-3 font-normal'>No download limit</p>
                                </li>
                                <li className='list-none mb-[40px] lg:mb-[30px] lg:ml-0 ml-[-20px] flex items-center'>
                                    <div className='h-[15px] w-[25px] border-[#00ED64] rotate-[-45deg] border-l-[4px] border-b-[4px]'>
                                    </div>
                                    <p className='text-white ml-4 lg:ml-7 text-white text-[15px] lg:text-[17px] relative top-3 font-normal'>Export to PHP or HTML</p>
                                </li>
                                <li className='list-none mb-[40px] lg:mb-[30px] lg:ml-0 ml-[-20px] flex items-center'>
                                    <div className='h-[15px] w-[25px] border-[#00ED64] rotate-[-45deg] border-l-[4px] border-b-[4px]'>
                                    </div>
                                    <p className='text-white ml-4 lg:ml-7 text-white text-[15px] lg:text-[17px] relative top-3 font-normal'>Responsive Design</p>
                                </li>
                                <li className='list-none mb-[40px] lg:mb-[30px] lg:ml-0 ml-[-20px] flex items-center'>
                                    <div className='h-[15px] w-[25px] border-[#00ED64] rotate-[-45deg] border-l-[4px] border-b-[4px]'>
                                    </div>
                                    <p className='text-white ml-4 lg:ml-7 text-white text-[15px] lg:text-[17px] relative top-3 font-normal'>Free consultation</p>
                                </li>
                                <li className='list-none mb-[40px] lg:mb-[30px] lg:ml-0 ml-[-20px] flex items-center'>
                                    <div className='h-[15px] w-[25px] border-[#00ED64] rotate-[-45deg] border-l-[4px] border-b-[4px]'>
                                    </div>
                                    <p className='text-white ml-4 lg:ml-7 text-white text-[15px] lg:text-[17px] relative top-3 font-normal'>Premium account label</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        ): statusNew === 'pending' ? (
            <Pending />
        ): statusNew === 'cancel' ? (
            <>
                <div className='w-full lg:flex h-max pt-6 lg:pt-10 pb-12 overflow-hidden relative items-center justify-center bg-[#023430]'>
                    <a href="/" className='text-mongo lg:text-white'> 
                        <div className='absolute right-6 z-[30] lg:left-[120px] active:scale-[0.96] bg-mongo top-8 lg:top-16 w-max p-[10px] border border-[1] border-black cursor-pointer hover:brightness-[95%] duration-100 h-max rounded-full flex items-center justify-center'>
                            <FontAwesomeIcon icon={faArrowRight} className='rotate-[180deg] w-[20px] h-[20px]' />
                        </div>
                    </a>
                    <img src={Wave} className='w-[50%] absolute top-0 right-0' alt='img' />
                    <div className='w-[100%] lg:w-[50%] pl-[30px] lg:pl-[120px] h-screen pr-5 lg:pr-4 pt-1 lg:pt-3 pb-4 flex flex-col justify-center'>
                        <small className='text-lightMongo font-normal mb-4'>Dragme official</small>
                        <h2 className='text-[42px] lg:text-[50px] text-white w-[96%] leading-[1.2em] lg:leading-[1.5em] mb-6'>Premium users get more access from us</h2>
                        <p className='text-[14px] lg:text-[15px] font-normal leading-[2em] text-white w-[90%] lg:w-[80%]'>At this price you can enjoy all the dragme components in full with our unlimited number of component frames. Be our best customer with dragme team, thank you very much :)</p>
                        <div className='flex items-center'>
                            <div onClick={(e) => handlePayment(e)} className='scale-[0.9] lg:scale-[1] w-[155px] lg:w-[180px] lg:w-max h-max font-normal cursor-pointer text-darkMongo mt-3 bg-mongo px-10 py-[12px] ml-[-10px] lg:ml-0 lg:py-3 hover:brightness-[94%] text-center border-[#001E2B] border-[1px]'>
                                Subscribe
                            </div>
                            <p className='hidden lg:inline text-red-400 line-through ml-5 text-[16px] relative top-[14px] '>Rp. 199.999</p>
                            <p className='text-white ml-2 lg:ml-5 text-[16px] lg:text-[22px] relative top-[14px] '>Rp. 99.999/month</p>
                        </div>
                    </div>
                    <div className='w-[100%] lg:w-[50%] h-max p-4 flex flex-col items-center justify-center'>
                        <div className='z-10 overflow-hidden relative rounded-[20px] pl-4 pr-4 pb-4  pt-[35px] lg:pt-[45px] lg:mt-[0px] shadow-lg bg-darkMongo w-[96%] lg:w-[65%] h-max lg:h-max'>
                            <p className='text-lightMongo text-[13px] mb-5 ml-1 lg:ml-3 mt-4 lg:mt-3 font-normal'>Get started with :</p>
                            <ul className='list-none'>
                                <li className='list-none mb-[40px] lg:mb-[30px] lg:ml-0 ml-[-20px] flex items-center'>
                                    <div className='h-[15px] w-[25px] border-[#00ED64] rotate-[-45deg] border-l-[4px] border-b-[4px]'>
                                    </div>
                                    <p className='text-white ml-4 lg:ml-7 text-white text-[15px] lg:text-[17px] relative top-3 font-normal'>Unclocks All Component</p>
                                </li>
                                <li className='list-none mb-[40px] lg:mb-[30px] lg:ml-0 ml-[-20px] flex items-center'>
                                    <div className='h-[15px] w-[25px] border-[#00ED64] rotate-[-45deg] border-l-[4px] border-b-[4px]'>
                                    </div>
                                    <p className='text-white ml-4 lg:ml-7 text-white text-[15px] lg:text-[17px] relative top-3 font-normal'>No component limit</p>
                                </li>
                                <li className='list-none mb-[40px] lg:mb-[30px] lg:ml-0 ml-[-20px] flex items-center'>
                                    <div className='h-[15px] w-[25px] border-[#00ED64] rotate-[-45deg] border-l-[4px] border-b-[4px]'>
                                    </div>
                                    <p className='text-white ml-4 lg:ml-7 text-white text-[15px] lg:text-[17px] relative top-3 font-normal'>Customizable</p>
                                </li>
                                <li className='list-none mb-[40px] lg:mb-[30px] lg:ml-0 ml-[-20px] flex items-center'>
                                    <div className='h-[15px] w-[25px] border-[#00ED64] rotate-[-45deg] border-l-[4px] border-b-[4px]'>
                                    </div>
                                    <p className='text-white ml-4 lg:ml-7 text-white text-[15px] lg:text-[17px] relative top-3 font-normal'>No download limit</p>
                                </li>
                                <li className='list-none mb-[40px] lg:mb-[30px] lg:ml-0 ml-[-20px] flex items-center'>
                                    <div className='h-[15px] w-[25px] border-[#00ED64] rotate-[-45deg] border-l-[4px] border-b-[4px]'>
                                    </div>
                                    <p className='text-white ml-4 lg:ml-7 text-white text-[15px] lg:text-[17px] relative top-3 font-normal'>Export to PHP or HTML</p>
                                </li>
                                <li className='list-none mb-[40px] lg:mb-[30px] lg:ml-0 ml-[-20px] flex items-center'>
                                    <div className='h-[15px] w-[25px] border-[#00ED64] rotate-[-45deg] border-l-[4px] border-b-[4px]'>
                                    </div>
                                    <p className='text-white ml-4 lg:ml-7 text-white text-[15px] lg:text-[17px] relative top-3 font-normal'>Responsive Design</p>
                                </li>
                                <li className='list-none mb-[40px] lg:mb-[30px] lg:ml-0 ml-[-20px] flex items-center'>
                                    <div className='h-[15px] w-[25px] border-[#00ED64] rotate-[-45deg] border-l-[4px] border-b-[4px]'>
                                    </div>
                                    <p className='text-white ml-4 lg:ml-7 text-white text-[15px] lg:text-[17px] relative top-3 font-normal'>Free consultation</p>
                                </li>
                                <li className='list-none mb-[40px] lg:mb-[30px] lg:ml-0 ml-[-20px] flex items-center'>
                                    <div className='h-[15px] w-[25px] border-[#00ED64] rotate-[-45deg] border-l-[4px] border-b-[4px]'>
                                    </div>
                                    <p className='text-white ml-4 lg:ml-7 text-white text-[15px] lg:text-[17px] relative top-3 font-normal'>Premium account label</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        ): 
            <Success/>
    }
    <Footer />
    </>
  )
}

export default Pricing
