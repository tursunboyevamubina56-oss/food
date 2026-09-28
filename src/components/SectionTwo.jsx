import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";
import salad from '../assets/salad.png'
const SectionTwo = () => {
  return (
    <div>
      

         <div className=' flex justify-between items-center mb-20 '>
        <div>
            <strong className='text-red-600 ml-30'>Special Dishes</strong>
            <h1 className='text-4xl font-bold text-black leading-10 ml-30'>Standout Dishes <br /> From Our Menu</h1>
       </div>
            <div className=' flex justify-center items-center gap-5 mr-20'>
                <button className='h-15 w-15 rounded-4xl shadow-lg shadow-gray-400 flex justify-center items-center'><FaChevronLeft /></button>
                <button className='h-15 w-15 rounded-4xl shadow-lg shadow-gray-400 flex justify-center items-center'> <FaAngleRight />
</button>
            </div>
         </div>

         <div className='flex justify-center items-center gap-20 mb-30'>
                       <div className=' h-90 w-70 shadow-lg shadow-gray-400 rounded-2xl'>
                            <div className='h-10 w-10 rounded-bl-[32px] rounded-tr-2xl ml-60 bg-green-400 flex justify-center items-center'>
                                 <FaRegHeart className='text-white' />
                            </div>

                            <img src={salad} alt=""  className='pt-2 ml-15 h-40 w-40'/>
                       <div className='pt-10 pl-10'> 
                        <h1 className='font-bold text-black'>Fattoush salad</h1>
                        <p>Description of the item</p>
                       </div>
                       <div className="flex justify-around items-center gap-20 pt-10">
                        <div className="flex justify-center items-center">
                             <MdOutlineAttachMoney className='text-red-700' />
                             <p className='text-black font-bold'>24.00</p>
                        </div>
                        <div className="flex justify-center items-center gap-2">
                            <FaStar  className='text-yellow-300'/>
                            <p className='text-black font-bold'>4.9</p>
                        </div>
                       </div>
                       </div>


                             <div className=' h-90 w-70 shadow-lg shadow-gray-400 rounded-2xl'>
                            <div className='h-10 w-10 rounded-bl-[32px] rounded-tr-2xl ml-60 bg-green-400 flex justify-center items-center'>
                                 <FaRegHeart className='text-white' />
                            </div>

                           <img src={salad} alt=""  className='pt-2 ml-15 h-40 w-40'/>
                       <div className='pt-10 pl-10'> 
                        <h1 className='font-bold text-black'>Fattoush salad</h1>
                        <p>Description of the item</p>
                       </div>
                       <div className="flex justify-around items-center gap-20 pt-10">
                        <div className="flex justify-center items-center">
                             <MdOutlineAttachMoney className='text-red-700' />
                             <p className='text-black font-bold'>24.00</p>
                        </div>
                        <div className="flex justify-center items-center gap-2">
                            <FaStar  className='text-yellow-300'/>
                            <p className='text-black font-bold'>4.9</p>
                        </div>
                       </div>
                       </div>


                             <div className=' h-90 w-70 shadow-lg shadow-gray-400 rounded-2xl'>
                            <div className='h-10 w-10 rounded-bl-[32px] rounded-tr-2xl ml-60 bg-green-400 flex justify-center items-center'>
                                 <FaRegHeart className='text-white' />
                            </div>

                            <img src={salad} alt=""  className='pt-2 ml-15 h-40 w-40'/>
                       <div className='pt-10 pl-10'> 
                        <h1 className='font-bold text-black'>Fattoush salad</h1>
                        <p>Description of the item</p>
                       </div>
                       <div className="flex justify-around items-center gap-20 pt-10">
                        <div className="flex justify-center items-center">
                             <MdOutlineAttachMoney className='text-red-700' />
                             <p className='text-black font-bold'>24.00</p>
                        </div>
                        <div className="flex justify-center items-center gap-2">
                            <FaStar  className='text-yellow-300'/>
                            <p className='text-black font-bold'>4.9</p>
                        </div>
                       </div>
                       </div>

                       
         </div>

    </div>
  )
}

export default SectionTwo
