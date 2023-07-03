import { faPause, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Cookies from 'js-cookie';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Wave from '../../../assets/images/png/wave.png';
import Map from '../../../assets/images/png/map.png';
import Benefit1 from '../../../assets/images/svg/benefit1.svg';
import Benefit2 from '../../../assets/images/svg/benefit2.svg';
import Benefit3 from '../../../assets/images/svg/benefit3.svg';
import Component1 from '../../../assets/images/svg/component1.png';
import Fast from '../../../assets/images/svg/fast.svg';
import Flexibel from '../../../assets/images/svg/flexibel.svg';
import Petik from '../../../assets/images/svg/petik.svg';
import Powerful from '../../../assets/images/svg/powerful.svg';
import Right from '../../../assets/images/svg/right.svg';
import Spin from '../../../assets/images/svg/spin.svg';
import Tutor from '../../../assets/images/svg/tutor.svg';
import Colors from '../../../assets/images/svg/colors.svg';
import Partner from '../../../assets/images/svg/v.svg';
import Wave2 from '../../../assets/images/svg/wave.svg';
import ReactIcon from '../../../assets/images/svg/react.svg';
import Video from '../../../assets/video/autovideo.mp4';

const Contents = () => {

    const navigate = useNavigate()
    const [feedback, setFeedback] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isPlay, setIsPlay] = useState(false);
    const [showButton, setShowButton] = useState(false);

    const videoRef = useRef(null);

    const handlePlay = () => {
        setIsPlay(true)
        videoRef.current.play();
    };

    const handlePause = () => {
        setIsPlay(false)
        videoRef.current.pause();
    }

    useEffect(() => {
        Aos.init();
    }, []);

    const handlePricing = (e) => {
        e.preventDefault()
        if(Cookies.get('status')) {
            navigate('/pricing')
        }else {
            Swal.fire(
                'Subscribe now?',
                'You must login first :)',
                'warning'
            )
        }
    }

    const BASE_URL = 'https://api-dragme.vercel.app/feedback'  
    const handleFeedback = async(e) => {
        e.preventDefault()
        setIsLoading(true);
        await fetch(`${BASE_URL}/create`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ feedback }),
        })
        .then((response) => response.json())
        .then((data) => {
        setIsLoading(false);
          // Process the received data
          console.log('reponse login:', data)
          if(data.status === 201) {
            Swal.fire(
                'Thank you for the suggestion',
                'We want to be better than now:)',
                'success'
            )
          }else {
            setIsLoading(false);
            const Toast = Swal.mixin({
              toast: true,
              position: 'bottom-end',
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
              title: 'Sorry, failed to post an answer'
            })
          }
    
        })
        .catch((error) => {
            setIsLoading(false);
          console.error('Error retrieving data', error);
        });
    }

    const handleChangeFeed = (e) => {
        setFeedback(e.target.value)
    }

    const handleTouchStart = () => {
        setShowButton(true);
    };
    
    const handleTouchEnd = () => {
    setShowButton(false);
    };
    
