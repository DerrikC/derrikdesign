import Container from './container'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col items-center">
          <div className="flex flex-col text-black-50 lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
              derrikdesign © 2020 | All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  )
}
