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
      <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white mt-2 font-bold'>
        <a href="/">
          <div className='mt-6 flex flex-row items-center'>
            <img src="images/LOGO.png" alt="logo" className='max-w-16 max-h-16 mr-2' />
            <h1 className='text-4xl text-[#fa7cd7]'>NF</h1>
            <h1 className='text-4xl text-[#25AAE1]'>IRC</h1>
          </div>
        </a>
        <ul className='hidden : md:flex mt-6'>
          <a href="/">
            <li className='p-4 rounded-full hover:border-y-4 border-[#25AAE1]'>主頁</li>
          </a>
          <a href="/link">
            <li className='p-4 rounded-full hover:border-y-4 hover: border-[#fa7cd7]'>連結</li>
          </a>
          <a href="/founder">
            <li className='p-4 rounded-full hover:border-y-4 border-[#25AAE1]'>創辦團隊</li>
          </a>
          <a href="/contact">
              <li className='p-4 rounded-full hover:border-y-4 border-[#fa7cd7]'>與我們聯繫</li>
          </a>
        </ul>
        <div onClick={handleNav} className='block md:hidden mt-5'>
          {!nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/> }
        </div>
        <div className={!nav ? 'z-10 flex flex-col absolute left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500  md:hidden' : 'fixed left-[-100%] top-0 ease-in duration-500 block'}>
          <h2 className='text-3xl font-bold text-[#fa7cd7] m-4 mt-10'>南大附中<br/><div className='text-[#25AAE1]'>資研社</div></h2> 
          <ul className='uppercase p-4'>
            <a href="/">
              <li className='p-4 border-b border-gray-600'>主頁</li>
            </a>
            <a href="/link">
              <li className='p-4 border-b border-gray-600'>連結</li>
            </a>
            <a href="/founder">
              <li className='p-4 border-b border-gray-600'>創辦團隊</li>
            </a>
            <a href="/contact">
              <li className='p-4 '>與我們聯繫</li>
            </a>
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default Navbar