import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3}}
      className={`overflow-hidden z-50`}
    >
      {/* 未來加上Logo */}
      {/* <img className=' max-w-[64px] w-[64px] sm:w-[64px] md:w-[64px] lg:w-[64px] rounded-xl' src='/images/super2.png' alt="/" /> */}
      <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white mt-2 font-extrabold'>
        <a href="/">
          <div className='mt-6 mr-10'>
            <h1 className='min-w-[81px] w-full text-2xl text-[#fa7cd7]'>ASHS.NUTN</h1>
          </div>
          <h1 className='min-w-[81px] w-full text-3xl text-[#25AAE1]'>CSIRC</h1>
        </a>
        <ul className='hidden : md:flex'>
          <a href="/">
            <li className='p-4 rounded-full hover:border-y-2 border-[#25AAE1]'>HOME</li>
          </a>
          <a href="/link">
            <li className='p-4 rounded-full hover:border-y-2 border-[#25AAE1]'>LINK</li>
          </a>
          <a href="/founder">
            <li className='p-4 rounded-full hover:border-y-2 border-[#25AAE1]'>FOUNDER</li>
          </a>
          <a href="/contact">
              <li className='p-4 rounded-full hover:border-y-2 border-[#25AAE1]'>CONTACT</li>
          </a>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/> }
        </div>
        <div className={!nav ? 'z-10 flex flex-col absolute left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500  md:hidden' : 'fixed left-[-100%] top-0 ease-in duration-500 block'}>
          <h1 className='w-full text-3xl font-bold text-[#fc87ac] m-4 '>所有頁面</h1>
          <ul className='uppercase p-4'>
            <a href="/">
              <li className='p-4 border-b border-gray-600'>HOME</li>
            </a>
            <a href="/link">
              <li className='p-4 border-b border-gray-600'>Link</li>
            </a>
            <a href="/founder">
              <li className='p-4 border-b border-gray-600'>Founder</li>
            </a>
            <a href="/contact">
              <li className='p-4 '>Contact</li>
            </a>
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default Navbar