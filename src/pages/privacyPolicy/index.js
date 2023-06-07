import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../component'
import { Footer } from '../../component/layout'

const ServicePolicy = () => {

    const navigate = useNavigate()
    
    return (
    <div className='w-screen h-max bg-bgMongo'>
       {/* Annouchment */}
        <div className='w-screen relative lg:shadow-none shadow-lg z-20 lg:z-[0] overflow-hidden font-normal bg-white py-2 h-max lg:h-max text-white text-center flex items-center justify-center'>
            <div>
                <p className='font-normal text-[12px] lg:text-[16px] mt-auto text-mongo relative top-2'>Dragme from Indonesia - Product for build web 🔥🇮🇩</p>
            </div>
            <div className='lg:flex ml-6 items-center hidden'>
                <Button onClick={() => navigate('/signIn')} text={"Sign in"} style={"mr-3"} padding={"py-1 px-4"} textColor='text-mongo' type={"outline"} />
                <Button onClick={() => navigate('/signUp')} text={"Sign up"} padding={"py-1 px-4"} />
            </div>
        </div>
        {/* Annouchment */}
        <div className='lg:w-[80vw] mb-10 lg:mb-20 bg-white shadow-lg rounded-lg pt-12 pb-[90px] px-9 w-screen h-max bg-white flex ml-auto mr-auto py-[40px] flex-col justify-center justify-center'>
            
            <h1 className='font-normal lg:text-center mb-[40px] text-[32px] lg:text-[50px] text-dakMongo'>Privacy Policy</h1>

            <p className='text-[14px] w-[94%] lg:w-[90%] lg:text-[16px] mb-4 w-[80%] font-normal leading-[1.5em]'>At Dragme, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you use our web application.</p>
            <hr />
            <h2 className='text-[28px] font-bold mt-3 mb-4 text-darkMongo'>Information We Collect</h2>

            <p className='text-[14px] w-[94%] lg:w-[90%] lg:text-[16px] mb-4 font-normal leading-[1.5em]'>When you use our web application, we may collect the following types of personal information:</p>
            <ul>
            <li className='font-normal list-disc'>Full name</li>
            <li className='font-normal list-disc'>Email address</li>
            <li className='font-normal list-disc'>Username and password</li>
            <li className='font-normal list-disc'>Contact information (e.g., phone number, address)</li>
            <li className='font-normal list-disc'>Any other information you voluntarily provide</li>
            </ul>
            <hr />
            <h2 className='text-[28px] font-bold mt-3 mb-4 text-darkMongo'>Use of Information</h2>

            <p className='text-[14px] w-[94%] lg:w-[90%] lg:text-[16px] mb-4 font-normal leading-[1.5em]'>We use the collected information for the following purposes:</p>
            <ul>
            <li className='font-normal list-disc'>To provide and maintain our web application</li>
            <li className='font-normal list-disc'>To personalize your experience and provide tailored content</li>
            <li className='font-normal list-disc'>To improve our web application and enhance user satisfaction</li>
            <li className='font-normal list-disc'>To communicate with you and respond to your inquiries</li>
            <li className='font-normal list-disc'>To send periodic emails and updates related to our services</li>
            </ul>
            <hr />
            <h2 className='text-[28px] font-bold mt-3 mb-4 text-darkMongo'>Data Security</h2>

            <p className='text-[14px] w-[94%] lg:w-[90%] lg:text-[16px] mb-4 font-normal leading-[1.5em]'>We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the internet or electronic storage is 100% secure.</p>
            <hr />
            <h2 className='text-[28px] font-bold mt-3 mb-4 text-darkMongo'>Sharing of Information</h2>

            <p className='text-[14px] w-[94%] lg:w-[90%] lg:text-[16px] mb-4 font-normal leading-[1.5em]'>We do not sell, trade, or transfer your personal information to third parties without your consent, except as required by law or as necessary to provide our services. We may share your information with trusted third-party service providers who assist us in operating our web application and conducting our business, subject to strict confidentiality agreements.</p>
            <hr />
            <h2 className='text-[28px] font-bold mt-3 mb-4 text-darkMongo'>Cookie Policy</h2>

            <p className='text-[14px] w-[94%] lg:w-[90%] lg:text-[16px] mb-4 font-normal leading-[1.5em]'>Our web applications may use cookies to improve your browsing experience. You only have the option to accept cookies. Because we need some data that must be stored temporarily while you are logged in or using features during dragme</p>
            <hr />
            <h2 className='text-[28px] font-bold mt-3 mb-4 text-darkMongo'>Changes to Privacy Policy</h2>

            <p className='text-[14px] w-[94%] lg:w-[90%] lg:text-[16px] mb-4 font-normal leading-[1.5em]'>We reserve the right to update or modify this Privacy Policy at any time. Any changes will be effective upon posting the revised Privacy Policy on our web application. We encourage you to review this Privacy Policy periodically for any updates.</p>
            <hr />
            <p className='text-[14px] w-[94%] lg:w-[90%] lg:text-[16px] mb-4 font-normal leading-[1.5em]'>If you have any questions or concerns about our Privacy Policy, please contact us through the provided channels.</p>
        </div>   

        <Footer />
    </div>
  )
}

export default ServicePolicy
