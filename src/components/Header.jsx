import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaPhone } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import food from '../assets/food.png'
import firstone from '../assets/firstone.png'
const Header = () => {
  return (
    <div>
      
      <nav className=' flex justify-around items-center  h-30'>
        <img src={food} alt="" />
        <ul className=' flex justify-center items-center gap-10'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Servisec</a></li>
            <li><a href="#">Offers</a></li>
        </ul>
         
         <div className='flex justify-center items-center gap-10'>
 
        <p>
            <CiSearch className='text-2xl' />
        </p>

        <button className='h-10 w-30 bg-green-600 rounded-3xl text-white flex justify-center items-center  gap-1'><FaPhone  className='text-white'/>Contacts</button>

         </div>
      
      </nav>

      <header className='flex justify-center items-center gap-50 mb-50'>
              
            <div>
                <h1 className='text-5xl text-black font-bold leading-15'>Dive into Delights <br />
                 Of Delectable <span className='text-5xl text-green-700'> Food</span></h1>
                 <p className='text-2xl mt-10'>Where Each Plate Weaves a Story of Culinary <br />
                  Mastery and Passionate Craftsmanship</p>

                  <div className='flex justify-center items-center gap-20 mt-10'>
                         <button className='h-15 w-35 rounded-4xl bg-green-500  shadow-lg shadow-green-500/50 text-white font-bold'>Order One</button>
                         <h2 className='text-2xl font-bold text-black'>Watch video</h2>
                         <button className='rounded-4xl shadow-lg shadow-gray-400 h-15 w-15 flex justify-center items-center'><FaPlay /></button>

                  </div>
            </div>

            <div>
                 <img src={firstone} alt="" />
            </div>

      </header>

    </div>
  )
}

export default Header
