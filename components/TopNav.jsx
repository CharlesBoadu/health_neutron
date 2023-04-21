import React from 'react'
import { BsCart4 } from 'react-icons/bs'
import { FiSearch } from "react-icons/fi";

function TopNav() {
  return (
    <div className='bg-black py-2 flex flex-row w-full space-x-4 font-montserrat px-2'>
        <div className='flex w-[300px] text-white'>
            Health Neutron
        </div>
        <div className='flex-1 w-[600px]'>
            <input type='text' className='w-[700px] rounded-lg'/>
        </div>
        <div className='flex w-[50px] bg-[#f3a847]  justify-center items-center'>
            <FiSearch size={25}/>
        </div>
        <div className='flex flex-row w-[100px] text-white'>
            <div>
                <BsCart4 size={35}/>
            </div>
            <div className='mt-4'>
                cart
            </div>
        </div>
    </div>
  )
}

export default TopNav;