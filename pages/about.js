import Layout from '../components/layout'
import Head from 'next/head'
import { motion } from 'framer-motion'



// import Button from 'react-bootstrap/Button'

const about = () => (

    <section>
        <Layout>  
        <Head>
          <title>derrikdesign | about</title>
        </Head>
     
        <div className="flex-col md:flex-row flex items-center md:justify-between mt-10 mb-16 md:mb-12 py-20">
        
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="container mx-auto px-5">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8 pb-10">  Greetings - I'm Derrik! 👽</h1>

        <div className="flex md:flex-row-reverse flex-wrap">
       
        <div class="w-full md:w-2/3 p-1">
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <br></br>
        <h2 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">Let's get Working</h2>
        <p>Just send me a message at <a href="">derrikdesign@gmail.com</a>, connect on <a href="">LinkedIn</a>, or checkout my <a href="">Dribbble</a>!</p>
        </div>
        <div class="w-full md:w-1/3 pt-2 pr-10 ">
        
        <img className="profile-image shadow sm:shadow-md md:shadow-lg lg:shadow-xl xl:shadow-2xl" variant="top" src="../assets/blog/authors/placeholderIcon.jpeg" />
        </div>



        {/* <Button variant="outline-dark" size="sm">View Resume</Button> */}
        </div>
        </motion.div>
        </div>
        </Layout> 
    </section>
);

export default about;



