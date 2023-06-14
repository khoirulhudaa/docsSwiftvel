import React, { useEffect, useState } from 'react';
import Chevron from '../../assets/images/svg/chevron.svg';
import { Contents, Footer, Header, Hero } from '../../component/layout';

const Homepage = () => {

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
    
  return (
      <div>    
      {/* Header */}
        <Header />
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
