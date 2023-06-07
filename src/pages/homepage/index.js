import React, { useEffect, useState } from 'react'
import { Contents, Footer, Hero } from '../../component/layout'
import Chevron from '../../assets/images/svg/chevron.svg'
import { Button } from '../../component'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 600) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleLogout = () => {

  }
    
  return (
      <div>    
      {/* Annouchment */}
        <div className='w-screen relative lg:shadow-none shadow-lg z-20 lg:z-[0] overflow-hidden font-normal bg-white py-2 h-max lg:h-max text-white text-center flex items-center justify-center'>
            <div>
                <p className='font-normal text-[12px] lg:text-[16px] mt-auto text-mongo relative top-2'>Dragme from Indonesia - Product for build web 🔥🇮🇩</p>
            </div>
            <div className='lg:flex ml-6 items-center hidden'>
                <Button onClick={() => handleLogout()} text={"Logout"} style={"mr-3"} padding={"py-1 px-4"} textColor='text-mongo' type={"outline"} />
                <div className='w-max cursor-pointer hover:brightness-[90%] active:scale-[0.98] h-max rounded-lg px-[19.1px] py-[5px] text-white shadow-lg bg-bgMongo'>
                  Premium
                </div>
                {/* <Button onClick={() => navigate('/signIn')} text={"Sign in"} style={"mr-3"} padding={"py-1 px-4"} textColor='text-mongo' type={"outline"} />
                <Button onClick={() => navigate('/signUp')} text={"Sign up"} padding={"py-1 px-4"} /> */}
            </div>
            {/* <div className='bg-gradient-to-r absolute from-green-400 to-indigo-400 shadow-lg rounded-md right-10 w-max h-maz px-3 py-1 text-center text-white'>
              Freemium
            </div> */}
            {/* <div className='bg-gradient-to-r absolute from-blue-400 to-green-300 shadow-lg rounded-md right-10 w-max h-maz px-3 py-1 text-center text-white'>
              Premium
            </div> */}
        </div>
      {/* Annouchment */}

      {/* Hero */}
        <Hero />
      {/* Hero */}

      {/* Contents */}
        <Contents />
      {/* Contents */}

      {/* Footer */}
        <Footer />
      {/* Footer */}

      {/* Back to top */}
      {
        isVisible ? (
          <div onClick={scrollToTop} className={`duration-100 fixed z-40 w-[45px] h-[45px] lg:w-[60px] lg:h-[60px] right-[30px] lg:right-[50px] bottom-[70px] lg:bottom-[50px] rounded-full bg-mongo text-white flex items-center justify-center cursor-pointer shadow-lg`}>
              <img src={Chevron} className='chevronAnim w-[18px]' alt="icon" />
          </div>
        ) : 
          <></>
      }
      {/* Back to top */}
    </div>
  )
}

export default Homepage
