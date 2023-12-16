import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { BsDiscord } from "react-icons/bs";
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
      <div className='flex justify-between items-center h-24 max-w-[1500px] mx-auto px-4 text-white mt-2 font-bold'>
        <a href="/">
          <div className='mt-6 flex flex-row items-center'>
            <img src="images/LOGO.png" alt="logo" className='max-w-16 max-h-16 mr-2' />
            <h1 className='text-4xl text-[#fa7cd7]'>NF</h1>
            <h1 className='text-4xl text-[#25AAE1]'>IRC</h1>
          </div>
        </a>
        <ul className='hidden : md:flex mt-6'>
          <a href="/">
            <li className='p-4 rounded-full hover:border-x-2 border-[#25AAE1]'>主頁</li>
          </a>
          <a href="/founder">
            <li className='p-4 rounded-xl hover:border-x-2 border-[#fa7cd7]'>創辦團隊</li>
          </a>
          <a href="/faq">
            <li className='p-4 rounded hover:border-x-2 hover: border-[#fa7cd7]'>FAQ 問題集</li>
          </a>          
          <a href="/link">
            <li className='p-4 rounded-2xl hover:border-x-2 hover: border-[#25AAE1]'>相關連結</li>
          </a>
          <a href="/contact">
              <li className='p-4 rounded-lg hover:border-x-2 border-[#25AAE1]'>聯繫我們</li>
          </a>
          <a href="https://discord.gg/67uVqs9jAU" target='_blank' rel='noopener noreferrer'>
            <div className='bg-[#5567E3] py-3 px-4 mt-1 rounded hover:bg-[#6F86D4] flex items-center'>
              <p>Discord 社群</p>
              <BsDiscord size={20} className="ml-2 mt-1"/>
            </div>
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
            <a href="/founder">
              <li className='p-4 border-b border-gray-600'>創辦團隊</li>
            </a>
            <a href="/contact">
              <li className='p-4 border-b border-gray-600'>聯繫我們</li>
            </a>
            <a href="/link">
              <li className='p-4 border-b border-gray-600'>相關連結</li>
            </a>
            <a href="/faq">
              <li className='p-4 border-b border-gray-600'>FAQ 問題集</li>
            </a>
            <a href="https://discord.gg/67uVqs9jAU" target='_blank' rel='noopener noreferrer'>
              <div className='bg-[#5567E3] py-3 px-6 mt-1 rounded hover:bg-[#6F86D4] flex items-center text-center'>
                <BsDiscord size={24} className="mt-1"/>
                <p className='ml-2'>Discord 社群</p>
              </div>
            </a>
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default Navbar