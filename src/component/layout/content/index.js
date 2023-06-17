import Aos from 'aos';
import 'aos/dist/aos.css';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Wave from '../../../assets/images/png/wave.png';
import Benefit1 from '../../../assets/images/svg/benefit1.svg';
import Benefit2 from '../../../assets/images/svg/benefit2.svg';
import Benefit3 from '../../../assets/images/svg/benefit3.svg';
import Component1 from '../../../assets/images/svg/component1.png';
import Fast from '../../../assets/images/svg/fast.svg';
import Flexibel from '../../../assets/images/svg/flexibel.svg';
import Petik from '../../../assets/images/svg/petik.svg';
import Powerful from '../../../assets/images/svg/powerful.svg';
import Right from '../../../assets/images/svg/right.svg';
import Tutor from '../../../assets/images/svg/tutor.svg';
import Partner from '../../../assets/images/svg/v.svg';
import Wave2 from '../../../assets/images/svg/wave.svg';

const Contents = () => {

    const navigate = useNavigate()
    const [feedback, setFeedback] = useState('');

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
        await fetch(`${BASE_URL}/create`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ feedback }),
        })
        .then((response) => response.json())
        .then((data) => {
          // Process the received data
          console.log('reponse login:', data)
          if(data.status === 201) {
            Swal.fire(
                'Thank you for the suggestion',
                'We want to be better than now:)',
                'success'
            )
          }else {
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
          console.error('Error retrieving data', error);
        });
    }

    const handleChangeFeed = (e) => {
        setFeedback(e.target.value)
    }
    
