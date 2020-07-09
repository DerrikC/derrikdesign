import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Typical from 'react-typical'

export default function Intro() {

  return (
    
  
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-32 mb-16 md:mb-12">
      <div>
      <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">
      Hi, my name is Derrik Campbell. 
      </h1>
      <h2 className="text-black-50 text-4xl md:text-4xl">
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
      </h2>
      <br/>
      <Button variant="outline-dark" size="sm">Learn More</Button>
      </div>
    

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


