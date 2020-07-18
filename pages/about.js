import TopNav from '../components/top-nav'
import Footer from '../components/footer'
import { motion } from 'framer-motion'

// import Button from 'react-bootstrap/Button'

const about = () => (

    <section>
        <TopNav />  
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="pages-container">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8"> Welcome, Welcome - I'm Derrik!</h1>

        <div className="about-text">
        <img className="profile-image" variant="top" src="../assets/blog/authors/placeholderIcon.jpeg" />
        <p>    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <br></br>
        <h2 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">Let's get Working</h2>
        <p>Just send me a message at <a href="">derrikdesign@gmail.com </a>, connect on <a href="">LinkedIn</a>, or checkout my <a href="">Dribbble</a>!</p>
        {/* <Button variant="outline-dark" size="sm">View Resume</Button> */}
        </div>
        </motion.div>
        <Footer /> 
    </section>
);

export default about;



