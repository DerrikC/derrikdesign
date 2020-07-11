import TopNav from '../components/top-nav'
import Footer from '../components/footer'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

const services = () => (
    <section>
        <TopNav />
        <div className="pages-container">
        <div className="flex-col md:flex-row flex items-center md:justify-between mt-32 mb-16 md:mb-12">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">Services</h1>
        </div>
        
        <div className="services">
        <CardDeck>
          <Card>
            <Card.Img variant="top" src="../assets/services/design_services-24px.svg" />
            <Card.Body>
              <Card.Title>Branding</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="../assets/services/web-24px.svg" />
            <Card.Body>
              <Card.Title>Web Design</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to additional
                content.{' '}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="../assets/services/brush-24px.svg" />
            <Card.Body>
              <Card.Title>Illustrations</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardDeck>
        </div>
        <br></br>
        <h2>Process</h2>
        <p>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
        </p>
        </div>
       
        <Footer />
    
    </section>
    
);

export default services;
