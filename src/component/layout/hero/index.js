import Aos from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'
import Map from '../../../assets/images/png/map.png'
import Particel1 from '../../../assets/images/svg/particel1.svg'
import Particel2 from '../../../assets/images/svg/particel2.svg'
import Particel3 from '../../../assets/images/svg/particel3.svg'
import Particel4 from '../../../assets/images/svg/particel4.svg'
import { Button } from '../../atom'

const Hero = () => {
    useEffect(() => {
        Aos.init();
    }, []);

  return (
    <div className='text-center bg-[#001E2B] h-max pb-[65px] lg:pb-0 lg:h-[105vh] 2xl:h-[90vh] lg:mb-0 mb-[70px] flex items-center overflow-hidden justify-center flex-col'>
        <img src={Map} alt="map" className='hidden lg:inline absolute right-0 top-0 w-full opacity-[0.1] h-[112%]' />
        {/* Particels */}
        <img data-aos-duration='1000' className='absolute top-[90px] lg:top-[120px] left-[100px] lg:left-[160px]' src={Particel1} alt="particel-img" />
        <img data-aos-duration='2000' className='absolute top-[90px] lg:top-[120px] right-[100px] lg:right-[160px]' src={Particel2} alt="particel-img" />
        <img data-aos-duration='2500' className='absolute bottom-[220px] lg:inline hidden w-[180px] right-[100px]' src={Particel3} alt="particel-img" />
        <img data-aos-duration='3000' className='absolute top-[45%] w-[170px] left-[100px] lg:inline hidden' src={Particel4} alt="particel-img" />
        {/* End Particels */}
      <h1 className='overflow-hidden text-[44px] 2xl:text-[90px] text-white lg:text-[86px] w-[90%] lg:mt-[-40px] 2xl:mt-[0px] mt-[130px] lg:w-[80%] leading-[1.5em]'>Brings <span className='text-[#00ED64] font-normal'>Speed</span> ​​in <span className='text-[#00ED64] font-normal'>creating</span> your <span className='text-[#00ED64] font-normal'>website.</span></h1>
      <p data-aos-duration='1500' className='font-normal w-[80%] lg:w-[50%] 2xl-[70%] text-[14px] lg:text-[17px] 2xl:text-[19px] text-white leading-6 2xl:leading-[2.2em] lg:leading-8 mt-6 lg:mt-8'>Enjoy your time and don't have to spend a lot of effort in building a design display that is tailored to your best taste at all times and affairs</p>
      <div className='flex mt-[14px] mb-[14px] 2xl:mt-[100px] lg:mt-[50px] lg:mb-[40px] items-center justify-between px-8'>
        <ul className='lg:flex hidden items-center w-full' data-aos-duration='2000'>
            <li className='list-disc 2xl:text-[17px] text-white mx-10 font-normal'>Web design</li>
            <li className='list-disc 2xl:text-[17px] text-white mx-10 font-normal'>Very simple</li>
            <li className='list-disc 2xl:text-[17px] text-white mx-10 font-normal'>Free code</li>
            <li className='list-disc 2xl:text-[17px] text-white mx-10 font-normal'>Components</li>
            <li className='list-disc 2xl:text-[17px] text-white mx-10 font-normal'>Freemium</li>
            <li className='list-disc 2xl:text-[17px] text-white mx-10 font-normal'>Support beginners</li>
        </ul>
      </div>
      <a href="/swiftvelBuilder" className='no-underline text-white font-bold relative z-[3]'>
        <Button text="Try swiftvel" padding={'lg:px-5 lg:py-3 2xl:py-4 px-3 py-3'} textColor='text-white' width={'lg:w-[190px] w-[50vw] 2xl:w-[220px] lg:mb-0 mb-12'} style={'font-normal mt-2'} />
      </a>
    </div>  
  )
}

export default Hero
