import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TfiTwitter } from "react-icons/tfi";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div className='flex justify-center items-center gap-60 mb-30'>

        <div>
        <div className='flex justify-center items-center gap-2'>
            <div className='h-10 w-10 bg-green-400 rounded-2xl flex justify-center items-center '><h1 className='text-white font-bold text-3xl '>F</h1></div>
            <h1 className='text-3xl text-black font-bold'>OODI</h1>
        </div>
            <div>
                <h1 className='text-gray-500 mt-20'>Savor the artistry where  <br />
                every dish is a culinary <br />
                 masterpiece</h1>
            </div>
        </div>

        <div>
            <h1 className='font-bold text-3xl text-black mb-10'>Useful links</h1>
            <h2 className='pb-5'>Aboute us</h2>
            <h2 className='pb-5'>Events</h2>
            <h2 className='pb-5'>Blogs</h2>
            <h2>FAQ</h2>
           
        </div>

             <div>
            <h1 className='font-bold text-3xl text-black mb-10'>Main Menu</h1>
            <h2 className='pb-5'>Home</h2>
            <h2 className='pb-5'>Offise</h2>
            <h2 className='pb-5'>Menu</h2>
            <h2>Reservetion</h2>
           
        </div>

         <div>
            <h1 className='font-bold text-3xl text-black mb-10'>Contact Us</h1>
            <h2 className='pb-5'>example@email.com</h2>
            <h2 className='pb-5'>+64 958 248 966</h2>
            <h2 className='pb-5'>Social media</h2>
           
        </div>

      </div>

      <div className=' flex justify-center items-center gap-50 mb-30'>
        <div className=' flex justify-center items-center gap-10'>
            <FaFacebook className=' text-green-400 text-4xl' />
            <FaInstagram  className=' text-3xl'/>
             <TfiTwitter className=' text-3xl'/>
             <FaYoutube  className=' text-3xl'/>
        </div>
        <div>
            <h1 className=' text-2xl text-gray-400'>
                Copyright       2023 Dscode | All rights reserved
            </h1>
        </div>
      </div>
    </div>
  )
}

export default Footer
