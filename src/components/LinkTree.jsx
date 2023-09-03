'useClient'
import React from 'react'
import { motion } from 'framer-motion'
import Typed from 'react-typed';
import { LinksTree } from '@/constants'; 
import { staggerContainer, fadeIn, slideIn } from '@/utils/motion';
import { useState } from 'react';
import Swal from 'sweetalert2'


const LinkTree = () => {

  const [cardStates, setCardStates] = useState([]);
  const Toast = Swal.mixin({
    title: '表單已關閉!',
    text: '連署已經通過並且送交校方!',
    icon: 'warning',
    confirmButtonText: '歐歐好喔',
    timer: 3000,
    background: '#111111',
    color: '#ffffff',
    confirmButtonColor: '#F91389',
    iconColor: '#3FF49A',
    toast: true,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  const handleCardClick = (index) => {
    if(index === 3) {
      Toast.fire({})
    }
    const newCardStates = [...cardStates];
    newCardStates[index] = !newCardStates[index];
    setCardStates(newCardStates);
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
              className="text-center mx-auto flex flex-col mb-[25px]"
            > 
              <Typed className='md:text-5xl sm:text-5xl text-5xl font-bold text-[#E3E4E2]'
                strings={[
                  'LINK-TREE',
                  '連結樹',
                  'LinkTree',
                  '連結-Links',
                ]}
                typeSpeed={140}
                backSpeed={150}
                startDelay={1000}
                backDelay={1000}
                showCursor={true}
                loop
              />
            </motion.div>

            {/* LinkTrees Start */}
            <div className='flex-[0.75] max-w-[1240px] mx-auto grid mt-[80px] text-black'>
                {LinksTree.map((item, index) => (
                  <a href={item.url} key={index}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 120, damping: 10 }}
                      variants={slideIn('right','spring', index * 0.5, 0.75)}
                      key={index}
                    >
                      <div className='w-full flex flex-col my-4 p-8 rounded-lg'>
                        <div className='min-w-[320px] rounded-xl mx-auto bg-white md:w-[660px] lg:w-[760px] sm:w-[540px] px-1 py-0' onClick={() => handleCardClick(index)}>
                          <div key={index} className='flex justify-center items-center'>
                            <div key={index}>{item.icon}</div>

                            <h2 className='text-3xl md:text-5xl font-bold text-center py-8 px-1 whitespace-pre-line'>{item.title}</h2>
                          </div>
                          <p className='whitespace-pre-line text-2xl sm:text-3xl font-bold mb-[4%]'>{item.subtitle}</p>
                        </div>
                      </div>
                    </motion.div>
                  </a>
                ))}
            </div>
            {/* LinkTrees Enddddddddddddd */}
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default LinkTree