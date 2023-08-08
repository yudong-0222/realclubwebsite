import React from 'react'
import Typed from 'react-typed';
import { motion } from 'framer-motion';
import { staggerContainer } from '@/utils/motion';
import { fadeIn } from '@/utils/motion';
import { planetVariants } from '@/utils/motion';
import styles from '../styles'

const ShiYu = () => {
  return (
    // ShiYu Part
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`overflow-hidden`}
    >
      <div className='bg-[#000300] w-full py-16 px-4 text-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <motion.div
            variants={fadeIn('left', 'tween', 0.2, 1)}
            className="flex-[0.75] flex justify-center flex-col"
          >
              <p className='text-[#78bdf1] font-bold'>ASHS.NUTN CSIRC 【Founder】</p>
              <Typed className='text-xl sm:text-5xl font-bold py-2 px-2'
                strings={[
                  'ShiYu - 黃士育',
                ]}
                typeSpeed={140}
                backSpeed={150}
                startDelay={1500}
                backDelay={1000}
                showCursor={true}
                loop
              />
              <p className='font-bold whitespace-pre-line'>嗨大家好 我是黃士育 目前就讀南大附中113→212班</p>
              <p className='font-bold'>從國中開始接觸程式設計</p>
              <p className='font-bold'>上了高中後希望能為學校提供資訊學習的環境</p>
              <p className='font-bold'>所以著手籌備資訊研究社</p>
              <p className='font-bold'>希望藉由社團教學及社群討論</p>
              <p className='font-bold'>能讓更多人接觸到程式設計</p>
              <p className='font-bold'>使學生具有基礎資訊能力</p>
          </motion.div>
          <motion.div
              variants={planetVariants('right')}
              className={`flex-1 ${styles.flexCenter}`}
          >
            <img className='max-w-[256px] w-[256px] sm:w-[256px] md:w-[256px] lg:w-[256px] mx-auto my-4 rounded-full lg' src='/images/shiyu.jpeg' alt="/" />
          </motion.div> 
        </div>
      </div>
    </motion.div>

    // YuDong Part
  )
}

export default ShiYu