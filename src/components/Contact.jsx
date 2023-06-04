'useClient'
import React from 'react'
import Typed from 'react-typed';
import { motion } from 'framer-motion';
import { staggerContainer, slideIn, slideInfo } from '@/utils/motion';
import { fadeIn } from '@/utils/motion';
import { useState } from 'react';
import { contactInfo, contactInfo2 } from '@/constants';

const Contact = () => {
  const [states, setStates] = useState([]);

  const handleCardClick = (index) => {
    const newCardStates = [...states];
    newCardStates[index] = !newCardStates[index];
    setStates(newCardStates);
  };

  return (
    <div>
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`overflow-hidden`}>
        <div className='bg-[#000300] py-[5rem]'>
          {/* ADD FRAMER MOTION :D */}
          <motion.div className="flex-[0.75] flex justify-center flex-col text-white text-center">
            <motion.div
              variants={fadeIn('down', 's', 0.0, 0.5)}
              className="text-center mx-auto flex flex-row mb-[25px]"
            > 
              <Typed className='md:text-5xl sm:text-5xl text-5xl font-bold text-[#FFAFFB]'
                strings={[
                  'Contact Us',
                  '聯繫我們',
                ]}
                typeSpeed={140}
                backSpeed={150}
                startDelay={2500}
                backDelay={2500}
                showCursor={true}
                loop
              />
            </motion.div>

                {/* Start */}
            <div className='flex flex-col sm:flex-col md:flex-col lg:flex-row text-black justify-center items-center gap-8 mt-[5%]'>
                {contactInfo.map((item, index) => (
                  <a href={item.url} key={index}>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 120, damping: 10 }}
                      variants={slideInfo('up','spring', index * 0.5, 1.2)}
                      key={index}
                    >
                      {/* <div className='flex'> */}
                      <div className='w-[320px] h-[155px] sm:w-[512px] md:w-[320px] rounded-3xl bg-white' onClick={() => handleCardClick(index)}>
                        <div key={index} className='flex justify-center items-center'>
                          <div key={index}>{item.icon}</div>
                          <h2 className='text-2xl sm:text-4xl font-bold text-center py-8 px-1 whitespace-pre-line'>{item.title}</h2>
                        </div>
                        <p className='whitespace-pre-line text-xl sm:text-xl font-bold py-4 mt-[-10%] '>{item.descrption}</p>
                      </div>
                      {/* </div> */}
                    </motion.div>
                  </a>
                ))}
            </div>
            <div className='flex flex-col sm:flex-col md:flex-col lg:flex-row text-black justify-center items-center gap-8 mt-[5%]'>
                {contactInfo2.map((item, index) => (
                  <a href={item.url} key={index}>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 120, damping: 40 }}
                      variants={slideInfo('down','spring', index * 0.5, 1.2)}
                      key={index}
                    >
                      {/* <div className='flex'> */}
                      <div className='w-[320px] h-[155px] sm:w-[512px] md:w-[320px] rounded-3xl bg-white' onClick={() => handleCardClick(index)}>
                        <div key={index} className='flex justify-center items-center'>
                          <div key={index}>{item.icon}</div>
                          <h2 className='text-2xl sm:text-4xl font-bold text-center py-8 px-1 whitespace-pre-line'>{item.title}</h2>
                        </div>
                        <p className='whitespace-pre-line text-xl sm:text-xl font-bold py-4 mt-[-10%] '>{item.descrption}</p>
                      </div>
                      {/* </div> */}
                    </motion.div>
                  </a>
                ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default Contact