return (
    <div className='relative h-max mt-[60px] 2xl:mt-[120px] lg:mt-[70px]'>
        <img src={Wave2} className='absolute hidden opacity-[0.5] lg:inline w-[100%] z-[-1] top-0 left-0' alt="img" />
        <section className='lg:flex h-max relative overflow-hidden lg:min-h-[300px] mb-[70px] lg:px-[120px] lg:ml-6 w-screen lg:w-full items-center mt-0 lg:mt-14 justify-between'>
            <img src={Powerful} className='w-[55%] 2xl:w-[320px] flex ml-auto mr-auto lg:ml-0 lg:mr-0 lg:w-[280px] rotate-[-10deg]' alt="icon" />
            <div data-aos-duration='1000' className='relative bottom-2 hidden lg:block lg:ml-[40px] lg:mr-0 ml-auto mr-auto w-[90%] lg:w-[65%] lg:mt-0 mt-[40px] items-center h-max overflow-hidden lg:h-[270px] 2xl:h-[340px] pl-10 pr-4 py-7'>
                <h1 className='text-[44px] 2xl:text-[62px] leading-[1.5em] w-[100%] text-black'>Many components and there is a choice of code language</h1>
                <p className='text-slate-500 leading-[2em] lg:ml-1 text-[15px] 2xl:text-[22px] font-normal w-[70%] 2xl:w-[90%] mt-4'>We make it easy for anyone to create a website in order to meet the needs of every business. And we want to spoil those who are not very good at making web</p>
            </div>
        </section>

        <section className='w-full h-max relative z-[20] flex flex-col mt-[70px] 2xl:mt-[150px] lg:mt-[95px] items-center justify-center'>
            <div className='rounded-full text-white text-[15px] mb-[25px] font-normal w-[57%] lg:w-max h-max px-3 py-1 text-center bg-green-500 shadow-lg'>
                Benefits for you!  
            </div>
            <h2 className='font-600 text-[36px] lg:text-[50px] 2xl:text-[70px] lg:text-left text-center' data-aos-duration='1000'>Our advantages</h2>
            <p data-aos-duration='500' className='text-[14px] 2xl:text-[22px] font-normal w-[88%] 2xl:w-[50%] lg:w-[45%] mt-4 text-center text-slate-500 leading-7 lg:leading-8 2xl:leading-[2.2em]'>The uniqueness and several advantages that we have will make it very easy for you to create your business and digital projects through the website.</p>
            <div className='flex w-screen justify-center items-center mt-4 lg:mt-3'>
                <div className='w-[90%] lg:w-[86%] 2xl:h-[450px] h-[360px] p-2'>
                    <div className='w-full relative overflow-hidden h-full overflow-hidden rounded-[30px] bg-darkMongo'>
                        <div className='relative lg:left-[30px] lg:top-8'>
                            <img src={Component1} className='absolute left-8 top-[-85px] lg:top-[-92px] w-[40px]' alt="icon" />
                            <h2 className='text-lightMongo text-[32px] lg:text-[44px] 2xl:text-[52px] font-bold mb-3 ml-8 mt-[140px] lg:mt-[110px]'>Comp-to-Comp</h2>
                            <p className='text-slate-300 font-normal 2xl:leading-10 leading-6 ml-8 text-[12px] 2xl:text-[16px] 2xl:top-[20px] 2xl:relative lg:text-[14px] w-[80%] 2xl:w-[450px] lg:w-[305px]'>Bringing together various components to form one homepage that is ready to download</p>
                        </div>  
                        <img className='hidden lg:flex absolute w-[70%] opacity-[0.4] lg:opacity-[1] lg:w-[40%] bottom-0 right-0' src={Benefit1} alt="img" />
                    </div>
                </div>
            </div>
            <div className='w-[90%] mt-2 lg:w-[86%] lg:flex items-center justify-between h-max 2xl:h-[500px] lg:h-[460px] p-2'>
                <div data-aos-duration='1000' className='h-[100%] lg:mt-0 mt-[20px] relative overflow-hidden w-[100%] lg:w-[49%] bg-[#cee5ff] rounded-[20px] p-2'>
                    <div className='relative lg:left-[30px] top-[-30px] lg:top-[-14px]'>
                        <img src={Fast} className='absolute left-8 bottom-[190px] sm:bottom-[140px] lg:bottom-[200px] 2xl:bottom-[270px] 2xl:w-[40px] w-[30px]' alt="icon" />
                        <h2 className='text-black text-[32px] lg:text-[44px] 2xl:text-[52px] font-bold mb-3 ml-8 2xl:mt-[180px] mt-[140px]'>Faster</h2>
                        <p className='text-black font-normal 2xl:leading-10 leading-6 ml-8 lg:mt-8 text-[15px] 2xl:text-[18px] w-[80%] lg:w-[65%]'>Be fast in creating your own website, shorten the process of working on your website and start from swiftvel</p>
                    </div>
                    <img className='hidden lg:flex absolute opacity-[0.5] w-[60%] bottom-0 left-0' src={Benefit2} alt="img" />
                </div>
                <div data-aos-duration='1000' className='h-[100%] relative overflow-hidden w-[100%] lg:mt-0 mt-[40px] lg:w-[49%] bg-[#000000] rounded-[20px] p-2'>
                    <div className='relative lg:left-[30px] top-[-30px] lg:top-[-14px]'>
                        <img src={Flexibel} className='absolute left-8 bottom-[240px] sm:bottom-[165px] lg:bottom-[200px] 2xl:bottom-[270px] 2xl:w-[40px] w-[30px]' alt="icon" />
                        <h2 className='text-white text-[32px] lg:text-[44px] 2xl:text-[52px] font-bold mb-3 ml-8 2xl:mt-[180px] mt-[140px]'>Flexibel</h2>
                        <p className='text-slate-300 font-normal 2xl:leading-10 leading-6 ml-8 lg:mt-8 text-[15px] 2xl:text-[18px] w-[80%] lg:w-[60%]'>flexible design and components, premium components provide advantages such as being responsive in terms of mobile devices</p>
                    </div>
                    <img className='hidden lg:flex absolute opacity-[0.3] w-[70%] bottom-0 left-0' src={Benefit3} alt="img" />
                </div>
            </div>
        </section>

        <section className='w-full relative mt-[50px] lg:mt-[90px] h-max 2xl:py-[100px] text-center flex flex-col justify-center'>
            <img src={Wave2} className='absolute hidden rotate-180 opacity-[0.5] lg:inline w-[100%] z-[-1] 2xl:top-[-390px] top-[-480px] left-0' alt="img" />
            <div className='rounded-full text-white text-[15px] mb-[25px] font-normal w-max h-max px-3 flex ml-auto mr-auto py-1 text-center bg-green-500 shadow-lg'>
                What our customer say
            </div>
            <h2 className='mt-4 mb-3 font-normal text-[38px] lg:text-[50px] 2xl:text-[72px]' data-aos-duration='1000'>Special greeting</h2>
            <img src={Partner} alt="logo" className='lg:inline hidden w-[180px] 2xl:w-[260px] ml-auto mr-auto my-7' />
            <img src={Petik} className='lg:inline hidden w-[70px] left-[160px] mb-[180px] absolute' alt="img" />
            <img src={Petik} className='lg:inline hidden w-[70px] right-[160px] mb-[320px] absolute' alt="img" />
            <h1 className='ml-auto mr-auto text-[16px] lg:text-[28px] 2xl:text-[40px] w-[90%] lg:w-[65%] leading-[1.8em] lg:leading-[2em] font-normal'>
            It's very convenient for those who don't have the skills to make a website 
            but really need it or they don't have enough time. Then it really works for him
            </h1>
            <h3 className='mt-[40px] text-[18px] 2xl:text-[23px] font-bold'>Muhammad Khoirulhuda</h3>
            <p data-aos-duration='1000' className='font-normal mt-2 lg:w-max w-[70%] text-[12px] 2xl:text-[18px] lg:text-[16px] ml-auto mr-auto text-center'>Founder & FE at Framework css - Valclass</p>
        </section>

        <section className='w-[100%] overflow-hidden rounded-br-[70px] lg:rounded-br-[200px] relative mt-[60px] 2xl:mt-[40px] pt-1 lg:pt-4 lg:mt-[100px] pb-[20px] lg:pb-[140px] h-max 2xl:pb-[280px] ml-auto mr-auto bg-[#023430]'>
            <img src={Map} alt="map" className='hidden lg:inline absolute right-0 top-0 w-full opacity-[0.1] h-full' />
            <div className='w-[90%] relative lg:w-max lg:flex relative z-10 h-max lg:h-[460px] ml-[0px] lg:ml-[120px] mt-4 lg:mt-5 rounded-md px-8 pb-8 lg:pb-8 pt-8 lg:pt-10 lg:px-2'>
               <div className='lg:h-max w-max h-max relative'>
                    <h2 className='w-[25%] lg:w-[60%] text-white font-normal text-[40px] lg:text-[70px] 2xl:text-[80px] leading-[1.4em] lg:leading-[1.6em]'>You can change the color of some parts</h2>
                    <a href="/swiftvelBuilder" className='w-max text-lightMongo no-underline'>
                        <p className='text-lightMongo mt-4 w-max cursor-pointer flex items-center'>Try swiftvel now <img src={Right} className='text-indigo-500 w-[26px] p-2 ml-3 bg-white rounded-full flex items-center justify-center' alt="icon" /></p>
                    </a>
                    <p className='text-[15px] 2xl:text-[23px] 2xl:leading-[2.2em] leading-[2em] mt-5 w-[25%] lg:w-[45%] font-normal text-slate-200'>Changes all or some of the same colors you choose to your desired color in realtime in Swiftvel to determine the best taste for the website</p>
               </div>
            </div>
            <div className='relative ml-auto mr-auto hidden lg:inline w-[84%] 2xl:top-[120px] flex justify-between'>
               <div className='w-[100%] lg:w-[84%] 2xl:w-[88%] overflow-hidden mt-4 ml-auto mr-auto rounded-[30px] border-solid border-[12px] border-[#023430]'>
                    <img src={Colors} className='w-[102%]' alt="img" />
               </div>
            </div>
        </section>

        <section className='w-full 2xl:h-[560px] h-max pb-2 lg:pb-8 flex mt-[10px] lg:mt-[35px] flex-col justify-center items-center text-center'>
            <h1 className='text-[50px] lg:text-[65px] 2xl:text-[76px] w-[85%] lg:w-[60%] text-center text-black mt-5 mb-4 leading-[1.4em]'>Become a swiftvel premium user</h1>
            <p className='text-[15px] 2xl:text-[23px] w-[70%] lg:w-max font-normal mb-8'>Get more components that are better and varied in design</p>
            <div onClick={(e) => handlePricing(e)} className='w-max lg:w-[180px] 2xl:scale-[1.4] 2xl:top-[30px] 2xl:relative lg:w-max h-max font-normal cursor-pointer text-darkMongo mt-3 bg-mongo px-10 py-3 hover:brightness-[94%] text-center border-[#001E2B] border-[1px]'>
                Get now (Rp. 99.999)
            </div>
        </section>

        <section className='relative w-full mt-[80px] lg:rounded-tl-[110px] rounded-tl-[70px] lg:overflow-hidden lg:rounded-br-[110px] rounded-br-[70px] lg:mt-[110px] pb-[70px] pt-8 lg:pt-[0] lg:pb-[40px] bg-[#023430] 2xl:h-[850px] h-max lg:flex'>
            <img src={Map} alt="map" className='hidden lg:inline absolute right-0 top-0 w-full opacity-[0.1] h-full' />
            <img src={Wave} className='hidden lg:inline absolute w-[70px] lg:w-[400px] top-0 right-0' alt="img" />
            <div className='w-[100%] lg:w-[50%] h-max p-[30px] lg:p-[120px] lg:mt-[10px]'>
                <h1 className='text-[45px] 2xl:text-[80px] lg:text-[55px] text-white w-[90%] leading-[1.4em]'>Get started with swiftvel today</h1>
                <p className='w-[100%] font-normal 2xl:text-[23px] text-slate-200 2xl:leading-[2.2em] leading-[2em] mt-4'>
                    It's easy to use and will really help you in making websites, 
                    easier than CMS and has affordable prices for premium accounts
                </p>
                <a target='__blank' href="https://api.whatsapp.com/send?phone=6289513093406&text=Hallo admin, saya swiftvelers." className='z-[3] relative no-underline text-white'>
                    <div className='w-[180px] lg:w-max h-max font-normal cursor-pointer text-darkMongo mt-5 bg-mongo px-10 z-[3] py-3 hover:brightness-[94%] text-center border-[#001E2B] border-[1px]'>
                        Call servicer
                    </div>
                </a>
            </div>
            <div className='relative w-[100%] lg:w-[50%] h-max overflow-hidden lg:h-max mt-[10px] lg:mt-[-40px] flex justify-center items-center'>
            <div className='z-10 overflow-hidden relative rounded-[20px] pl-16 pr-4 pb-4 lg:pl-12 pt-[35px] lg:pt-[45px] lg:mt-[110px] shadow-lg bg-darkMongo w-[90%] lg:w-[65%] h-max lg:h-max'>
                <p className='text-lightMongo text-[13px] mb-5 ml-[-20px] lg:ml-0 mt-4 lg:mt-3 font-normal'>Get started with :</p>
                <ul className='list-none'>
                    <li className='list-none mb-[40px] lg:mb-[30px] lg:ml-0 ml-[-20px] flex items-center'>
                        <div className='h-[15px] w-[25px] border-[#00ED64] rotate-[-45deg] border-l-[4px] border-b-[4px]'>
                        </div>
                        <p className='text-white ml-4 lg:ml-7 text-white text-[15px] lg:text-[17px] relative top-1 font-normal'>Unclocks All Component</p>
                    </li>
                    <li className='list-none mb-[40px] lg:mb-[30px] lg:ml-0 ml-[-20px] flex items-center'>
                        <div className='h-[15px] w-[25px] border-[#00ED64] rotate-[-45deg] border-l-[4px] border-b-[4px]'>
                        </div>
                        <p className='text-white ml-4 lg:ml-7 text-white text-[15px] lg:text-[17px] relative top-1 font-normal'>No component limit</p>
                    </li>
                    <li className='list-none mb-[40px] lg:mb-[30px] lg:ml-0 ml-[-20px] flex items-center'>
                        <div className='h-[15px] w-[25px] border-[#00ED64] rotate-[-45deg] border-l-[4px] border-b-[4px]'>
                        </div>
                        <p className='text-white ml-4 lg:ml-7 text-white text-[15px] lg:text-[17px] relative top-1 font-normal'>Customizable</p>
                    </li>
                    <li className='list-none mb-[40px] lg:mb-[30px] lg:ml-0 ml-[-20px] flex items-center'>
                        <div className='h-[15px] w-[25px] border-[#00ED64] rotate-[-45deg] border-l-[4px] border-b-[4px]'>
                        </div>
                        <p className='text-white ml-4 lg:ml-7 text-white text-[15px] lg:text-[17px] relative top-1 font-normal'>Automatic build</p>
                    </li>
                    <li className='list-none mb-[40px] lg:mb-[30px] lg:ml-0 ml-[-20px] flex items-center'>
                        <div className='h-[15px] w-[25px] border-[#00ED64] rotate-[-45deg] border-l-[4px] border-b-[4px]'>
                        </div>
                        <p className='text-white ml-4 lg:ml-7 text-white text-[15px] lg:text-[17px] relative top-1 font-normal'>Export to React</p>
                    </li>
                    <li className='list-none mb-[40px] lg:mb-[30px] lg:ml-0 ml-[-20px] flex items-center'>
                        <div className='h-[15px] w-[25px] border-[#00ED64] rotate-[-45deg] border-l-[4px] border-b-[4px]'>
                        </div>
                        <p className='text-white ml-4 lg:ml-7 text-white text-[15px] lg:text-[17px] relative top-1 font-normal'>Responsive Design</p>
                    </li>
                    <li className='list-none mb-[40px] lg:mb-[30px] lg:ml-0 ml-[-20px] flex items-center'>
                        <div className='h-[15px] w-[25px] border-[#00ED64] rotate-[-45deg] border-l-[4px] border-b-[4px]'>
                        </div>
                        <p className='text-white ml-4 lg:ml-7 text-white text-[15px] lg:text-[17px] relative top-1 font-normal'>Free consultation</p>
                    </li>
                    <li className='list-none mb-[40px] lg:mb-[30px] lg:ml-0 ml-[-20px] flex items-center'>
                        <div className='h-[15px] w-[25px] border-[#00ED64] rotate-[-45deg] border-l-[4px] border-b-[4px]'>
                        </div>
                        <p className='text-white ml-4 lg:ml-7 text-white text-[15px] lg:text-[17px] relative top-1 font-normal'>Premium account label</p>
                    </li>
                </ul>
            </div>
            </div>
        </section>

        <section className='w-screen relative overflow-hidden h-max pt-[40px] lg:pt-[40px] pb-[60px] lg:pb-[100px] px-4 lg:px-6 text-center justify-center flex flex-col items-center'>
            <div className='w-[100vw] lg:w-[90%] relative text-center lg:w-max lg:flex relative z-10 h-max lg:h-max mb-4 mt-4 lg:mt-4 rounded-md px-8 pb-8 lg:pb-8 pt-8 lg:pt-6 lg:px-2'>
               <div className='lg:h-max h-max text-center flex flex-col items-center justify-center relative ml-auto mr-auto w-[80vw]'>
                    <h2 className='w-[90%] 2xl:w-max lg:w-max text-darkMongo font-normal flex items-center text-center text-[40px] lg:text-[70px] 2xl:text-[80px] ml-auto mr-auto leading-[1.4em] lg:leading-[1.6em]'>Automatic build feature</h2>
                    <a onClick={() => this.navigate('/pricing')} className='bg-bgMongo rounded-full px-3 py-2 w-max text-lightMongo mt-3 hover:brightness-[88%] active:scale-[0.98] no-underline'>
                        <p className='text-white w-max cursor-pointer flex items-center'>Only at premium <img src={Right} className='text-indigo-500 w-[26px] p-2 ml-3 bg-white rounded-full flex items-center justify-center' alt="icon" /></p>
                    </a>
                    <p className='text-[15px] 2xl:text-[23px] 2xl:leading-[2.2em] leading-[2em] mt-5 w-[92vw] lg:w-[70%] font-normal text-slate-400'>Swiftvel will automatically assemble several components into one unit to create a complete website for you quickly and easily</p>
               </div>
            </div>
            <div className='relative ml-auto mr-auto flex lg:inline w-[84%] 2xl:w-max 2xl:top-[0px] flex justify-between'>
                <div onClick={isPlay ? handlePause : handlePlay} className={`${isPlay ? 'opacity-[0.4]' : 'opacity-[1]'} flex ml-auto left-[46%] lg:left-[44%] mr-auto mt-[70px] lg:mt-[200px] w-[25px] lg:w-[120px] rounded-full h-[25px] lg:h-[120px] items-center justify-center cursor-pointer hover:brightness-[90%] active:scale-[0.96] absolute z-[99999] shadow-lg bg-white`}>
                    {
                        isPlay ? (
                            <FontAwesomeIcon className={`text-[40px] lg:text-[50px] duration-100`} icon={faPause} />
                        ):
                            <FontAwesomeIcon className='text-[40px] lg:text-[50px]' icon={faPlayCircle} />
                    }
                </div>
                <video onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} ref={videoRef} src={Video} loop autoplay muted playsinline className='rounded-[20px] border-[1px] border-slate-300'>
                    Your browser does not support the video tag.
                </video>
            </div>
            {/* <h1 className='text-[44px] lg:text-[64px] 2xl:text-[76px] w-[90%] lg:w-[50%] ml-auto mr-auto leading-[1.5em] mt-[100px]'>Your advice is what we need</h1>
            <div className='w-[90%] lg:w-[45vw] border-[1px] border-slate-400 flex items-center justify-center ml-auto mr-auto 2xl:h-[60px] h-[50px] my-4 rounded-[12px] overflow-hidden bg-white'>
                <input type="text" name='feedback' onChange={(e) => handleChangeFeed(e)} placeholder='Type in your suggestions...' className='border-none outline-0 w-full h-max py-2 px-3 font-normal 2xl:text-[17px] text-[15px]' />
            </div>
            <div onClick={(e) => handleFeedback(e)} className='ml-auto mr-auto w-[180px] 2xl:scale-[1.4] 2xl:top-[30px] 2xl:relative lg:w-[160px] h-[58px] font-normal cursor-pointer flex items-center justify-center flex-col mt-3 bg-mongo px-10 py-3 hover:brightness-[94%] text-center border-[#001E2B] border-[1px]'>
            {
              isLoading ? (
                <img src={Spin} className='w-[14px] animate-spin' alt="spin" />
              ):
              <span>
                Send now
              </span>
            }
            </div> */}
        </section>

        <section className='w-[100%] overflow-hidden rounded-tr-[70px] lg:rounded-tr-[200px] relative mt-[60px] 2xl:mt-[40px] pt-1 lg:pt-4 lg:mt-[0px] pb-[20px] lg:pb-[100px] h-max 2xl:pb-[280px] ml-auto mr-auto bg-[#023430]'>
            <img src={Map} alt="map" className='hidden lg:inline absolute right-0 top-0 w-full opacity-[0.1] h-full' />
            <div className='w-[90%] relative lg:w-max lg:flex relative z-10 h-max lg:h-[460px] ml-[0px] lg:ml-[120px] mt-4 lg:mt-5 rounded-md px-8 pb-8 lg:pb-8 pt-8 lg:pt-10 lg:px-2'>
               <div className='lg:h-max w-max h-max relative'>
                    <h2 className='w-[25%] lg:w-[60%] text-white font-normal text-[40px] lg:text-[70px] 2xl:text-[80px] leading-[1.4em] lg:leading-[1.6em]'>easy-to-use resources and language modes</h2>
                    <a href="/swiftvelBuilder" className='w-max text-lightMongo no-underline'>
                        <p className='text-lightMongo mt-4 w-max cursor-pointer flex items-center'>Try swiftvel now <img src={Right} className='text-indigo-500 w-[26px] p-2 ml-3 bg-white rounded-full flex items-center justify-center' alt="icon" /></p>
                    </a>
                    <p className='text-[15px] 2xl:text-[23px] 2xl:leading-[2.2em] leading-[2em] mt-5 w-[25%] lg:w-[45%] font-normal text-slate-200'>It's very easy to use, just choose the components you want and arrange them all into 1 perfect homepage according to the web appearance you want</p>
               </div>
            </div>
            <div className='relative ml-auto mr-auto hidden lg:inline w-[84%] 2xl:top-[120px] flex justify-between'>
               <div className='w-[100%] lg:w-[84%] 2xl:w-[88%] overflow-hidden mt-4 ml-auto mr-auto rounded-[30px] border-solid border-[12px] border-[#023430]'>
                    <img src={Tutor} className='w-[102%]' alt="img" />
               </div>
            </div>
        </section>

        <section className='w-screen relative overflow-hidden h-max pt-[40px] lg:pt-[30px] pb-[60px] lg:pb-[30px] px-4 lg:px-6 text-center justify-center flex flex-col items-center'>
            <div className='absolute lg:opacity-[1] opacity-[0.5] left-[14%] lg:mt-[0] mt-8 rounded-full w-[20px] h-[20px] bg-mongo shadow-lg'></div>
            <div className='absolute lg:opacity-[1] opacity-[0.5] left-[22%] rounded-full bottom-[18%] w-[30px] h-[30px] bg-mongo shadow-lg'></div>
            <div className='absolute lg:opacity-[1] opacity-[0.5] right-[25%] rounded-full bottom-[20%] w-[20px] h-[20px] bg-mongo shadow-lg'></div>
            <div className='absolute lg:opacity-[1] opacity-[0.5] right-[16%] rounded-full lg:mt-[0] mt-8   bottom-[45%] w-[40px] h-[40px] bg-mongo shadow-lg'></div>
            <div className='w-[100vw] lg:w-[90%] relative text-center lg:w-max lg:flex relative z-10 h-max lg:h-max mb-4 mt-4 lg:mt-4 rounded-md px-8 pb-8 lg:pb-8 pt-8 lg:pt-6 lg:px-2'>
               <div className='lg:h-max h-max text-center flex flex-col items-center justify-center relative ml-auto mr-auto w-[80vw]'>
                    <h2 className='w-[90%] 2xl:w-max lg:w-max text-darkMongo font-normal flex items-center text-center text-[40px] lg:text-[70px] 2xl:text-[80px] ml-auto mr-auto leading-[1.4em] lg:leading-[1.6em]'>Effortlessly React</h2>
                    <a onClick={() => navigate('/swiftvelbuilder')} className='bg-bgMongo rounded-full px-3 py-2 w-max text-lightMongo mt-3 hover:brightness-[88%] active:scale-[0.98] no-underline'>
                        <p className='text-white w-max cursor-pointer flex items-center'>Try this feature<img src={Right} className='text-indigo-500 w-[26px] p-2 ml-3 bg-white rounded-full flex items-center justify-center' alt="icon" /></p>
                    </a>
                    <p className='text-[15px] 2xl:text-[23px] 2xl:leading-[2.2em] leading-[2em] mt-5 w-[92vw] lg:w-[70%] font-normal text-slate-400'>Unlock the Power of RapidReact: Easily generate React Code from swiftvel to accelerate your React Projects with RapidReact</p>
                    <img src={ReactIcon} alt="react-icon" className='iconReact' />
               </div>
            </div>
        </section>

        <section className='relative w-full mt-[80px] lg:rounded-tl-[110px] rounded-tl-[70px] lg:overflow-hidden lg:rounded-tr-[110px] rounded-tr-[70px] lg:mt-[110px] pb-[70px] pt-8 lg:pt-[30px] 2xl:pt-[70px] lg:pb-[70px] bg-[#023430] 2xl:h-[100vh] h-max lg:flex'>
            <img src={Map} alt="map" className='hidden lg:inline absolute right-0 top-0 w-full opacity-[0.1] h-full' />
            <img src={Wave} className='hidden lg:inline absolute w-[70px] lg:w-[400px] top-0 right-0' alt="img" />
            <div className='w-[100%] lg:w-[63%] h-max p-[30px] flex flex-col lg:pl-[100px] lg:py-[50px] lg:mt-[10px]'>
                <h1 className='text-[32px] 2xl:text-[80px] flex flex-wrap items-center lg:text-[65px] text-white w-[90%] leading-[1.6em]'>Build web with <h1 data-aos='fade-up' data-aos-duration="1000" className='mr-4 lg:ml-4'>scroll</h1> animatios <h1 data-aos='fade-up' data-aos-duration="1000" className='mr-4 lg:ml-4'>instantly</h1> and can <h1 data-aos='fade-up' data-aos-duration="1000" className='mr-4 lg:ml-4'>version</h1> without <h1 data-aos='fade-up' data-aos-duration="1000" className='mr-4 lg:ml-4'>animatios</h1></h1>
                <p className='w-[94%] lg:w-[86%] font-normal text-[14px] 2xl:text-[23px] text-slate-200 2xl:leading-[2.2em] leading-[2em] mt-4'>
                    Make your website interactive with interesting scroll animations and make your website from now on look different from some other websites
                </p>
                <a data-aos='fade-up' data-aos-duration="1000" target='__blank' onClick={() => navigate('/swiftvelbuilder')} className='z-[3] relative no-underline text-white'>
                    <div className='w-[180px] lg:w-max h-max font-normal cursor-pointer text-darkMongo mt-5 bg-mongo px-10 z-[3] py-3 hover:brightness-[94%] text-center border-[#001E2B] border-[1px]'>
                        Try swiftvel
                    </div>
                </a>
            </div>
            <div className='relative w-[100%] lg:w-[37%] h-max overflow-hidden lg:h-max mt-[0] lg:mt-[-40px] flex justify-center items-center'>
                <div className={`w-[90%] flex flex-col items-center justify-center h-max rounded-[20px] shadow-lg p-1 relative duration-100 mt-[14%]`}>
                    <div data-aos='fade-up' data-aos-duration="1000" className='w-[92%] 2xl:e-[68%] lg:w-[70%] h-[400px] bg-white flex flex-wrap rounded-lg mx-2 mb-[50px] relative overflow-hidden flex'>
                        <div className='ml-auto mr-auto relative w-full h-max flex flex-col items-center justify-center p-2'>
                        <div className='w-[50%] h-[10px] bg-slate-400 rounded-full mb-2 mt-[20px]'></div>
                        <div className='flex w-[70%] flex-wrap h-max mb-2 items-center justify-center'>
                            <div className='w-[35%] h-[6px] bg-slate-400 rounded-full mb-1 mr-1'></div>
                            <div className='w-[35%] h-[6px] bg-slate-400 rounded-full mb-1 ml-1'></div>
                            <div className='w-[33%] h-[6px] bg-slate-400 rounded-full mb-1 mr-1'></div>
                            <div className='w-[33%] h-[6px] bg-slate-400 rounded-full mb-1 mr-1'></div>
                            <div className='w-[25%] h-[6px] bg-slate-400 rounded-full mb-1 mr-1'></div>
                            <div className='w-[25%] h-[6px] bg-slate-400 rounded-full mb-1 ml-1'></div>
                        </div>
                        <div className='flex w-[70%] items-center justify-center my-1'>
                            <div className='w-[25%] mr-1 h-[13px] bg-slate-400 rounded-lg mb-2'></div>
                            <div className='w-[25%] ml-1 h-[13px] bg-slate-400 rounded-lg mb-2'></div>
                        </div>
                        <div className='flex w-[80%] items-center justify-between my-2'>
                            <div className='w-[50%] mr-2 h-[60px] bg-slate-400 rounded-[6px] mb-2'></div>
                            <div className='w-[50%]'>
                                <div className='w-[70%] ml-2 h-[10px] bg-slate-400 rounded-full mb-2'></div>
                                <div className='w-[70%] ml-2 h-[6px] bg-slate-400 rounded-full mb-1'></div>
                                <div className='w-[50%] ml-2 h-[6px] bg-slate-400 rounded-full mb-1'></div>
                                <div className='w-[40%] ml-2 h-[6px] bg-slate-400 rounded-full mb-1'></div>
                            </div>
                        </div>
                        <div className='flex w-[80%] items-center justify-between my-2'>
                            <div className='w-[50%]'>
                                <div className='w-[70%] ml-2 h-[10px] bg-slate-400 rounded-full mb-2'></div>
                                <div className='w-[70%] ml-2 h-[6px] bg-slate-400 rounded-full mb-1'></div>
                                <div className='w-[50%] ml-2 h-[6px] bg-slate-400 rounded-full mb-1'></div>
                                <div className='w-[40%] ml-2 h-[6px] bg-slate-400 rounded-full mb-1'></div>
                            </div>
                            <div className='w-[50%] mr-2 h-[60px] bg-slate-400 rounded-[6px] mb-2'></div>
                        </div>
                        </div>
                        <div className='absolute bottom-0 ml-auto mr-auto py-[10px] cursor-pointer hover:brightness-[84%] active:scale-[0.98] w-full px-[20px] h-max bg-bgMongo text-white flex items-center justify-center'>
                            Without animate
                        </div>
                    </div>
                    <div data-aos='fade-up' data-aos-duration="1000" className='w-[92%] 2xl:e-[68%] lg:w-[70%] h-[400px] bg-white flex flex-wrap rounded-lg mx-2 relative overflow-hidden flex'>
                        <div className='ml-auto mr-auto relative w-full h-max flex flex-col items-center justify-center p-2'>
                        <div id='blck2' className='w-[50%] h-[10px] bg-slate-400 rounded-full mb-2 mt-[20px]'></div>
                        <div className='flex w-[70%] flex-wrap h-max mb-2 items-center justify-center'>
                            <div id='blck2' className='w-[35%] h-[6px] bg-slate-400 rounded-full mb-1 mr-1'></div>
                            <div id='blck2' className='w-[35%] h-[6px] bg-slate-400 rounded-full mb-1 ml-1'></div>
                            <div id='blck2' className='w-[33%] h-[6px] bg-slate-400 rounded-full mb-1 mr-1'></div>
                            <div id='blck2' className='w-[33%] h-[6px] bg-slate-400 rounded-full mb-1 mr-1'></div>
                            <div id='blck2' className='w-[25%] h-[6px] bg-slate-400 rounded-full mb-1 mr-1'></div>
                            <div id='blck2' className='w-[25%] h-[6px] bg-slate-400 rounded-full mb-1 ml-1'></div>
                        </div>
                        <div className='flex w-[70%] items-center justify-center my-1'>
                            <div id='blck2' className='w-[25%] mr-1 h-[13px] bg-slate-400 rounded-lg mb-2'></div>
                            <div id='blck2' className='w-[25%] ml-1 h-[13px] bg-slate-400 rounded-lg mb-2'></div>
                        </div>
                        <div className='flex w-[80%] items-center justify-between my-2'>
                            <div id='blck2' className='w-[50%] mr-2 h-[60px] bg-slate-400 rounded-[6px] mb-2'></div>
                            <div className='w-[50%]'>
                                <div id='blck2' className='w-[70%] ml-2 h-[10px] bg-slate-400 rounded-full mb-2'></div>
                                <div id='blck2' className='w-[70%] ml-2 h-[6px] bg-slate-400 rounded-full mb-1'></div>
                                <div id='blck2' className='w-[50%] ml-2 h-[6px] bg-slate-400 rounded-full mb-1'></div>
                                <div id='blck2' className='w-[40%] ml-2 h-[6px] bg-slate-400 rounded-full mb-1'></div>
                            </div>
                        </div>
                        <div className='flex w-[80%] items-center justify-between my-2'>
                            <div className='w-[50%]'>
                                <div id='blck2' className='w-[70%] ml-2 h-[10px] bg-slate-400 rounded-full mb-2'></div>
                                <div id='blck2' className='w-[70%] ml-2 h-[6px] bg-slate-400 rounded-full mb-1'></div>
                                <div id='blck2' className='w-[50%] ml-2 h-[6px] bg-slate-400 rounded-full mb-1'></div>
                                <div id='blck2' className='w-[40%] ml-2 h-[6px] bg-slate-400 rounded-full mb-1'></div>
                            </div>
                            <div id='blck2' className='w-[50%] mr-2 h-[60px] bg-slate-400 rounded-[6px] mb-2'></div>
                        </div>
                        </div>
                        <div className='absolute bottom-0 ml-auto mr-auto py-[10px] cursor-pointer hover:brightness-[84%] active:scale-[0.98] w-full px-[20px] h-max bg-bgMongo text-white flex items-center justify-center'>
                            With animate
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
  )
}

export default Contents
