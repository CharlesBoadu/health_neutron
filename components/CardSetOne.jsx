import React from 'react'

function CardSetOne() {
  return (
    <div className='flex flex-row bg-[#e3e6e6] pl-10 pr-10 space-x-6 pt-20 z-1 pb-10'>
        <div className='bg-white w-[300px] h-[400px] p-5 space-y-2'>
            <div className='flex text-black font-montserrat font-bold text-lg'>
                Heading 1
            </div>
            <div className='flex-1 '>
                <img src={"https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80"} alt="Item 1" 
                className='w-contain h-[300px]'
                />
            </div>
            <div className='flex text-sm text-blue-600'>
                See more
            </div>
        </div>
        <div className='bg-white w-[300px] h-[400px] p-5 space-y-2'>
            <div className='flex text-black font-montserrat font-bold text-lg'>
                Heading 2
            </div>
            <div className='flex-1 '>
                <img src={"https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"} alt="Item 1" 
                className='w-contain h-[300px]'
                />
            </div>
            <div className='flex text-sm text-blue-600'>
                See more
            </div>
        </div>
        <div className='bg-white w-[300px] h-[400px] p-5 space-y-2'>
            <div className='flex text-black font-montserrat font-bold text-lg'>
                Heading 3
            </div>
            <div className='flex-1 '>
                <img src={"https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80"} alt="Item 1" 
                className='w-contain h-[300px]'
                />
            </div>
            <div className='flex text-sm text-blue-600'>
                See more
            </div>
        </div>
        <div className='bg-white w-[300px] h-[400px] p-5 space-y-2'>
            <div className='flex text-black font-montserrat font-bold text-lg'>
                Heading 4
            </div>
            <div className='flex-1 '>
                <img src={"https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80"} alt="Item 1" 
                className='w-contain h-[300px]'
                />
            </div>
            <div className='flex text-sm text-blue-600'>
                See more
            </div>
        </div>
    </div>
  )
}

export default CardSetOne