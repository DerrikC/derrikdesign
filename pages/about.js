import TopNav from '../components/top-nav'
import Footer from '../components/footer'
// import Button from 'react-bootstrap/Button'

const about = () => (

    <section>
        <TopNav />  
        <div className="pages-container">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">Nice to meet you - I'm Derrik!</h1>
        <p>    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <h1>Reach Out!</h1>
        <p>Just send me a message at derrikdesign@gmail.com, connect on Linkedin, or checkout my Dribbble!</p>
        {/* <Button variant="outline-dark" size="sm">View Resume</Button> */}
        </div>
        <Footer /> 
    </section>
);

export default about;



