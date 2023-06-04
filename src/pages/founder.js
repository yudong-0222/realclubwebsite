import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Yudong from '@/components/Yudong'
import ShiYu from '@/components/Shiyu'

const founder = () => {
  return (
    <div>
      <Navbar />
      <ShiYu />
      <Yudong />
      <Footer />
    </div>
  )
}

export default founder