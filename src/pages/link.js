import Navbar from '@/components/Navbar'
import React from 'react'
import Footer from '@/components/Footer'
import '../app/globals.css'
import LinkTree from '@/components/LinkTree'

const link = () => {
  return (
    <div >
      <Navbar />
      <LinkTree />
      <Footer /> 
    </div>
  )
}

export default link