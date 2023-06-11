import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../component'
import { Footer } from '../../component/layout'
import Github from '../../assets/images/svg/github.svg'
import G1 from '../../assets/images/png/g1.png'
import G2 from '../../assets/images/png/g2.png'

const Contributors = () => {

    const navigate = useNavigate()

    const handleLogout = () => {

    }

    return (
    <>
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
        <section className='w-full h-[93vh] bg-bgMongo lg:pb-[0px] pb-4 pt-[50px] lg:pt-[80px] text-center'>
            <h1 className='text-[43px] lg:text-[80px] w-[70%] text-white ml-auto mr-auto font-normal leading-[1.5em] mb-4'>Those who <span className='text-lightMongo'>contributed</span> to dragme</h1>
            <div className='lg:flex justify-center mt-[50px] lg:mt-[80px] w-screnn items-center'>
                <a href="https://github.com/imzzan" className='no-underline text-black' target='__blank'>
                    <div className='flex ml-auto mr-auto lg:ml-0 lg:mr-0 hover:brightness-[90%] hover:scale-[0.98] active:scale-[0.96] cursor-pointer items-center overflow-hidden justify-between w-[70vw] lg:w-max px-6 py-1 h-max bg-white rounded-full'>
                        <a href="https://github.com/imzzan" target='__blank'>
                            <div className='w-[30px] h-[30px] overflow-hidden'>
                                <img src={Github} alt="img" className='w-full h-auto cursor-pointer hover:brightness-[90%] active:scale-[0.98]' />
                            </div>
                        </a>                           
                        <p className='relative mx-4 top-2 font-normal'>imzzan</p>
                        <div className='w-[30px] h-[30px] rounded-full overflow-hidden'>
                            <img src={G1} alt="img" className='w-full h-auto cursor-pointer hover:brightness-[90%] active:scale-[0.98]' />
                        </div>
                    </div>
                </a>
                <a href="https://github.com/justnotiyann" className='no-underline text-black' target='__blank'>
                    <div className='mx-5 my-4 lg:my-0 flex ml-auto mr-auto lg:ml-0 lg:mr-0 hover:brightness-[90%] hover:scale-[0.98] active:scale-[0.96] cursor-pointer items-center overflow-hidden justify-between w-[70vw] lg:w-max px-6 py-1 h-max bg-white rounded-full'>
                        <a href="https://github.com/justnotiyann" target='__blank'>
                            <div className='w-[30px] h-[30px] overflow-hidden'>
                                <img src={Github} alt="img" className='w-full h-auto cursor-pointer hover:brightness-[90%] active:scale-[0.98]' />
                            </div>
                        </a>
                        <p className='relative mx-4 top-2 font-normal'>justnotiyann</p>
                        <div className='w-[30px] h-[30px] rounded-full overflow-hidden'>
                            <img src={G1} alt="img" className='w-full h-auto cursor-pointer hover:brightness-[90%] active:scale-[0.98]' />
                        </div>
                    </div>
                </a>
                <a href="https://github.com/khoirulhudaa" className='no-underline text-black' target='__blank'>
                    <div className='flex ml-auto mr-auto lg:ml-0 lg:mr-0 hover:brightness-[90%] hover:scale-[0.98] active:scale-[0.96] cursor-pointer items-center overflow-hidden justify-between w-max lg:w-max px-6 py-1 h-max bg-white rounded-full'>
                        <a href="https://github.com/khoirulhudaa" target='__blank'>
                            <div className='w-[30px] h-[30px] overflow-hidden'>
                                <img src={Github} alt="img" className='w-full h-auto cursor-pointer hover:brightness-[90%] active:scale-[0.98]' />
                            </div>
                        </a>
                        <p className='relative mx-4 top-2 font-normal'>khoirulhudaa</p>
                        <div className='w-[30px] h-[30px] rounded-full overflow-hidden'>
                            <img src={G2} alt="img" className='w-full h-auto cursor-pointer hover:brightness-[90%] active:scale-[0.98]' />
                        </div>
                    </div>
                </a>
            </div>
        </section>

        <Footer />
    </>
  )
}

export default Contributors
