import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn } from '../utils/motion';
import Typed from 'react-typed';

const Cards = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`overflow-hidden`}
    >
      <div className='w-full py-[5rem] px-4 bg-white'>
        <motion.div
          variants={fadeIn('down', 's', 0.0, 0.5)}
          className="text-center mx-auto flex flex-col mb-[25px]"
        > 
          <Typed className='md:text-5xl sm:text-5xl text-5xl font-bold text-[#25AAE1]'
            strings={[
              'Feature About Us',
              '',
              '社團特色',
              '',
              '',
            ]}
              typeSpeed={120}
              backSpeed={140}
              loop
          />
        </motion.div>
        <div className='flex-[0.75] max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 mt-[80px]'>
          <motion.div
              variants={fadeIn('right', 'tween', 0.2, 1)}
          >  
            {/* //card1 */}
            <div className='w-full shadow-xl flex flex-col p-4 md:my-0 my-4 rounded-lg hover:scale-105 duration-300'>
              <img src='/images/codescreen.png' alt="/" className='w-[100%] rounded-xl mx-auto mt-[-3rem] bg-white'/>
              <h2 className='text-2xl font-bold text-center py-8 sm:text-xl'>探索與發現!</h2>
              <p className='text-center text-2xl font-bold'>Searching & Finding</p>
              <div className='text-center font-medium'>
                <p className='py-2 mx-8 mt-8 font-mono'>You Will be a Adventurer!</p>
              </div>
            </div>
        </motion.div>
        <motion.div
              variants={fadeIn('up', 'tween', 0.5, 1)}
          >  
            {/* //card2 */}
            <div className='w-full bg-gray-100 bg-transparent shadow-xl flex flex-col p-4 md:my-0 my-4 rounded-lg hover:scale-105 duration-300'>
              {/* card insidce */}
              <img src='/images/cad.png' alt="/" className='w-[100%] rounded-xl mx-auto mt-[-3rem] bg-white'/>
              <h2 className='text-2xl font-bold text-center py-8 sm:text-xl'>Coding With Us!</h2>
              <p className='text-center text-2xl font-bold'>Programming & Learning</p>
              <div className='text-center font-medium'>
                <p className='py-2 mx-8 mt-8 font-mono'>You Will be a Programmer!</p>
              </div>
            </div>
        </motion.div> 
        <motion.div
              variants={fadeIn('left', 'tween', 1.0, 1)}
          >  
            {/* //card3 */}
            <div className='w-full shadow-xl flex flex-col p-4 md:my-0 my-4 rounded-lg hover:scale-105 duration-300'>
              <img src='/images/thinking.png' alt="/" className='w-[100%] rounded-xl mx-auto mt-[-3rem] bg-white'/>
              <h2 className='text-2xl font-bold text-center py-8 sm:text-xl'>思考與深化!</h2>
              <p className='text-center text-2xl font-bold'>Thinking & Deeping</p>
              <div className='text-center font-medium'>
                <p className='py-2 mx-8 mt-8 font-mono'>You Will be a Developer!</p>
              </div>
            </div>
        </motion.div>               
        </div>
      </div>
    </motion.div>
  )
}

export default Cards