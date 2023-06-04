import React from 'react'

const Input = ({onChange, type, placeholder, name, value}) => {
  switch(type) {
    case "number":
        return (
        <div className={`rounded-md shadow-lg border border-[1]`}>
            <input 
                type="number" 
                name={name} 
                value={value}
                onChange={onChange} 
                className='h-full shadow-saweria border border-2 rounded-sm border-black font-normal text-[14px] py-2 pl-2 w-full outline-none border-none' 
                placeholder={placeholder} 
            />
        </div>
      )
    case "password":
        return (
        <div className={`rounded-md shadow-lg border border-[1]`}>
            <input 
                type="password" 
                name={name} 
                value={value}
                onChange={onChange} 
                className='h-full shadow-saweria border border-2 rounded-sm border-black font-normal text-[14px] py-2 pl-2 w-full outline-none border-none' 
                placeholder={placeholder} 
            />  
        </div>
      )
      default :
      return (
        <div className={`pl-1 pr-3 shadow-sm rounded-md border-white border border-[1]`}>
            <input 
                type="text" 
                name={name} 
                value={value}
                onChange={onChange} 
                className='h-full shadow-saweria border border-2 rounded-sm border-black font-normal text-[14px] py-2 pl-2 w-full outline-none border-none' 
                placeholder={placeholder} 
            />
        </div>
      )
  }
}

export default Input
