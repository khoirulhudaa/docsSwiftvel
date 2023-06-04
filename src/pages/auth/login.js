import React, { useEffect, useState } from 'react'
import {Button, Input} from '../../component/'
import bgLine from '../../assets/images/svg/bgLine.svg'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const BASE_URL = 'https://api-dragme.vercel.app/api/users'  
  const navigate = useNavigate()
  
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [textError, setTextError] = useState("SIGN IN")

  const handleSubmit = async(e) => {
    e.preventDefault()

    try {
      const response = await fetch(`${BASE_URL}/signIn`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.status;
      if(data === 200) {
        navigate('/')
      }else if(data === 401) {
        setTextError("WERONG PAZZWOT!")
      }else {
        setTextError("USER NOT-FON")
      }
      // Store the token in localStorage or cookies
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='w-screen h-[100vh] flex items-center justify-center overflow-hidden'>
      <div className='bg-indigo-500 absolute ml-auto mr-auto flex w-full h-full z-[-1]'>
        <img src={bgLine} alt="bg" className='w-full h-full absolute ml-auto mr-auto flex' />
      </div>
      <div className='w-[80%] relative h-[100vh] flex items-center justify-center ml-auto'>
        <div className={`userSI text-[20px] ${textError == 'SIGN IN' ? "bg-indigo-500" : ""} absolute left-[200px] top-[160px] font-normal w-max h-max border rotate-[25deg] border-white rounded-sm text-center text-white px-6 py-3`}>
          SIGN IN
        </div>
        <div className={`userWP text-[20px] ${textError == 'WERONG PAZZWOT!' ? "bg-red-400 text-white" : ""} absolute top-[200px] left-[-200px] font-normal w-max h-max text-white border rotate-[-40deg] border-white rounded-sm px-6 py-3`}>
          WERONG PAZZWOT!
        </div>
        <div className={`userNF text-[20px] ${textError == 'USER NOT-FON' ? "bg-red-400" : ""} absolute left-[180px] font-normal w-max h-max bottom-[170px] text-white border rotate-[-50deg] border-white rounded-sm text-center px-6 py-3`}>
          USER NOT-FON
        </div>
        <div className='userTME text-[16px] absolute left-[-100px] font-normal w-max h-max bottom-[170px] border rotate-[-50deg] border-white rounded-sm text-center text-white px-6 py-3'>
          TU MENY ETEMPS
        </div>
        <div className='w-[44%] h-[70vh] bg-white flex rounded-lg ml-auto flex mr-[150px] shadow-lg flex items-center'>
          <div className='w-[44%] border border-black border-[1px] h-[100%] p-2 flex flex-col items-center justify-center text-center'>
              <p className='textStroke text-stroke relative text-[50px]'>1440</p>
              <p className='textStroke text-stroke relative top-[-12px] text-[50px]'>1440</p>
              <p className='textStroke text-stroke relative top-[-12px] text-[50px]'>1440</p>
              <p className='textStroke text-stroke relative top-[-12px] text-[50px]'>1440</p>
              <Button onClick={(e) => handleSubmit(e)} text="Sign in" padding={'px-[28px] py-2'} />
          </div>
          <div className='w-[50%] h-[100%] p-2 overflow-hidden'>
              <div className='w-full p-2 mb-4 mt-4'>
                  <label htmlFor="username" className='mb-1 font-normal'>Username</label>
                  <Input id='username' name="username" placeholder="Masukan password" value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className='w-[100%] w-full p-2'>
                  <label htmlFor="password" className='mb-1 font-normal'>Password</label>
                  <Input id='password' name="password" type="password" placeholder={'Masukan password'} value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <small className='text-[12px] font-normal left-4 top-4 relative'>Don't have an account yet? <span className='text-blue-500 cursor-pointer hover:text-blue-400' onClick={() => navigate('/signUp')}>signup</span></small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
