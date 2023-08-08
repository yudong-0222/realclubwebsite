import Navbar from '@/components/Navbar'
import React from 'react'
import Footer from '@/components/Footer'
import '../app/globals.css'
import LinkTree from '@/components/LinkTree'

const link = () => {
  return (
    <>
      <Navbar />
      <LinkTree />
      <Footer /> 
    </>
  )
}

export default link