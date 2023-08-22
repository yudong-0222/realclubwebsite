'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css';
import {data} from '../constants';
import { staggerContainer, slideIn } from '../utils/motion';

const Faq = () => {
  const [cardStates, setCardStates] = useState([]);

  const handleCardClick = (index) => {
    const newCardStates = [...cardStates];
    newCardStates[index] = !newCardStates[index];
    setCardStates(newCardStates);
  };

  return (
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
            className="text-center mx-auto flex flex-col mb-[25px]"
          > 
            <Typed className='md:text-5xl sm:text-5xl text-5xl font-bold text-[#E3E4E2]'
              strings={[
                'FAQ',
                '問題集',
              ]}
              typeSpeed={140}
              backSpeed={150}
              startDelay={1000}
              backDelay={1000}
              showCursor={true}
              loop
            />
          </motion.div>

          {/* QAcards */}
          <div className='flex-[0.75] max-w-[1240px] mx-auto grid mt-[80px] text-black'>
              {data.map((item, index) => (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "tween", stiffness: 400, damping: 10 }}
                  variants={fadeIn('right','pop', index * 0.5, 0.75)}
                  key={index}
                >
                  <div className='w-full flex flex-col my-4 p-8 rounded-lg'>
                    <div className='min-w-[320px] rounded-xl mx-auto bg-white md:w-[660px] lg:w-[960px] sm:w-[540px] px-8 py-8' onClick={() => handleCardClick(index)}>
                      <h2 className='lg:text-5xl md:text-5xl sm:text-4xl font-bold text-center py-8 px-1 whitespace-nowrap'>Q: {item.question}</h2>
                      {cardStates[index] && 
                        <div className='py-8 md:text-4xl sm:text-5xl font-mono rounded-xl whitespace-pre-line shadow-lg'>
                          <p>A: {item.answer}</p>
                        </div>
                      }
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
          {/* QACards End */}
          <div className='flex mt-[5%] items-center flex-col gap-5'>
            <motion.div
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "Tween", stiffness: 400, damping: 10 }}
              variants={slideIn('left', 'pop', 1.2, 1)}
              className='justify'
            >
              <a href="https://hackmd.io/@NFIRC/founding_plan#FAQ---%E7%A4%BE%E5%9C%98%E5%B8%B8%E8%A6%8B%E5%95%8F%E9%A1%8C%E9%9B%86" target='_blank' rel='noopener noreferrer'>
                <button type="button" className="flex items-center h-fit py-5 px-16 bg-[#25E196] rounded-full gap-[12px]">
                  <span className="text-black font-bold text-2xl">
                    點我前往HackMD
                  </span>
                </button>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Faq;
