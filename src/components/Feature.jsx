import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, planetVariants, fadeIn } from '../utils/motion';
import styles from '../styles';

const Feature = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`overflow-hidden`}
    >
      <div className='bg-white w-full py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          {/* ADD FRAMER MOTION :D */}
          <motion.div
            variants={planetVariants('left')}
            className={`flex-1 ${styles.flexCenter}`}
          >
              <img className='rounded-xl w-[80%] h-[80%] mx-auto my-4' src='/images/logopng.png' alt="/" />
          </motion.div>
          <motion.div
            variants={fadeIn('left', 'tween', 0.2, 1)}
            className="flex-[0.75] flex justify-center flex-col"
          >
            <div className='flex flex-col justify-center'>
              <p className='text-[#78bdf1] font-bold'>Since 2023. We Started...!</p>
              <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>ASHS.NUTN_CSIRC 南大附中 資訊社</h1>
              <p className='font-bold'>我們是南大附中資訊社! 這是一個剛成立的社團 我們致力於提升南大附中的資訊能力!</p>
              <p className='font-bold'>一直以來，我校的資訊資源就相當稀缺，深感在此想深造資訊能力的不便。</p>
              <p className='font-bold'>為此，我們決定開創一個新的世紀、一個新的環境、一個新的 學術社團 - 資訊研究社</p>
              <p className='font-bold'>在這裡，我們將一起學習【C++】的相關知識，並且讓社員們【上機實作】</p>
              <p className='font-bold'>我們也將在這裡一起討論、研磨資訊的相關知識與技術!</p>
              <p className='font-bold'>讓每個對於資訊有著好奇、熱忱的所有人，都有一個只屬於我們的寄宿!</p>

              <motion.div
                whileTap={{ scale: 0.9 }}
              >
                {/* <button className='bg-[#0E76BC] w-[200px] rounded-lg font-medium my-6 mx-auto py-3 md:mx-0 sm:mt-[4%] md:mt-[3%] lg:mt-[2%] hover:bg-[#148ad8] active:bg-[#3aa0e4] focus:outline-none focus:ring focus:ring-[#022d4e] text-white'>A Button</button> */}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Feature