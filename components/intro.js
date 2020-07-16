import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Typical from 'react-typical'
import { motion } from 'framer-motion'

export default function Intro() {

  return (
    
  
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-32 mb-16 md:mb-12">
      <motion.div initial={{ x: -250, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5  }}>
      <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">
      Hi, my name is Derrik Campbell. 
      </h1>
      <motion.h2 initial={{ x: -250, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1  }} className="text-black-50 text-4xl md:text-4xl">
      I'm a

      <Typical 
      loop={Infinity}
      wrapper="b"
      steps={[
        ' designer.',
        1000,
        ' developer.',
        1000,
        ' digital illustrator.',
        1000,
        ' UI/UX designer.',
        1000
      ]}
      />

      <br/>
      Currently Freelancing.
      </motion.h2>
      <br/>
      
      <motion.div initial={{ x: -250, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1.5 }}>
      <Button variant="outline-dark" size="sm">Learn More</Button>
      </motion.div>

      </motion.div>
    

      {/* <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
      I am a passionate Visual|designer. {' '}
      Currently Freelancing and building a portfolio site using Next.js. Here's my current portfolio: 
        <a
          href="https://derrikxavier.com/"
          className="underline hover:text-success duration-200 transition-colors"
        >
         derrikxavier
        </a>{' '}
      </h4> */}


      
    </section>
    
 
  )
}


