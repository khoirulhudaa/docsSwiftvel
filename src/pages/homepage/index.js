import React, { useEffect, useState } from 'react'
import { Contents, Footer, Header, Hero } from '../../component/layout'
import Chevron from '../../assets/images/svg/chevron.svg'
import { Button } from '../../component'

const Homepage = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 300) {
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
    
  return (
      <div>    
      {/* Annouchment */}
        <div className='w-screen relative lg:shadow-none shadow-lg z-20 lg:z-[0] font-normal bg-indigo-500 py-2 h-max lg:h-max text-white text-center flex items-center justify-center'>
            <div>
                <p className='font-normal text-[12px] lg:text-[16px] mt-auto relative top-2'>Dragme from Indonesia - Product for build web 🔥🇮🇩</p>
            </div>
            <div className='lg:flex ml-6 items-center hidden'>
                <Button text={"Sign in"} style={"mr-3"} padding={"py-1 px-4"} textColor='indigo-500' type={"outline"} />
                <Button text={"Sign up"} padding={"py-1 px-4"} />
            </div>
        </div>
      {/* Annouchment */}
      
      {/* Header */}
        {/* <Header /> */}
      {/* Header */}

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
        <div onClick={scrollToTop} className={`fixed z-40 w-[60px] h-[60px] right-[50px] bottom-[50px] rounded-full bg-indigo-500 text-white flex items-center justify-center cursor-pointer shadow-lg`}>
            <img src={Chevron} className='chevronAnim w-[18px]' alt="icon" />
        </div>
      {/* Back to top */}
    </div>
  )
}

export default Homepage
