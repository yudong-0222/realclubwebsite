import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer } from '@/utils/motion'
import { fadeIn } from '@/utils/motion'
import { planetVariants } from '@/utils/motion'
import styles from '@/styles'
import Typed from 'react-typed'

const Yudong = () => {
  return (
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`overflow-hidden`}
  >
    <div className='bg-[#ffffff] w-full h-screen py-4 sm:py-16 px-4 text-black'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <motion.div
            variants={planetVariants('left')}
            className={`flex-[0.75] ${styles.flexCenter}`}
        >
          <img className='max-w-[512px] w-[256px] sm:w-[512px] md:w-[256px] lg:w-[512px] mx-auto my-4 rounded-full justify-center' src='/images/super.png' alt="/" />
        </motion.div> 
        <motion.div
            variants={fadeIn('left', 'tween', 0.2, 1)}
            className="flex-1 flex justify-center flex-col lg:ml-48"
        >
            <p className='text-[#78bdf1] font-bold'>ASHS.NUTN CSIRC 【Founder】</p>
            <Typed className='text-2xl sm:text-5xl font-bold py-2 whitespace-nowrap'
                strings={[
                  'YuDong - 吳覲宇',
                ]}
                typeSpeed={140}
                backSpeed={150}
                startDelay={1500}
                backDelay={1000}
                showCursor={true}
                loop
            />
            <p className='font-bold'>====================</p>
            <p className='font-bold'>===========================</p>
            <p className='font-bold'>=====================</p>
        </motion.div>
      </div>
    </div>
  </motion.div>
  )
}

export default Yudong