return (
    <div className='relative h-max mt-[60px] 2xl:mt-[120px] lg:mt-[70px]'>
        <img src={Wave2} className='absolute hidden opacity-[0.5] lg:inline w-[100%] z-[-1] top-0 left-0' alt="img" />
        <div className='w-[40px] h-[40px] bg-mongo rounded-full absolute bottom-7 right-8 shadow-lg'>
        </div>
        <section className='lg:flex h-max relative overflow-hidden lg:min-h-[300px] mb-[70px] lg:px-[120px] lg:ml-6 w-screen lg:w-full items-center mt-0 lg:mt-14 justify-between'>
            <img src={Powerful} className='w-[55%] 2xl:w-[400px] flex ml-auto mr-auto lg:ml-0 lg:mr-0 lg:w-[280px] rotate-[-10deg]' alt="icon" />
            <div data-aos-duration='1000' className='relative bottom-2 hidden lg:block lg:ml-[40px] lg:mr-0 ml-auto mr-auto w-[90%] lg:w-[65%] lg:mt-0 mt-[40px] items-center h-max overflow-hidden lg:h-[270px] 2xl:h-[340px] pl-10 pr-4 py-7'>
                <h1 className='text-[44px] 2xl:text-[62px] leading-[1.5em] w-[100%] text-black'>Many components and there is a choice of code language</h1>
                <p className='text-slate-500 leading-[2em] lg:ml-1 text-[15px] 2xl:text-[22px] font-normal w-[70%] 2xl:w-[90%] mt-4'>We make it easy for anyone to create a website in order to meet the needs of every business. And we want to spoil those who are not very good at making web</p>
            </div>
        </section>

        <section className='w-full h-max relative z-[20] flex flex-col mt-[70px] 2xl:mt-[150px] lg:mt-[95px] items-center justify-center'>
            <div className='rounded-full text-white text-[15px] mb-[25px] font-normal w-[57%] lg:w-max h-max px-3 py-1 text-center bg-green-500 shadow-lg'>
                Benefits for you!  
            </div>
            <h2 className='font-600 text-[36px] lg:text-[50px] 2xl:text-[70px] lg:text-left text-center' data-aos-duration='1000'>Success website</h2>
            <p data-aos-duration='500' className='text-[14px] 2xl:text-[22px] font-normal w-[88%] 2xl:w-[50%] lg:w-[45%] mt-4 text-center text-slate-500 leading-7 lg:leading-8 2xl:leading-[2.2em]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae exercitationem ullam cumque iure officia earum minus fugit quas at quidem. Cumque.</p>
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
                <div data-aos-duration='1000' className='h-[100%] lg:mt-0 mt-[20px] relative overflow-hidden w-[100%] lg:w-[49%] bg-[#EDF5FE] rounded-[20px] p-2'>
                    <div className='relative lg:left-[30px] top-[-30px] lg:top-[-14px]'>
                        <img src={Fast} className='absolute left-8 bottom-[200px] w-[30px]' alt="icon" />
                        <h2 className='text-black text-[32px] lg:text-[44px] 2xl:text-[52px] font-bold mb-3 ml-8 mt-[140px]'>Faster</h2>
                        <p className='text-black font-normal 2xl:leading-10 leading-6 ml-8 lg:mt-8 text-[15px] 2xl:text-[18px] w-[80%] lg:w-[65%]'>Be fast in creating your own website, shorten the process of working on your website and start from swiftvel</p>
                    </div>
                    <img className='hidden lg:flex absolute opacity-[0.5] w-[60%] bottom-0 left-0' src={Benefit2} alt="img" />
                </div>
                <div data-aos-duration='1000' className='h-[100%] relative overflow-hidden w-[100%] lg:mt-0 mt-[40px] lg:w-[49%] bg-[#000000] rounded-[20px] p-2'>
                    <div className='relative lg:left-[30px] top-[-30px] lg:top-[-14px]'>
                        <img src={Flexibel} className='absolute left-8 bottom-[200px] w-[30px]' alt="icon" />
                        <h2 className='text-white text-[32px] lg:text-[44px] 2xl:text-[52px] font-bold mb-3 ml-8 mt-[140px]'>Flexibel</h2>
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
            <p data-aos-duration='1000' className='font-normal lg:w-max w-[70%] text-[12px] 2xl:text-[18px] lg:text-[16px] ml-auto mr-auto text-center'>Founder & FE at Framework css - Valclass</p>
        </section>

        <section className='w-[100%] overflow-hidden rounded-br-[120px] lg:rounded-br-[200px] relative mt-[60px] 2xl:mt-[40px] pt-1 lg:pt-4 lg:mt-[100px] pb-[20px] lg:pb-[140px] h-max 2xl:pb-[280px] ml-auto mr-auto bg-[#023430]'>
            <div className='w-[90%] relative lg:w-max lg:flex relative z-10 h-max lg:h-[460px] ml-[0px] lg:ml-[120px] mt-4 lg:mt-5 rounded-md px-8 pb-8 lg:pb-8 pt-8 lg:pt-10 lg:px-2'>
               <div className='lg:h-max w-max h-max relative'>
                    <h2 className='w-[25%] lg:w-[60%] text-white font-normal text-[40px] lg:text-[70px] 2xl:text-[80px] leading-[1.4em] lg:leading-[1.6em]'>easy-to-use resources and language modes</h2>
                    <a href="/swiftvelBuilder" className='w-max text-lightMongo no-underline'>
                        <p className='text-lightMongo mt-4 w-max cursor-pointer flex items-center'>Try swiftvel now <img src={Right} className='text-indigo-500 w-[14px] ml-3' alt="icon" /></p>
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

        <section className='w-full 2xl:h-[560px] h-max pb-2 lg:pb-8 flex mt-[10px] lg:mt-[35px] flex-col justify-center items-center text-center'>
            <h1 className='text-[50px] lg:text-[65px] 2xl:text-[76px] w-[85%] lg:w-[60%] text-center text-black mt-5 mb-4 leading-[1.4em]'>Become a swiftvel premium user</h1>
            <p className='text-[15px] 2xl:text-[23px] w-[70%] lg:w-max font-normal'>Get more components that are better and varied in design</p>
            <div onClick={(e) => handlePricing(e)} className='w-[180px] 2xl:scale-[1.4] 2xl:top-[30px] 2xl:relative lg:w-max h-max font-normal cursor-pointer text-darkMongo mt-3 bg-mongo px-10 py-3 hover:brightness-[94%] text-center border-[#001E2B] border-[1px]'>
                Get now
            </div>
        </section>

        <section className='relative w-full mt-[80px] rounded-tl-[110px] rounded-br-[110px] lg:mt-[110px] pb-[70px] pt-8 lg:pt-[0] lg:pb-[30px] bg-[#023430] 2xl:h-[850px] h-max lg:flex'>
            <img src={Wave} className='absolute w-[70px] lg:w-[400px] top-0 right-0' alt="img" />
            <div className='w-[100%] lg:w-[50%] h-max p-[30px] lg:p-[120px] lg:mt-[10px]'>
                <h1 className='text-[45px] 2xl:text-[80px] lg:text-[55px] text-white w-[90%] leading-[1.4em]'>Get started with swiftvel today</h1>
                <p className='w-[100%] font-normal 2xl:text-[23px] text-slate-200 2xl:leading-[2.2em] leading-[2em] mt-4'>
                    It's easy to use and will really help you in making websites, 
                    easier than CMS and has affordable prices for premium accounts
                </p>
                <a target='__blank' href="https://api.whatsapp.com/send?phone=6289513093406&text=Hallo admin, saya swiftvelers." className='no-underline text-white'>
                    <div className='w-[180px] lg:w-max h-max font-normal cursor-pointer text-darkMongo mt-5 bg-mongo px-10 py-3 hover:brightness-[94%] text-center border-[#001E2B] border-[1px]'>
                        Call servicer
                    </div>
                </a>
            </div>
            <div className='relative w-[100%] lg:w-[50%] h-max overflow-hidden lg:h-max mt-[10px] lg:mt-[-40px] flex justify-center items-center'>
                <div className='z-10 relative rounded-[20px] p-4 mt-[30px] lg:mt-[150px] shadow-lg bg-darkMongo w-[84%] lg:w-[65%] 2xl:h-[650px] h-[100%]'>
                    <p className='text-lightMongo text-[13px] mb-5 ml-1 lg:ml-3 mt-4 lg:mt-3 font-normal'>Get started with :</p>
                    <ul className='list-none'>
                        <li className='list-none 2xl:mb-[90px] mb-[50px] lg:ml-0 ml-[-20px] flex items-center'>
                            <div className='h-[15px] w-[25px] border-[#00ED64] rotate-[-45deg] border-l-[4px] border-b-[4px]'>
                            </div>
                            <p className='text-white ml-4 lg:ml-7 text-white text-[17px] relative top-3 font-normal'>30+ Component</p>
                        </li>
                        <li className='list-none 2xl:mb-[90px] mb-[50px] lg:ml-0 ml-[-20px] flex items-center'>
                            <div className='h-[15px] w-[25px] border-[#00ED64] rotate-[-45deg] border-l-[4px] border-b-[4px]'>
                            </div>
                            <p className='text-white ml-4 lg:ml-7 text-white text-[17px] relative top-3 font-normal'>Premium account</p>
                        </li>
                        <li className='list-none 2xl:mb-[90px] mb-[50px] lg:ml-0 ml-[-20px] flex items-center'>
                            <div className='h-[15px] w-[25px] border-[#00ED64] rotate-[-45deg] border-l-[4px] border-b-[4px]'>
                            </div>
                            <p className='text-white ml-4 lg:ml-7 text-white text-[17px] relative top-3 font-normal'>Freemium account</p>
                        </li>
                        <li className='list-none 2xl:mb-[90px] mb-[50px] lg:ml-0 ml-[-20px] flex items-center'>
                            <div className='h-[15px] w-[25px] border-[#00ED64] rotate-[-45deg] border-l-[4px] border-b-[4px]'>
                            </div>
                            <p className='text-white ml-4 lg:ml-7 text-white text-[17px] relative top-3 font-normal'>Free source code</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section className='w-creen h-max pt-[40px] lg:pt-[90px] pb-[60px] lg:pb-[120px] px-4 lg:px-6 text-center jusitfy-center flex flex-col item-center'>
            <h1 className='text-[44px] lg:text-[64px] w-[90%] lg:w-[50%] ml-auto mr-auto leading-[1.5em]'>Your advice is what we need</h1>
            <div className='w-[90%] lg:w-[45vw] border-[1px] border-slate-300 flex items-center justify-center ml-auto mr-auto h-[50px] my-4 rounded-[12px] overflow-hidden bg-white shadow-lg'>
                <input type="text" name='feedback' onChange={(e) => handleChangeFeed(e)} placeholder='Type in your suggestions...' className='border-none outline-0 w-full h-max py-2 px-3 font-normal text-[15px]' />
            </div>
            <div onClick={(e) => handleFeedback(e)} className='ml-auto mr-auto w-[180px] 2xl:scale-[1.4] 2xl:top-[30px] 2xl:relative lg:w-max h-max font-normal cursor-pointer text-darkMongo mt-3 bg-mongo px-10 py-3 hover:brightness-[94%] text-center border-[#001E2B] border-[1px]'>
                Send now
            </div>
        </section>

    </div>
  )
}

export default Contents
