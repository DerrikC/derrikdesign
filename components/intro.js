export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
      Hi, my name is Derrik Campbell.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
      I am a passionate Visual|designer.
      Currently Freelancing and building a portfolio site using Next.js. Here's my current portfolio: {' '}
        <a
          href="https://derrikxavier.com/"
          className="underline hover:text-success duration-200 transition-colors"
        >
         derrikxavier
        </a>{' '}
      </h4>
    </section>
  )
}