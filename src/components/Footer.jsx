import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { AiOutlineFileText,AiOutlinePlus } from 'react-icons/ai'; 
import { BiLinkAlt } from 'react-icons/bi';
import styles from '../styles'
import { motion } from 'framer-motion'
import { footerVariants } from '../utils/motion'

const Footer = () => {
  return (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
    viewport={{ once: true, amount: 0.3}}
  >
    {/* <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}> */}
    {/* </div> */}
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10 " />
        <h4 className="w-full text-xl font-bold text-[#fa7cd7] text-center">ASHS.NUTN</h4>
        <h4 className="w-full text-xl font-bold text-[#7cc8fa] text-center">CSIRC</h4>
        <div className="flex items-center justify-center flex-wrap gap-4">
          <p className="w-full font-normal text-[14px] text-white opacity-50 text-center items-center">
            Since 2023
          </p>
          <div className="flex gap-4">
            <a href='https://www.instagram.com/ashs.nutn_csirc/' target='_blank' rel='noopener noreferrer'>                
              <FaInstagram className="w-[24px] h-[24px] object-contain cursor-pointer rounded-md bg-[#DA2E69]"/>
            </a>
            <a href='https://hackmd.io/@YuDong/ashsnutn_csirc' target='_blank' rel='noopener noreferrer'>                
              <AiOutlineFileText className="w-[24px] h-[24px] object-contain cursor-pointer rounded-md bg-[#f8ff98]"/>
            </a>
            <a href='/link' rel='noopener noreferrer'>                
              <BiLinkAlt className="w-[24px] h-[24px] object-contain cursor-pointer rounded-md bg-[#7ddaff]"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
  )
}

export default Footer