import React from 'react'
import { Button } from '../../atom'

const Header = () => {
  return (
    <header className='flex lg:min-h-[80px] lg:max-h-[70px] py-4 items-center px-[80px] justify-between'>
        <div>
            <h2 className='text-[24px]'>DragmeBuilder</h2>
        </div>
        <div>
            <ul className='flex items-center relative top-2'>
                <li className='mx-2 font-normal'>Homepage</li>
                <li className='mx-2 font-normal'>Product</li>
                <li className='mx-2 font-normal'>Pricing</li>
            </ul>
        </div>
        <div className='flex items-center'>
            <Button text={"Sign in"} style={"mr-3"} padding={"py-2 px-4"} textColor='indigo-500' type={"outline"} />
            <Button text={"Sign up"} padding={"py-2 px-4"} />
        </div>
    </header>
  )
}

export default Header
