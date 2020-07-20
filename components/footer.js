import Container from './container'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
    
        <div className="py-28 flex flex-col items-center">
         <div className="flex flex-col text-black-50 justify-center items-center lg:pl-4 lg:w-1/2">
              <h8>derrikdesign © 2020 </h8>
          </div>
        </div>
      </Container>
    </footer>
  )
}
