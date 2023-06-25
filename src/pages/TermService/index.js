import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Footer, Header, HeaderBasic } from '../../component/layout'
import Cookies from 'js-cookie'

const TermService = () => {

    const navigate = useNavigate()
    
    return (
    <div className='w-screen h-max bg-bgMongo'>
         {
        Cookies.get('status') ? (
          <Header />
        ):
          <HeaderBasic />
      }
        <div className='lg:w-[80vw] lg:mb-20 mb-10 bg-white shadow-lg rounded-lg pt-12 pb-[90px] px-9 w-screen h-max bg-white flex ml-auto mr-auto py-[40px] flex-col justify-center justify-center'>
            
            <h1 className='font-normal lg:text-center mb-[40px] text-[32px] lg:text-[50px] text-dakMongo'>Terms of Service</h1>

            <p className='text-[14px] w-[94%] lg:w-[90%] lg:text-[16px] mb-4 w-[80%] font-normal leading-[1.5em]'>By accessing and using our web application, you agree to comply with and be bound by the following terms and conditions. Please read these terms carefully before using our services.</p>
            <hr />
            <h2 className='text-[28px] font-bold mt-3 mb-4 text-darkMongo'>Use of the Web Application</h2>

            <p className='text-[14px] w-[94%] lg:w-[90%] lg:text-[16px] mb-4 font-normal leading-[1.5em]'>Our web application and its contents are intended for general informational purposes only. You may use our web application solely for lawful purposes and in accordance with these terms and any applicable laws and regulations.</p>
        
            <hr />
            <h2 className='text-[28px] font-bold mt-3 mb-4 text-darkMongo'>Intellectual Property Rights</h2>

            <p className='text-[14px] w-[94%] lg:w-[90%] lg:text-[16px] mb-4 font-normal leading-[1.5em]'>The content, features, and functionality of our web application, including but not limited to text, graphics, logos, icons, images, audio clips, video clips, and software, are the property of Swiftvel and are protected by applicable intellectual property laws.</p>
           
            <hr />
            <h2 className='text-[28px] font-bold mt-3 mb-4 text-darkMongo'>Prohibited Activities</h2>

            <p className='text-[14px] w-[94%] lg:w-[90%] lg:text-[16px] mb-4 font-normal leading-[1.5em]'>When using our web application, you agree not to engage in the following activities:</p>
            <ul className='relative ml-5 mb-4'>
                <li className='font-normal list-disc'>Violating any applicable laws or regulations</li>
                <li className='font-normal list-disc'>Interfering with or disrupting the security or integrity of our web application</li>
                <li className='font-normal list-disc'>Impersonating any person or entity or falsely stating or otherwise misrepresenting your affiliation with a person or entity</li>
                <li className='font-normal list-disc'>Collecting or storing personal information of other users without their consent</li>
                <li className='font-normal list-disc'>Uploading or transmitting any viruses, worms, or other malicious code</li>
                <li className='font-normal list-disc'>Using any automated system, including but not limited to robots, spiders, or scrapers, to access or interact with our web application</li>
            </ul>
            <hr />
            <h2 className='text-[28px] font-bold mt-3 mb-4 text-darkMongo'>Disclaimer of Warranty</h2>

            <p className='text-[14px] w-[94%] lg:w-[90%] lg:text-[16px] mb-4 font-normal leading-[1.5em]'>Our web application is provided on an "as is" and "as available" basis without any warranties, express or implied. We do not guarantee that our web application will be free from errors, viruses, or other harmful components.</p>
            <hr />
            <h2 className='text-[28px] font-bold mt-3 mb-4 text-darkMongo'>Limitation of Liability</h2>

            <p className='text-[14px] w-[94%] lg:w-[90%] lg:text-[16px] mb-4 font-normal leading-[1.5em]'>In no event shall Swiftvel or its directors, employees, or affiliates be liable for any indirect, consequential, special, or incidental damages arising out of or related to your use of our web application.</p>
            <hr />
            <h2 className='text-[28px] font-bold mt-3 mb-4 text-darkMongo'>Changes to the Terms</h2>

            <p className='text-[14px] w-[94%] lg:w-[90%] lg:text-[16px] mb-4 font-normal leading-[1.5em]'>We reserve the right to modify or update these terms at any time. By continuing to use our web application after any changes, you agree to be bound by the revised terms. It is your responsibility to review the terms periodically for any updates.</p>
            <hr />
            <p className='text-[14px] w-[94%] lg:w-[90%] lg:text-[16px] mb-4 font-normal leading-[1.5em]'>If you have any questions or concerns about these terms, please contact us through the provided channels.</p>
        </div>      

        <Footer />
    </div>
  )
}

export default TermService
