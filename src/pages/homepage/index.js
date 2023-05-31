import React, { useEffect } from 'react'
import { Contents, Footer, Header, Hero } from '../../component/layout'
import Chevron from '../../assets/images/svg/chevron.svg'
import { Button } from '../../component'

const Homepage = () => {
    
  return (
      <div>    
      {/* Annouchment */}
        <div className='w-screen font-normal bg-indigo-500 py-2 h-max text-white text-center flex items-center justify-center'>
            <div>
                <p className='font-normal mt-auto relative top-2'>Dragme from Indonesia - Product for build web 🔥🇮🇩</p>
            </div>
            <div className='flex ml-6 items-center'>
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
        <div className='fixed z-40 w-[60px] h-[60px] right-[50px] bottom-[50px] rounded-full bg-indigo-500 text-white flex items-center justify-center cursor-pointer shadow-lg'>
            <img src={Chevron} className='chevronAnim w-[18px]' alt="icon" />
        </div>
      {/* Back to top */}
    </div>
  )
}

export default Homepage
