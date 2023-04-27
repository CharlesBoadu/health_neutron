import React from 'react'

function FeaturedCategoriesCardTwo() {
  return (
    <div className='flex flex-row space-x-8 justify-evenly  mr-[80px] ml-[80px]'>
        <div className='h-[30vh] w-[350px] rounded-lg bg-gray-200 flex flex-col justify-between shadow-xl'>
            <div>
                <img src="/comprehensive_labs.jpg" alt="HEP B Image" />
            </div>
            <div className='bg-[#7d018c] text-white py-2 font-montserrat text-center font-semibold rounded-sm'>
                Comprehensive Labs
            </div>
        </div>
        <div className='h-[30vh] w-[350px] rounded-lg bg-gray-200 flex flex-col justify-between shadow-xl'>
            <div>
                <img src="/coronavirus-vaccine-composition-lab.jpg" alt="HEP B Image" />
            </div>
            <div className='bg-[#7d018c] text-white py-2 font-montserrat text-center font-semibold rounded-sm'>
                Covid 19
            </div>
        </div>
        <div className='h-[30vh] w-[350px] rounded-lg bg-gray-200 flex flex-col justify-between shadow-xl'>
            <div>
                <img src="/nurse-examining-senior-man-bed-bedroom.jpg" alt="HEP B Image" />
            </div>
            <div className='bg-[#7d018c] text-white py-2 font-montserrat text-center font-semibold rounded-sm'>
                Home Care
            </div>
        </div>
    </div>
  )
}

export default FeaturedCategoriesCardTwo