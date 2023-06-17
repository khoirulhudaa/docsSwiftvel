import Cookies from 'js-cookie'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import G1 from '../../assets/images/png/g1.png'
import G2 from '../../assets/images/png/g2.png'
import Github from '../../assets/images/svg/github.svg'
import { Footer, Header, HeaderBasic } from '../../component/layout'

const CheckEmail = () => {

    const navigate = useNavigate()

    const handleLogout = () => {

    }

    return (
    <>
         {
        Cookies.get('status') ? (
          <Header />
        ):
          <HeaderBasic />
      }
        <section className='w-full 2xl:h-[80vh] h-[93vh] bg-bgMongo lg:pb-[0px] pb-4 pt-[50px] lg:pt-[80px] text-center'>
            <h1 className='text-[43px] lg:text-[80px] 2xl:text-[100px] 2xl:mt-10 w-[70%] text-white ml-auto mr-auto font-normal leading-[1.5em] mb-4'>Please check <span className='text-lightMongo'>your</span> email</h1>
            <div className='w-max mt-6 ml-auto mr-auto h-max rounded-lg px-4 py-2 bg-darkMongo text-white text-center cursor-pointer hover:brightness-[90%] duration-100 active:scale-[0.97]'>
                Back now
            </div>
        </section>

        <Footer />
    </>
  )
}

export default CheckEmail
