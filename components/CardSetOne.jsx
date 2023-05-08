import React from 'react';
import { useRouter } from "next/router";

function CardSetOne() {

    const router = useRouter();

  return (
    <div className='flex md:flex-row flex-col w-full h-contain bg-[#e5e7eb] mb-10 md:h-[60vh] md:space-x-6'>
        <div className='flex items-center justify-center w-full md:flex-row flex-col md:m-10 m-0 md:h-[40vh] h-contain font-montserrat md:space-x-8 md:space-y-0 space-y-10'>
            <div className='flex-1 bg-white md:h-full w-full md:py-0 py-32 flex items-center justify-center'>
                Advertisement of Website Goes here...
            </div>
            <div className='flex flex-col md:w-[300px] w-[80%] h-full rounded-lg'
            onClick={() => {
                router.push("https://healthneutron.com/blogs/", undefined, { target: '_blank' })
            }}
            >
                <div className='rounded-lg'>
                    <img src="/Healthneutron Preventive Journey.jpg" alt="Blog Image" />
                </div>
                <div className='mx-auto bg-[#62276a] text-white rounded-sm md:mt-[-120px] mt-2 md:shadow-lg md:px-3 px-10 md:text-sm md:py-1 py-2 hover:cursor-pointer hover:bg-[#f7ca00] hover:text-[#62276a] md:mb-0 mb-10'
                >
                    Read Blog
                </div>
            </div>
        </div>
        {/* <div className='bg-white w-[300px] h-[400px] p-5 space-y-2'>
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
        </div> */}
    </div>
  )
}

export default CardSetOne