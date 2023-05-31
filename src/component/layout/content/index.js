import React, { useRef, useEffect } from 'react';
import Logo from '../../../assets/images/drag/drag.png';
import Benefit1 from '../../../assets/images/svg/benefit1.svg';
import Benefit2 from '../../../assets/images/svg/benefit2.svg';
import Benefit3 from '../../../assets/images/svg/benefit3.svg';
import Component1 from '../../../assets/images/svg/component1.png';
import Fast from '../../../assets/images/svg/fast.svg';
import Flexibel from '../../../assets/images/svg/flexibel.svg';
import Partner from '../../../assets/images/svg/partner.svg';
import Petik from '../../../assets/images/svg/petik.svg';
import BgLine from '../../../assets/images/svg/bgLine.svg';
import Right from '../../../assets/images/svg/right.svg';
import Powerful from '../../../assets/images/svg/powerful.svg';
import Check from '../../../assets/images/svg/check.svg';
import Products from '../../../assets/images/svg/products.svg';
import Purple from '../../../assets/images/svg/purple.svg';
import Gold from '../../../assets/images/svg/gold.svg';
import Video from '../../../assets/video/tutorialVideo.webm';
import { Button } from '../../atom';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Contents = () => {

    useEffect(() => {
        Aos.init();
    }, []);
    
    const videoRef = useRef(null);
      
    useEffect(() => {
          // Mengecek apakah video sudah terload
          const video = videoRef.current;
          video.addEventListener('canplay', handleAutoplay);
          
          return () => {
            video.removeEventListener('canplay', handleAutoplay);
          };
    }, []);
      
    const handleAutoplay = () => {
        // Memulai pemutaran video secara otomatis
        const video = videoRef.current;
        video.play().catch(error => {
        // Penanganan kesalahan jika video tidak dapat dimainkan otomatis
        console.error('Tidak dapat memainkan video otomatis:', error);
        });
    };

return (
    <div className='mb-12 mt-[-20px]'>
        <section className='flex min-h-[300px] px-[120px] w-full items-center justify-center'>
            <div className='w-[35%] h-max' data-aos="fade-up">
                <div className='relative text-white overflow-hidden px-4 py-10 rounded-[30px] w-[85%] h-max bg-[#0041E8]'>
                    <small className='font-normal'>Let's Developmnent</small>
                    <h2 className='font-bold w-[65%] mt-3'>Work <br /> With Us</h2>
                    <p className='font-normal w-[70%] text-[14px] relative top-4 text-slate-200'>
                        Together we build your Product
                    </p>
                    <div className='absolute bottom-[-200px] right-0 w-[90%] h-[120%] rounded-full bg-slate-100 opacity-[0.1]'>

                    </div>
                    <img className='absolute right-[-150px] w-[100%] rotate-[-15deg] top-[0px] opacity-[0.8]' src={Logo} alt="logo-dragme" />
                </div>
            </div>

            {/* <img src={Purple} alt="particel" className='absolute z-[-10] mt-[-420px] right-0 w-[300px] h-[300px]' /> */}

            <div data-aos="fade-up" data-aos-duration='1000' className='w-[65%] flex items-center h-[270px] rounded-[30px] p-4 bg-slate-100'>
                <div className='w-[30%]' data-aos="fade-up" data-aos-duration='1000'>
                    <h2 className='w-[200px] text-[30px] text-indigo-500 font-600'>Components vary</h2>
                    <p className='font-normal text-slate-400 w-[100%] text-[14px] leading-6 mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, illum.</p>
                </div>
                <div className='w-[25%] text-center' data-aos="fade-up" data-aos-duration='1500'>
                    <h3 className='text-indigo-500 font-bold'>53+</h3>
                    <p className='font-normal text-slate-400'>Components</p>
                </div>
                <div className='w-[25%] text-center' data-aos="fade-up" data-aos-duration='2000'>
                    <h3 className='text-indigo-500 font-bold'>120+</h3>
                    <p className='font-normal text-slate-400'>Downloads</p>
                </div>
                <div className='20%' data-aos="fade-up" data-aos-duration='2500'>
                    <Button text="Let's try" style={'relative bottom-2'} padding={'px-4 py-2'} />
                </div>
            </div>
        </section>

        <section className='w-full h-max flex flex-col mt-[105px] items-center justify-center'>
            <div data-aos="fade-up" className='rounded-full text-white text-[12px] mb-[25px] font-normal w-max h-max px-3 py-1 text-center bg-green-500 shadow-lg'>
                Benefits for you!  
            </div>
            <h2 className='font-600' data-aos="fade-up" data-aos-duration='1000'>Success website</h2>
            <p data-aos="fade-up" data-aos-duration='500' className='text-[14px] font-normal w-[45%] mt-4 text-center text-slate-400 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae exercitationem ullam cumque iure officia earum minus fugit quas at quidem. Cumque.</p>
            <div className='flex w-screen justify-center items-center mt-3'>
                <div className='w-[82%] h-[360px] p-2' data-aos="fade-up">
                    <div className='w-full relative overflow-hidden h-full overflow-hidden rounded-[30px] bg-[#2960CA]'>
                        <div className='relative left-[30px] top-8'>
                            <img src={Component1} className='absolute left-8 bottom-[160px] w-[40px]' alt="icon" />
                            <h2 className='text-white font-bold mb-3 ml-8 mt-[120px]'>Comp-to-Comp</h2>
                            <p className='text-slate-300 font-normal leading-6 ml-8 text-[14px] w-[265px]'>Bringing together various components to form one homepage that is ready to download</p>
                        </div>
                        <img className='absolute w-[40%] bottom-0 right-0' src={Benefit1} alt="img" />
                    </div>
                </div>
            </div>
            <div className='w-[82%] flex items-center justify-between h-[460px] p-2'>
                <div data-aos="fade-up" data-aos-duration='1000' className='h-[100%] relative overflow-hidden w-[49%] bg-[#EDF5FE] rounded-[20px] p-2'>
                    <div className='relative left-[30px] top-[-14px]'>
                        <img src={Fast} className='absolute left-8 bottom-[160px] w-[30px]' alt="icon" />
                        <h2 className='text-black font-bold mb-3 ml-8 mt-[120px]'>Faster</h2>
                        <p className='text-black font-normal leading-6 ml-8 text-[12px] w-[265px]'>Bringing together various components to form one homepage that is ready to download</p>
                    </div>
                    <img className='absolute w-[60%] bottom-0 left-0' src={Benefit2} alt="img" />
                </div>
                <div data-aos="fade-up" data-aos-duration='1500' className='h-[100%] relative overflow-hidden w-[49%] bg-[#000000] rounded-[20px] p-2'>
                    <div className='relative left-[30px] top-[-14px]'>
                        <img src={Flexibel} className='absolute left-8 bottom-[160px] w-[30px]' alt="icon" />
                        <h2 className='text-white font-bold mb-3 ml-8 mt-[120px]'>FLexibel</h2>
                        <p className='text-slate-300 font-normal leading-6 ml-8 text-[12px] w-[265px]'>Bringing together various components to form one homepage that is ready to download</p>
                    </div>
                    <img className='absolute w-[70%] bottom-0 left-0' src={Benefit3} alt="img" />
                </div>
            </div>
        </section>

        <section className='w-full relative mt-[90px] h-max text-center flex flex-col justify-center'>
            <small className='text-[14px] text-slate-400 font-normal' data-aos="fade-up">What our customer say</small>
            <h2 className='my-4 font-bold text-[34px]' data-aos="fade-up" data-aos-duration='1000'>Testimonial</h2>
            <p className='text-slate-400 text-[14px] font-normal' data-aos="fade-up" data-aos-duration='1300'>Lorem ipsum dolor sit amet consectetur.</p>
            <img src={Partner} alt="logo" className='w-[140px] ml-auto mr-auto my-8' data-aos="fade-up" data-aos-duration='1500' />
            <img src={Petik} className='w-[70px] left-[160px] mb-[120px] absolute' alt="img" />
            <img src={Petik} className='w-[70px] right-[160px] mb-[320px] absolute' alt="img" />
            <h1 className='ml-auto mr-auto text-[28px] w-[65%] leading-[2em] font-normal' data-aos="fade-up">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, maxime.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, maxime.
            </h1>
            <h3 data-aos="fade-up" className='mt-[40px] text-[18px] font-bold'>Muhammad Khoirulhuda</h3>
            <p data-aos="fade-up" data-aos-duration='1000' className='font-normal'>Founder & FE at Framework css - Valclass</p>
        </section>

        <section className='w-[100%] relative mt-[120px] pb-[90px] h-max ml-auto mr-auto bg-[#0055C0] overflow-hidden'>
            <img src={BgLine} className='absolute w-full h-full' alt="bg-section" />
            <h2 data-aos="fade-up" className='text-white z-10 relative ml-[120px] mt-[100px] font-bold'>Get started</h2>
            <div className='w-[82%] flex overflow-hidden relative z-10 h-[460px] ml-auto mr-auto mt-5 bg-white rounded-md p-11'>
               <div>
                    <img src={Powerful} className='w-[50px] mt-4 mb-4' alt="img" />
                    <h2 data-aos="fade-up" className='w-[65%] text-black font-bold text-[30px] leading-[1.6em]'>easy-to-use <br /> resources and language modes</h2>
                    <a href="/dragmeBuilder" data-aos="fade-up" className='w-max'>
                        <p className='text-indigo-500 mt-4 w-max cursor-pointer flex items-center'>Try dragme now <img src={Right} className='text-indigo-500 w-[14px] ml-3' alt="icon" /></p>
                    </a>
               </div>
                <div>
                    <div data-aos="fade-up" className='flex z-20 items-center bg-green-400 text-white text-[12px] rounded-full w-max left-[-60px] relative h-max px-3 py-1'>
                        <img src={Check} className='w-[17px] mr-3' alt='icon' />
                        Video dalam mode repeat
                    </div>
                    <div className='overflow-hidden w-max h-max absolute rounded-[16px] right-[50px] p-4 bottom-[44px]'>
                        <video ref={videoRef} data-aos="fade-up" data-aos-duration='1000' muted loop controls={false} className='w-[600px] shadow-lg'>
                            <source src={Video} type="video/mp4" />
                            Maaf, browser Anda tidak mendukung pemutaran video.
                        </video>
                    </div>
                </div>
            </div>
        </section>

        <section className='w-full h-max mt-5'>
            <div className='flex items-center'>
                <div className='w-[80%] items-start pl-[120px] flex flex-col'>
                    <h2 className='font-600' data-aos="fade-up">Our products</h2>
                    <p data-aos="fade-up" data-aos-duration='1000' className='text-[14px] font-normal w-[45%] mt-4 text-slate-400 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae exercitationem ullam cumque iure officia earum minus fugit quas at quidem. Cumque.</p>
                </div>
                <div className='w-[20%] pr-[120px] flex flex-col items-center' data-aos="fade-up" data-aos-duration='1300'>
                    <Button text={'Try valclass'} padding={'px-4 py-3'} />
                </div>
            </div>
            <div data-aos="fade-up" className='flex overflow-hidden w-[82%] ml-auto mr-auto rounded-lg shadow-lg items-center mt-12 justify-center'>
                <img src={Products} alt="img" />
            </div>
        </section>
    </div>
  )
}

export default Contents
