import Layout from '../components/layout'
import Head from 'next/head'
import { motion } from 'framer-motion'



// import Button from 'react-bootstrap/Button'

const about = () => (

    <section>
        <Layout>  
        <Head>
          <title>derrikdesign | About</title>
        </Head>
     
        <div className="flex-col md:flex-row flex items-center md:justify-between mt-10 mb-16 md:mb-12 py-20">
        
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="container mx-auto px-5">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8 pb-10">  Greetings, I'm Derrik! 👽</h1>

        <div className="flex md:flex-row-reverse flex-wrap">
       
        <div className="w-full md:w-2/3 p-1">
        <p>I’m a graduate from <a href="https://www.fanshawec.ca/programs/idp3-interactive-media-design/next">Fanshawe’s Interactive Media Design </a> program with a <a href="https://sociology.uwo.ca/undergraduate/career/criminology.html"> B.A. in Criminology</a>. I combine my social science knowledge and design background and apply it to the world of empathetic user-centered design. Over the years my passion for design and technology has motivated me to create refined and practical design experiences.</p>
        <br></br>
        <br></br>
        <h2 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">Let's get Working</h2>
        <br></br>
        <p>Want to work on a project, or get to know me? Just contact me at <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=derrikdesign@gmail.com">derrikdesign@gmail.com</a>, or connect on <a href="https://www.linkedin.com/in/derrikcampbell/">LinkedIn</a>!</p>
        </div>
        <div className="w-full md:w-1/3 pt-2 pr-10">
        
        <img className="profile-image shadow sm:shadow-md md:shadow-lg lg:shadow-xl xl:shadow-2xl" variant="top" img src="/assets/blog/author/profile.jpg"/>
        </div>
        {/* <Button variant="outline-dark" size="sm">View Resume</Button> */}
        </div>
        </motion.div>
        </div>
        </Layout> 
    </section>
);

export default about;



