import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn } from '../utils/motion';
import SwipeableViews from 'react-swipeable-views';
import Typed from 'react-typed';
import { FeatureCards } from '@/constants';

const Cards = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleChangeIndex = (index) => {
    setActiveIndex(index);
  };

  const handleNextCard = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % FeatureCards.length);
  };

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`overflow-hidden px-2 bg-[#001233] flex flex-col items-center justify-center h-screen`}
    >
      <motion.div
        variants={fadeIn('down', 's', 0.0, 0.5)}
        className="text-center mx-auto flex flex-col mb-[5rem]"
      >
        <Typed className='md:text-5xl sm:text-5xl text-5xl font-bold text-[#FF595A]'
          strings={[
            'Feature',
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
      <motion.div
        className="my-5 py-[2rem] px-2 bg-white flex flex-col justify-center items-center shadow-lg h-[505px] max-w-[540px] max-lg:max-w-[640px] rounded-lg hover:scale-105 duration-300 "
      >
        <SwipeableViews index={activeIndex} onChangeIndex={handleChangeIndex}>
          {FeatureCards.map((card, index) => (
            <div key={index} className='flex flex-col p-2 md:my-0 my-2'>
              {/* 卡片內容 */}
              <img src={card.img} className='w-[55%] h-[25%] max-lg:w-[35%] rounded-xl mx-auto bg-white' />
              <motion.h1 className='text-2xl font-bold text-center py-4 sm:text-xl'>{card.title}</motion.h1>
              <p className='text-center text-2xl font-bold'>{card.description}</p>
            </div>
          ))}
        </SwipeableViews>
      </motion.div>
      <button type="button" onClick={handleNextCard} className="mt-[2rem] py-4 px-8 bg-[#FF595A] rounded-full gap-[12px] max-lg:max-w-[50%] md:max-w-[50%] hover:scale-105 duration-500 active:bg-[#c95151]">
        <span className="text-[#DECFBF] font-bold text-lg">
          下一項
        </span>
      </button>
    </motion.div>
  );
};

export default Cards;