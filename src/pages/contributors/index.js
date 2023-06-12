import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../component'
import { Footer, Header } from '../../component/layout'
import Github from '../../assets/images/svg/github.svg'
import G1 from '../../assets/images/png/g1.png'
import G2 from '../../assets/images/png/g2.png'

const Contributors = () => {

    const navigate = useNavigate()

    const handleLogout = () => {

    }

    return (
    <>
        {/* Header */}
            <Header />
        {/* Header */}
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
