import React from 'react'
import burger from '../assets/burger.png'
const SectionOne = () => {
  return (
    <div>
      <strong className='text-red-700 font-bold mt-30 ml-170 '>Customer Favorites</strong>
      <h1 className='text-3xl text-center text-black font-bold pt-5 mb-30'>Popular Categories</h1>
    
        <div className='flex justify-center items-center gap-10 mb-50'>
            <div className='flex-col flex justify-center items-center gap-5 h-60 w-60 shadow-lg shadow-gray-500/50 rounded-4xl'>
                  <div className='bg-green-300 rounded-4xl h-25 w-25 '>
                   <img src={burger} alt="" />
                </div>
                  <h1 className='font-bold text-black'>Main Dish</h1>
                  <p className='text-gray-500'>(86 dishes)</p>
            </div>

             <div className='flex-col flex justify-center items-center gap-5 h-60 w-60 shadow-lg shadow-gray-500/50 rounded-4xl'>
                  <div className='bg-green-300 rounded-4xl h-25 w-25 '>
                        <img src={burger} alt="" />
                  </div>
                  <h1 className='font-bold text-black'>Main Dish</h1>
                  <p className='text-gray-500'>(86 dishes)</p>
            </div>

             <div className='flex-col flex justify-center items-center gap-5 h-60 w-60 shadow-lg shadow-gray-500/50 rounded-4xl'>
                  <div className='bg-green-300 rounded-4xl h-25 w-25 '>
                        <img src={burger} alt="" />
                  </div>
                  <h1 className='font-bold text-black'>Main Dish</h1>
                  <p className='text-gray-500'>(86 dishes)</p>
            </div>

             <div className='flex-col flex justify-center items-center gap-5 h-60 w-60 shadow-lg shadow-gray-500/50 rounded-4xl'>
                  <div className='bg-green-300 rounded-4xl h-25 w-25 '>
                        <img src={burger} alt="" />
                  </div>
                  <h1 className='font-bold text-black'>Main Dish</h1>
                  <p className='text-gray-500'>(86 dishes)</p>
            </div>
        </div>
    </div>
  )
}

export default SectionOne
