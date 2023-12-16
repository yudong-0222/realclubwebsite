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
    <div className='bg-[#ffffff] w-full py-4 sm:py-16 px-4 text-black'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <motion.div
            // variants={planetVariants('left')}
            className={`flex-[0.75] ${styles.flexCenter}`}
            animate={{
              scale: [1, 1.2, 1.2, 1, 1],
              rotate: [0, 0, 360, 0],
              borderRadius: ["0%", "0%", "50%", "50%", "0%"]
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 0.5
            }}
        >
          <img className='max-w-[256px] w-[256px] sm:w-[256px] md:w-[256px] lg:w-[256px] mx-auto my-4 rounded-full justify-center' src='https://gravatar.com/userimage/243991767/f087db6f0ae114803a0cae3d1ee08afe.jpeg?size=1080' alt="/" />
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
            <p className='font-bold'>大家好 我是吳覲宇 你可以叫我 YuDong :D</p>
            <p className='font-bold'> </p>
            <p className='font-bold'>我從國小開始接觸Minecraft <br/>而開始專研Spigot Plugin</p>
            <p className='font-bold'>而除了Spigot Plugin <br/>我也喜歡接觸與前端設計有關的東西</p>
            <p className='font-bold'>上了高中之後發現有關於資訊方面的資源相當稀少</p>
            <p className='font-bold'>為了有效提升我校資訊能力 為此決定創辦資訊研究社</p>
            <p className='font-bold text-xl'>如果你對於【程式】【資訊】方面有興趣</p>
            <p className='font-bold text-xl'>非常歡迎你加入資訊研究社與我們一起討論歐!</p>
            <p className='font-bold text-3xl text-[#5e5bff]'>我常使用的語言有: 中文</p>
        </motion.div>
      </div>
    </div>
  </motion.div>
  )
}

export default Yudong