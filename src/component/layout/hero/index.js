import React, { useEffect } from 'react'
import { Button } from '../../atom'
import Particel1 from '../../../assets/images/svg/particel1.svg'
import Particel2 from '../../../assets/images/svg/particel2.svg'
import Particel3 from '../../../assets/images/svg/particel3.svg'
import Particel4 from '../../../assets/images/svg/particel4.svg'
import Aos from 'aos'
import 'aos/dist/aos.css';

const Hero = () => {
    useEffect(() => {
        Aos.init();
    }, []);

  return (
    <div className='text-center h-max lg:h-[100vh] lg:mb-0 mb-[70px] flex items-center justify-center flex-col'>

        {/* Particels */}
        <img data-aos="fade-up" data-aos-duration='1000' className='absolute top-[90px] lg:top-[120px] left-[100px] lg:left-[160px]' src={Particel1} alt="particel-img" />
        <img data-aos="fade-up" data-aos-duration='2000' className='absolute top-[90px] lg:top-[120px] right-[100px] lg:right-[160px]' src={Particel2} alt="particel-img" />
        <img data-aos="fade-up" data-aos-duration='2500' className='absolute bottom-[220px] lg:inline hidden w-[180px] rotate-[-20deg] right-[100px]' src={Particel3} alt="particel-img" />
        <img data-aos="fade-up" data-aos-duration='3000' className='absolute top-[45%] w-[170px] left-[100px] lg:inline hidden rotate-[20deg]' src={Particel4} alt="particel-img" />
        {/* End Particels */}

      <h1 data-aos="fade-up" className='text-[44px] lg:text-[64px] w-[90%] lg:mt-[0] mt-[150px] lg:w-[60%]'>Brings <span className='text-indigo-500'>Speed</span> ​​in <span className='text-indigo-500'>creating</span> your <span className='text-indigo-500'>website.</span></h1>
      <p data-aos="fade-up" data-aos-duration='1500' className='font-normal w-[80%] lg:w-[50%] text-[14px] lg:text-[17px] leading-6 lg:leading-8 mt-6 lg:mt-8'>Enjoy your time and don't have to spend a lot of effort in building a design display that is tailored to your best taste at all times and affairs</p>
      <div className='flex my-[14px] lg:my-[40px] items-center justify-between px-8'>
        <ul className='lg:flex hidden items-center w-full' data-aos="fade-up" data-aos-duration='2000'>
            <li className='list-disc mx-10 font-normal'>Web design</li>
            <li className='list-disc mx-10 font-normal'>Very simple</li>
            <li className='list-disc mx-10 font-normal'>Free code</li>
            <li className='list-disc mx-10 font-normal'>Components</li>
            <li className='list-disc mx-10 font-normal'>Freemium</li>
            <li className='list-disc mx-10 font-normal'>Support beginners</li>
        </ul>
      </div>
      <a href="/dragmeBuilder" className='no-underline'>
        <Button text="Try dragme" padding={'lg:px-5 lg:py-3 px-3 py-2'} width={'w-[50vw]'} style={'font-normal mt-2'} />
      </a>
    </div>
  )
}

export default Hero
