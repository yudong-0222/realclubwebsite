import React from 'react'
import styles from '../styles'
import { motion } from 'framer-motion'
import { staggerContainer, planetVariants, fadeIn } from '../utils/motion';


const Newslett = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`overflow-hidden`}
      >
        <div className='bg-[#1e1e1e] w-full h-screen text-white flex flex-col justify-center z-0'>
          <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
              <motion.div
                  variants={fadeIn('left', 'tween', 0.2, 1)}
                  className="flex-[0.75] flex justify-center flex-col"
              >
                  <p className='text-[#78bdf1] font-bold'>Learning Points & Course Content</p>
                  <h1 className='md:text-5xl sm:text-3xl text-2xl font-bold py-2'>認識C++ → 流暢運用C++</h1>
                  <p className='font-bold mt-2'>除了【C++】，我們也將學習【基礎演算法】</p>
                  <p className='font-bold'>這是資訊科技課沒有教過的東西，也是最令人感到興奮的地方</p>
                  <p className='font-bold'>希望藉由 認識演算法 → 運用演算法 → 應用於解決生活的問題</p>
              </motion.div>
              <motion.div 
                  variants={planetVariants('right')}
                  className={`flex-1 ${styles.flexCenter}`}
              >
                <img className='mx-auto my-4 w-[80%] h-[80%] sm:w-[80%] sm:h-[80%]' src='/images/laptop.png' alt="/" />
              </motion.div> 
            </div>
        </div>
      </motion.div>
  )
}

export default Newslett