import React from 'react'
import Typed from 'react-typed';
import { motion, useAnimation} from 'framer-motion';
import { fadeIn } from '../utils/motion';

const Hero = () => {
  const controls = useAnimation();
  const handleClick = () => {
    //啟動!
    controls.start({ y: [-20, 0, -20] });
    smoothScrollTo('#feature');
  };
  // Credit by ChatGPT, helping finished the ScrollTO :D
  const smoothScrollTo = (targetSelector) => {
    const targetElement = document.querySelector(targetSelector);
    if (targetElement) {
      const startY = window.pageYOffset; //已被淘汰的用法 QQ
      const targetY = targetElement.getBoundingClientRect().top + startY;

      const duration = 1000; //毫秒為單位
      const startTime = performance.now();

      const animateScroll = (timestamp) => {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1; //wtf is this how
        const easedProgress = easeInOutCubic(progress);

        window.scrollTo(0, startY + (targetY - startY) * easedProgress);

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        } else {
          controls.start({ y: 0 });
        }
      };

      requestAnimationFrame(animateScroll);
    }
  };
  return (
    
    <motion.div
      variants={fadeIn('up','tween',0.2,0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`overflow-hidden z-0`}
    >
      <div className='-z-1 max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <div className='flex flex-row justify-center'>
          <p className='text-[#6d63fa] font-bold sm:text-2xl md:text-3xl'>NF</p>
          <p className='text-[#ff63bb] font-bold sm:text-2xl md:text-3xl'>IRC</p>    
        </div>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-extrabold md:py-6 py-4 text-white'>南大附中資研社</h1>
        <Typed className={`typed-cursor-22 md:text-5xl sm:text-4xl text-xl font-bold text-[#1ac385]`}
        strings=
        {[
          'Hello, World!',
          'Zero to Hero',
          'Since 2023',
          'Everything is Coding',
          'Nothing is impossible',
          "Let's Programming together!",
        ]}
          typeSpeed={120}
          backSpeed={140}
          startDelay={1000}
          backDelay={1500}   
          autoInsertCss={true}

          loop>
          </Typed>
      </div>
      <div className='items-center flex flex-col justify-center absolute bottom-10 w-full'>
        <a href="#feature" onClick={handleClick}>
          <motion.img
            // variants={fadeIn('up','tween', 0.3,1)}
            src='images/down_arrow.svg'
            alt='arrow-down'
            className='w-[52px] h-[52px] object-contain'
            animate={{ y: [-20, 0, -20]}}
            transition= {{ duration: 2, repeat: Infinity }}
          />
        </a>
      </div>
    </motion.div>
  )
}

export default Hero