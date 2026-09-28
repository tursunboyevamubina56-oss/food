import React from 'react'
import { LuSalad } from "react-icons/lu";
import { LuAlarmClockCheck } from "react-icons/lu";
import { BiCartAlt } from "react-icons/bi";
import { GoGift } from "react-icons/go";
import secondone from '../assets/secondone.png'
const Main = () => {
  return (
    <div>
      <div className="flex justify-center items-center gap-60 mb-30">
        <div>
            <img src={secondone} alt="" />
        </div>

        <div>
            <h3 className='text-red-600 mb-5'>Testimonials</h3>
            <h1 className="text-4xl font-bold text-black mb-10">What Our Customers <br />
             Say About Us</h1>
             <p className='text-gray-500 mb-10'>“I had the pleasure of dining at Foodi last night, and <br />
              I'm still raving about the experience! The attention to <br />
               detail in presentation and service was impeccable”</p>
            
        </div>
      </div>

      <div className="flex justify-center items-center gap-60 mb-30">
        <div>
            <h3 className="text-red-500 mb-5">Our Story & Services</h3>
            <h1 className="text-4xl font-bold text-black mb-10">Our Culinary Journey  <br />
            And Services</h1>
            <p className='text-gray-500 mb-10'>“I had the pleasure of dining at Foodi last night, and <br />
              I'm still raving about the experience! The attention to <br />
               detail in presentation and service was impeccable”</p>
            <button className='h-10 w-30 rounded-4xl bg-green-400 text-white font-bold'>Explore</button>
        </div>
        <div>
            <div className='flex justify-center items-center gap-10 mb-10'>
                    <div className='h-55 w-50  rounded-2xl shadow-lg shadow-gray-400'>
                         <LuSalad className='text-green-400 text-6xl ml-17' />
                         <h1 className='text-green-400  font-bold text-2xl ml-12 mb-5'>Creating</h1>
                         <p className='ml-7 text-gray-500 text'>Delight your guests <br />
                          with our flavors <br />
                           and  presentation</p>
                    </div>

                       <div className='h-55 w-50  rounded-2xl shadow-lg shadow-gray-400'>
                         <LuAlarmClockCheck  className='text-green-400 text-6xl ml-17 '/>
                         <h1 className='text-green-400  font-bold text-2xl ml-12 mb-5'>Creating</h1>
                         <p className='ml-7 text-gray-500 text'>Delight your guests <br />
                          with our flavors <br />
                           and  presentation</p>
                    </div>
            </div>

               <div className='flex justify-center items-center gap-10'>
                    <div className='h-55 w-50  rounded-2xl shadow-lg shadow-gray-400'>
                         <BiCartAlt  className='text-green-400 text-6xl ml-17'/>
                         <h1 className='text-green-400  font-bold text-2xl ml-12 mb-5'>Creating</h1>
                         <p className='ml-7 text-gray-500 text'>Delight your guests <br />
                          with our flavors <br />
                           and  presentation</p>
                    </div>

                       <div className='h-55 w-50  rounded-2xl shadow-lg shadow-gray-400'>
                         <GoGift className='text-green-400 text-6xl ml-17'/>
                         <h1 className='text-green-400  font-bold text-2xl ml-12 mb-5'>Creating</h1>
                         <p className='ml-7 text-gray-500 text'>Delight your guests <br />
                          with our flavors <br />
                           and  presentation</p>
                    </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Main
