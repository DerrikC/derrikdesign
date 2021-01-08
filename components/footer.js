import Container from './container'

export default function Footer() {
  return (
    <footer className="bg-gray-100 bg-accent-1 border-t border-accent-2">
      <Container>
    
        <div className="py-28 flex flex-col items-center">
         <div className="flex flex-col text-black-50 justify-center items-center lg:pl-4 lg:w-1/2">
              <p>derrikdesign © 2021 </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
