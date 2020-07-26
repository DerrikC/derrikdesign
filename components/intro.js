import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Typical from 'react-typical'
import { motion } from 'framer-motion'
import { Link, animateScroll as scroll } from 'react-scroll'


export default function Intro() {

  return (
    
    <section className="flex-col sm:w-auto md:flex-row w-full flex items-center md:justify-between mt-32">
      <div className="md:flex-row md:w-4/5">
      <motion.div initial={{ x: -250, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
      <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
      Hi, my name is 
      <br></br>
      Derrik Campbell. 
      </h1>
      <motion.h2 initial={{ x: -250, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} className="text-black-50 text-4xl md:text-4xl">
      I'm a
      <Typical className="typing" 
      loop={Infinity}
      wrapper="abbr"
      steps={[
        ' designer.',
        1000,
        ' developer.',
        1000,
        ' draftsman.',
        1000
      ]}
      />
       <br/>
      Currently Freelancing.
      </motion.h2>
      <br/>

      {/* <motion.div initial={{ x: -250, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1.5 }}>
      <Button variant="outline-dark" size="lg">Learn More</Button>
      
      </motion.div> */}
      <motion.p className="scroll-down text-black-50 mb-12" initial={{ x: -250, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1.5 }}>
      <Link 
          activeClass="active"
          to="work"
          spy={true}
          smooth={true}
          offset={-70}
          duration= {500}
      >↓ scroll down to view my work
      </Link>
      </motion.p>
      </motion.div>

      </div>

      <motion.img className="sm:flex-row sm:w-3/5 md:w-2/4" variant="top" src="../assets/blog/preview/3daccent.png" 
      initial= {{ y: 10 }} 
      animate={{ y: 0 }} 
      transition={{ yoyo: Infinity, duration: 2 }}>
      </motion.img>
      {/* <h4 className=" md:text-left text-lg mt-5 md:pl-8">
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


